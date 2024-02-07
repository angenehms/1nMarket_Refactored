import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { axiosPrivate } from 'apis/axios';
import { UserProfileForm, SaveHeader } from 'components';
import { useTitle } from 'hooks';
import * as S from './style';
import { setCookie } from '../../cookie';

const ProfileModify = () => {
  useTitle('1nMarket - ProfileModify');
  const { state } = useLocation();
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState(state?.image || '');
  const [username, setUsername] = useState(state?.username || '');
  const [accountname, setAccountname] = useState(state?.accountname || '');
  const [intro, setIntro] = useState(state?.intro || '');
  const [canSave, setCanSave] = useState(false);

  const handleProductUpload = async (e) => {
    e.preventDefault();
    if (!canSave) return;
    await axiosPrivate.put(
      '/user',
      JSON.stringify({
        user: {
          username,
          accountname,
          intro,
          image: profileImg,
        },
      }),
    );
    
    setCookie('username', JSON.stringify(username));
    setCookie('accountname', JSON.stringify(accountname));
    setCookie('profile-img', JSON.stringify(profileImg));

    navigate(`/profile/${accountname}`);
  };

  useEffect(() => {
    if (!state) navigate('/home');
  }, []);

  return (
    <>
      <SaveHeader canSave={canSave} handleProductUpload={handleProductUpload} />
      <S.ProfileFormWrapper>
        <h2 className='ir'>내 프로필 수정</h2>
        <UserProfileForm
          profileImg={profileImg}
          setProfileImg={setProfileImg}
          username={username}
          setUsername={setUsername}
          accountname={accountname}
          setAccountname={setAccountname}
          intro={intro}
          setIntro={setIntro}
          canSave={canSave}
          setCanSave={setCanSave}
        />
      </S.ProfileFormWrapper>
    </>
  );
};

export default ProfileModify;
