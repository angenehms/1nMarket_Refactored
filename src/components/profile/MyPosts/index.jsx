import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PostsList, PostAlbum } from 'components';
import * as S from './style';
import { axiosPrivate } from 'apis/axios';
import { useDispatch, useSelector } from 'react-redux';
import { ActionObj_MyPosts } from 'store';

const MyPosts = () => {
  const dispatch = useDispatch();
  const postsList = useSelector((state) => state.myPostsList);
  const { accountname } = useParams();
  const [selectList, setSelectList] = useState(true);
  const filteredPostsList = postsList.filter((item) => item.image);

  useEffect(() => {
    const getAllPosts = async () => {
      const {
        data: { post },
      } = await axiosPrivate.get(`/post/${accountname}/userpost`);

      dispatch(ActionObj_MyPosts(post));
    };
    getAllPosts();
  }, [accountname]);

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
        <PostsList postsList={postsList} />
      ) : (
        <PostAlbum postsList={filteredPostsList} />
      )}
    </>
  );
};

export default MyPosts;
