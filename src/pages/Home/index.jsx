import React, { useRef, useEffect, useState } from 'react';
import { HomeHeader, PostsList } from 'components';
import { axiosPrivate } from 'apis/axios';
import * as S from './style';
import { useQuery } from 'react-query';
// import { useDispatch } from 'react-redux';
// import { ActionObj_Home } from 'store';

const Home = () => {
  const [hasNextFeed, setHasNextFeed] = useState(true);
  const page = useRef(0);
  const observerTargetEl = useRef(null);
  const postsList = useRef([]);
  // const dispatch = useDispatch();
  // const postsList = useSelector((state) => state.postsList);
  // const [isLoading, setIsLoading] = useState(true);

  const { data, isLoading, refetch } = useQuery("getFeed", async () => { 
    return await axiosPrivate.get(`/post/feed/?limit=10&skip=${page.current}`).then((result) => {
      postsList.current.push(...result.data.posts);
      page.current += 10;
      setHasNextFeed(result.data.posts.length % 10 === 0);
      
      return postsList.current
    })
  })

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextFeed) return;

    // const getFeed = async () => {
    //   const {
    //     data: { posts },
    //   } = await axiosPrivate.get(`/post/feed/?limit=10&skip=${page.current}`);
    //   dispatch(ActionObj_Home(posts));
    //   // setPostList((prev) => [...prev, ...posts]);
    //   setHasNextFeed(posts.length % 10 === 0);
    //   // setIsLoading(false);
    //   page.current += 10;
    // };

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // getFeed();
        refetch()
      }
    });
    io.observe(observerTargetEl.current);

    return () => {
      io.disconnect();
    };
  }, []);

  // useEffect(() => {
  //   dispatch({ type: 'Home_Page_SetPostsList_CleanUp' });
  // }, []);

  return (
    <>
      <HomeHeader />
      <S.Container>
        {isLoading ? (
          <></>
        ) : data.length ? (
          <PostsList postsList={data} />
        ) : (
          <S.NoneFeedBox>
            <S.NoneFeedAlert>유저를 검색해 팔로우 해보세요!</S.NoneFeedAlert>
            <S.SearchLink to='/search'>검색하기</S.SearchLink>
          </S.NoneFeedBox>
        )}

        <div ref={observerTargetEl} />
      </S.Container>
    </>
  );
};

export default Home;
