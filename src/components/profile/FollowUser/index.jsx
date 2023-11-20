import React, { useState } from 'react';
import { axiosPrivate } from 'apis/axios';
import * as S from './style';

const FollowUser = ({ image, accountname, username, intro, isfollow }) => {
  const [follow, setFollow] = useState(isfollow);

  const onErrorImg = (e) => {
    e.target.src = 'https://api.mandarin.weniv.co.kr/1671431659709.png';
  };

  const handleFollow = async () => {
    await axiosPrivate.post(`/profile/${accountname}/follow`);
    setFollow(!follow);
  };

  const handleUnfollow = async () => {
    await axiosPrivate.delete(`/profile/${accountname}/unfollow`);
    setFollow(!follow);
  };

  return (
    <S.User>
      <S.StyleLink to={`/profile/${accountname}`}>
        <S.UserImage
          src={
            image.includes('mandarin.api')
              ? image.replace('mandarin.api', 'api.mandarin')
              : image
          }
          alt='사용자 프로필 이미지'
          onError={onErrorImg}
        />

        <S.UserInfo>
          <S.UserName>{username}</S.UserName>
          <S.UserIntro>{intro}</S.UserIntro>
        </S.UserInfo>
      </S.StyleLink>

      <S.FollowButton
        onClick={follow ? handleUnfollow : handleFollow}
        style={{
          backgroundColor: !follow ? '#495573' : '#fff',
          color: !follow ? '#fff' : '#767676',
          border: !follow ? 'none' : '1px solid #dbdbdb',
        }}
      >
        {!follow ? '팔로우' : '취소'}
      </S.FollowButton>
    </S.User>
  );
};

export default FollowUser;
