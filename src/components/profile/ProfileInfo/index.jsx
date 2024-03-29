import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { axiosPrivate } from 'apis/axios';
import * as S from './style';
import { ReactComponent as MessageIcon } from '../../../assets/icons/icon-message-circle.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/icon-share.svg';
import { useQuery } from 'react-query';
import { getCookie } from '../../../cookie';

const ProfileInfo = () => {
  const { accountname } = useParams();
  const loginIdAccountname = getCookie('accountname');
  const [loginIdUsername, setLoginIdUsername] = useState('');
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getLoginIdUsername = async () => {
      const {
        data: { profile },
      } = await axiosPrivate.get(`/profile/${loginIdAccountname}`);
      setLoginIdUsername(profile.username);
    };
    getLoginIdUsername();
  }, []);

  const {
    _id,
    image = '',
    intro,
    username,
    // followerCount,
    // followingCount,
    // isfollow,
  } = profile;

  const navigate = useNavigate();
  const loginId = getCookie('id');
  const loginIdProfileImg = getCookie('profile-img');

  const toChatRoom = async () => {

    await fetch(`${process.env.REACT_APP_SERVER_URL}/chat/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // JSON 형식으로 데이터 전송
        },
        body: JSON.stringify({loginId, _id, loginIdProfileImg, image, loginIdUsername, username})
      }, // 서버로 유저정보 보내서 서버에선 받은 정보를 이용해서 채팅방 다큐먼트 만들기, 후에 서버에선 채팅다큐먼트고유id 를 응답값으로 보내기
    ).then((r) => r.json())
    .then(data => navigate(`/chat/${data.insertedId}`))

    // 위 post 요청에 대한 응답으로 받은 채팅다큐먼트고유id 를 가져와 url 파라미터에 담고 그곳으로 navigate

    // 그럼 chatroom 페이지에서는 마운트 시에 ajax 요청을 통해 get 요청을 보내면
    // 서버에서는 채팅방 고유 id로 쓰인 url 파라미터를 추출후 해당 다큐먼트를 디비에서 찾아 응답값으로 보낸다.

    // 그럼 그 응답값을 받은 클라이언트에서는 채팅데이터를 화면에 구현한다.
  };

  const { data, isLoading } = useQuery(
    ['userData', accountname, profile],
    async () => {
      return await axiosPrivate
        .get(`/profile/${accountname}`)
        .then((result) => {
          setProfile(result.data.profile);
          return result;
        });
    },
  );

  // useEffect(() => { // 바로 위 useQuery 식으로 대체
  //   const getUserInfo = async () => {
  //     const {
  //       data: { profile },
  //     } = await axiosPrivate.get(`/profile/${accountname}`);
  //     setProfile(profile);
  //   };
  //   getUserInfo();
  // }, [accountname]);

  const isMyProfile = getCookie('accountname') === accountname ? true : false;

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
          <S.Count>{data?.data.profile.followerCount}</S.Count>
          <S.CountInfo>followers</S.CountInfo>
        </S.CustomLink>
        <S.ProfileImg
          src={
            isLoading
              ? 'https://api.mandarin.weniv.co.kr/1671431659709.png'
              : data?.data.profile.image.includes('mandarin.api')
              ? data?.data.profile.image.replace('mandarin.api', 'api.mandarin')
              : data?.data.profile.image
          }
          alt={`${accountname}의 프로필 사진`}
          onError={onErrorImg}
        />

        <S.CustomLink to={`followings`}>
          <S.Count right>{data?.data.profile.followingCount}</S.Count>
          <S.CountInfo>followings</S.CountInfo>
        </S.CustomLink>
      </S.TopContent>

      <S.Name>{data?.data.profile.username}</S.Name>
      <S.AccountName>{accountname}</S.AccountName>
      <S.Intro>{data?.data.profile.intro}</S.Intro>

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
            {data?.data.profile.isfollow ? (
              <S.YourProfileButton
                onClick={handleUnfollow}
                isfollow={data?.data.profile.isfollow}
              >
                언팔로우
              </S.YourProfileButton>
            ) : (
              <S.YourProfileButton
                onClick={handleFollow}
                isfollow={data?.data.profile.isfollow}
              >
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
