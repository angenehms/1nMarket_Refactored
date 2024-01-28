import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostsList, PostAlbum } from 'components';
import * as S from './style';
import { axiosPrivate } from 'apis/axios';
import { useDispatch, useSelector } from 'react-redux';
import { ActionObj_MyPosts } from 'store';
import { useQuery } from 'react-query';

const MyPosts = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.myPostsList);
  const { accountname } = useParams();
  const [selectList, setSelectList] = useState(true);

  const { data } = useQuery(["getAllPosts", accountname, postsList] , async () => {
    return await axiosPrivate.get(`/post/${accountname}/userpost`).then((result) => {
      dispatch(ActionObj_MyPosts(result.data.post));
      return result;
    });
  })

  const filteredPostsList = data?.data.post.filter((item) => item.image);

  // useEffect(() => { // 위의 useQuery 코드로 대체
  //   const getAllPosts = async () => {
  //     const {
  //       data: { post },
  //     } = await axiosPrivate.get(`/post/${accountname}/userpost`);

  //     dispatch(ActionObj_MyPosts(post));
  //   };
  //   getAllPosts();
  // }, [accountname]);

  return (
    <>
      <S.HeaderWrapper>
        <S.PostHeader>
          {selectList ? (
            <>
              <S.PostListOnIcon />
              <S.PostAlbumOffIcon onClick={() => setSelectList(false)} />
            </>
          ) : (
            <>
              <S.PostListOffIcon onClick={() => setSelectList(true)} />
              <S.PostAlbumOnIcon />
            </>
          )}
        </S.PostHeader>
      </S.HeaderWrapper>
      {selectList ? (
        <PostsList postsList={data?.data.post} />
      ) : (
        <PostAlbum postsList={filteredPostsList} />
      )}
    </>
  );
};

export default MyPosts;
