import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const PostAlubm = ({ postsList }) => {
  const postsImage = postsList.map((post) => [post.id, post.image.split(',')]);

  return (
    <>
      <S.AlbumWrapper>
        <S.PostContainer>
          {postsImage.map(([id, images]) => (
            <S.PostAlbumItem key={id}>
              {images.length >= 2 && <S.ImageLayerIcon />}
              <Link to={`/postdetail/${id}`}>
                <S.AlbumImg
                  src={
                    images[0].includes('mandarin.api')
                      ? images[0].replace('mandarin.api', 'api.mandarin')
                      : images[0]
                  }
                  alt=''
                />
              </Link>
            </S.PostAlbumItem>
          ))}
        </S.PostContainer>
      </S.AlbumWrapper>
    </>
  );
};

export default PostAlubm;
