import React, { useEffect, useState } from 'react';
import { axiosPrivate } from 'apis/axios';
import { useParams } from 'react-router-dom';
import {
  PostsList,
  CommentBox,
  CommentInput,
  ProfileHeader,
  ProfileModal,
} from 'components';
import { useTitle } from 'hooks';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { ActionObj_Post } from 'store';

const Post = () => {
  useTitle('1nMarket - Post');
  const dispatch = useDispatch(); // 리덕스
  const postsList = useSelector((state) => state.postPagePost);
  const { postId } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [comments, setComments] = useState([]);

  const getPostData = async () => {
    const {
      data: { post },
    } = await axiosPrivate.get(`/post/${postId}`);

    dispatch(ActionObj_Post(post));
  };

  const getComments = async () => {
    const {
      data: { comments },
    } = await axiosPrivate.get(`/post/${postId}/comments`);
    setComments(comments);
  };

  useEffect(() => {
    getPostData(); // 리덕스
    getComments();
  }, []);

  return (
    <>
      <ProfileHeader setOpenModal={setOpenModal} />
      <S.PostContainer>
        <PostsList postsList={postsList} />
        <CommentBox
          postId={postId}
          comments={comments}
          setComments={setComments}
        />
      </S.PostContainer>
      <CommentInput postId={postId} setComments={setComments} />
      {openModal && <ProfileModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Post;
