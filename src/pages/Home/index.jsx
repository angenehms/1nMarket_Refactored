import React, { useRef, useEffect, useState } from 'react';
import { HomeHeader, PostsList } from 'components';
import { axiosPrivate } from 'apis/axios';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { ActionObj_Home } from 'store';

const Home = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state)=>state.postsList)
  const [hasNextFeed, setHasNextFeed] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const page = useRef(0);
  const observerTargetEl = useRef(null);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextFeed) return;

    const getFeed = async () => {
      const {
        data: { posts },
      } = await axiosPrivate.get(`/post/feed/?limit=10&skip=${page.current}`);
      dispatch(ActionObj_Home(posts))
      // setPostList((prev) => [...prev, ...posts]);
      setHasNextFeed(posts.length % 10 === 0);
      setIsLoading(false);
      page.current += 10;
    };

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getFeed();
      }
    });
    io.observe(observerTargetEl.current);

    return () => {
      io.disconnect();
    };
  }, [hasNextFeed]);

  return (
    <>
      <HomeHeader />
      <S.Container>
        {isLoading ? (
          <></>
        ) : postsList.length ? (
          <PostsList postsList={postsList}/>
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
