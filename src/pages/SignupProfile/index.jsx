import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { axiosPrivate } from 'apis/axios';
import { UserProfileForm } from 'components';
import { useTitle } from 'hooks';
import * as S from './style';

const SignupProfile = () => {
  useTitle('1nMarket - SignupProfile');
  const { state } = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
  const [profileImg, setProfileImg] = useState(
    'https://api.mandarin.weniv.co.kr/1671431659709.png',
  );
  const [canSave, setCanSave] = useState(false);

  useEffect(() => {
    if (!state?.email || !state?.password) navigate('/signup');
  }, []);

  const handleUserSignup = async (e) => {
    e.preventDefault();
    if (!canSave) return;
    await axiosPrivate.post(
      '/user',
      JSON.stringify({
        user: {
          username,
          email: state?.email,
          password: state?.password,
          accountname,
          intro,
          image: profileImg,
        },
      }),
    );
    navigate('/login');
  };

  return (
    <>
      <S.SignupWrapper>
        <S.Title>프로필 설정</S.Title>
        <S.Desc>나중에 언제든지 변경할 수 있습니다.</S.Desc>
        <UserProfileForm
          setCanSave={setCanSave}
          handleUserSignup={handleUserSignup}
          username={username}
          setUsername={setUsername}
          accountname={accountname}
          setAccountname={setAccountname}
          intro={intro}
          setIntro={setIntro}
          profileImg={profileImg}
          setProfileImg={setProfileImg}
        />
        <S.SignupButton disabled={!canSave} onClick={handleUserSignup}>
          1n마켓 시작하기
        </S.SignupButton>
      </S.SignupWrapper>
    </>
  );
};

export default SignupProfile;
