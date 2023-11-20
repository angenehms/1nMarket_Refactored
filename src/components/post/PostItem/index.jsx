import React, { memo, useState } from 'react';
import { axiosPrivate } from 'apis/axios';
import ImageSlide from '../ImageSlide';
import * as S from './style';
import { ReactComponent as UnLikeIcon } from 'assets/icons/unheart.svg';
import { ReactComponent as LikeIcon } from 'assets/icons/heart.svg';
import { ReactComponent as CommentIcon } from 'assets/icons/message-circle.svg';
import { MyPostModal, PostModal } from 'components';

const PostItem = ({ post, setPostsList }) => {
  const [openModal, setOpenModal] = useState(false);
  const [heart, setHeart] = useState(post.hearted || false);
  const [heartCount, setHearCount] = useState(post.heartCount || 0);
  const images = post?.image?.split(',');
  const accountname = JSON.parse(localStorage.getItem('accountname'));

  const handleLike = async () => {
    await axiosPrivate.post(`/post/${post.id}/heart`);
    setHeart((prev) => !prev);
    setHearCount((prev) => prev + 1);
  };

  const handleUnLike = async () => {
    await axiosPrivate.delete(`/post/${post.id}/unheart`);
    setHeart((prev) => !prev);
    setHearCount((prev) => prev - 1);
  };

  return (
    <>
      <S.PostArticle>
        <S.AuthorInfo>
          <S.AuthorProfileLink to={`/profile/${post.author.accountname}`}>
            <S.AuthorImage src={
            post.author.image.includes('mandarin.api')
              ? post.author.image.replace('mandarin.api', 'api.mandarin')
              : post.author.image
          } />
            <S.AuthorNameWrapper>
              <S.UserName>{post.author.username}</S.UserName>
              <S.AccountName>{post.author.accountname}</S.AccountName>
            </S.AuthorNameWrapper>
          </S.AuthorProfileLink>
        </S.AuthorInfo>

        <S.PostContent>
          <S.PostText>
            {post.content?.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </S.PostText>
          {!!images && <ImageSlide images={images} />}
          <S.LikeCommentCount>
            <S.LikeBtn onClick={heart ? handleUnLike : handleLike}>
              {heart ? <LikeIcon /> : <UnLikeIcon />}
              <span>{heartCount}</span>
            </S.LikeBtn>
            <S.CommentLink to={`/post/${post.id}`}>
              <CommentIcon />
              <span>{post.commentCount}</span>
            </S.CommentLink>
          </S.LikeCommentCount>
          <S.DateText>
            {new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(
              new Date(post.createdAt),
            )}
          </S.DateText>
        </S.PostContent>

        <S.RightIcon onClick={() => setOpenModal(true)} />
      </S.PostArticle>
      {openModal &&
        (accountname === post.author.accountname ? (
          <MyPostModal
            setOpenModal={setOpenModal}
            postId={post.id}
            setPostsList={setPostsList}
            post={post}
          />
        ) : (
          <PostModal setOpenModal={setOpenModal} />
        ))}
    </>
  );
};

export default memo(PostItem);
