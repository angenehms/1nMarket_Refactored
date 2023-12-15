import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { axiosPrivate } from 'apis/axios';
import * as S from './style';
import { ReactComponent as MessageIcon } from '../../../assets/icons/icon-message-circle.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/icon-share.svg';

const ProfileInfo = () => {
  const { accountname } = useParams();
  const [profile, setProfile] = useState({});

  const {
    _id,
    followerCount,
    followingCount,
    image = '',
    intro,
    isfollow,
    username,
  } = profile;

  const navigate = useNavigate();
  const loginId = JSON.parse(localStorage.getItem('id'));

  const toChatRoom = () => {

    fetch("http://localhost:8080/chat/request", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // JSON 형식으로 데이터 전송
        },
        body: JSON.stringify({loginId, _id, image, username})
      },
    ).then(() => navigate(`/chat/room?loginId=${loginId}&writerId=${_id}`)); // 아예 then 이 실행이 안되네?
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const {
        data: { profile },
      } = await axiosPrivate.get(`/profile/${accountname}`);
      setProfile(profile);
    };
    getUserInfo();
  }, [accountname]);

  const isMyProfile =
    JSON.parse(localStorage.getItem('accountname')) === accountname
      ? true
      : false;

  const handleFollow = async () => {
    const {
      data: { profile },
    } = await axiosPrivate.post(`/profile/${accountname}/follow`);
    setProfile(profile);
  };

  const handleUnfollow = async () => {
    const {
      data: { profile },
    } = await axiosPrivate.delete(`/profile/${accountname}/unfollow`);
    setProfile(profile);
  };

  const onErrorImg = (e) => {
    e.target.src = 'https://api.mandarin.weniv.co.kr/1671431659709.png';
  };

  return (
    <S.ProfileSection>
      <S.TopContent>
        <S.CustomLink to={`followers`}>
          <S.Count>{followerCount}</S.Count>
          <S.CountInfo>followers</S.CountInfo>
        </S.CustomLink>
        <S.ProfileImg
          src={
            image.includes('mandarin.api')
              ? image.replace('mandarin.api', 'api.mandarin')
              : image
          }
          alt={`${accountname}의 프로필 사진`}
          onError={onErrorImg}
        />

        <S.CustomLink to={`followings`}>
          <S.Count right>{followingCount}</S.Count>
          <S.CountInfo>followings</S.CountInfo>
        </S.CustomLink>
      </S.TopContent>

      <S.Name>{username}</S.Name>
      <S.AccountName>{accountname}</S.AccountName>
      <S.Intro>{intro}</S.Intro>

      <S.ButtonWrapper>
        {isMyProfile ? (
          <>
            <Link to='edit' state={{ image, username, accountname, intro }}>
              <S.MyProfileButton>프로필 수정</S.MyProfileButton>
            </Link>
            <Link to='product'>
              <S.MyProfileButton>1/N 모집하기</S.MyProfileButton>
            </Link>
          </>
        ) : (
          <>
            <S.IconButton onClick={toChatRoom}>
              <MessageIcon
                style={{
                  width: '22px',
                  height: '22px',
                  margin: '3px 5px 3px 6px',
                }}
              />
            </S.IconButton>
            {isfollow ? (
              <S.YourProfileButton onClick={handleUnfollow} isfollow={isfollow}>
                언팔로우
              </S.YourProfileButton>
            ) : (
              <S.YourProfileButton onClick={handleFollow} isfollow={isfollow}>
                팔로우
              </S.YourProfileButton>
            )}
            <S.IconButton>
              <ShareIcon
                style={{
                  width: '20px',
                  height: '20px',
                  margin: '6px 5px',
                }}
              />
            </S.IconButton>
          </>
        )}
      </S.ButtonWrapper>
    </S.ProfileSection>
  );
};

export default ProfileInfo;
