import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';
import { getCookie } from '../../cookie';

const Public = () => {
  const navigate = useNavigate();
  const token = getCookie('token');
  // const token = JSON.parse(localStorage.getItem('token'));

  useEffect(() => {
    if (token) navigate('/home');
  }, []);

  return (
    <S.PublicContainer>
      <S.MarketLogoIcon />

      <S.LoginSection>
        <S.KakaoLoginButton>카카오톡 계정으로 로그인</S.KakaoLoginButton>
        <S.GoogleLoginButton>구글 계정으로 로그인</S.GoogleLoginButton>
        <S.FacebookLoginButton>페이스북 계정으로 로그인</S.FacebookLoginButton>

        <S.LinkBox>
          <Link to='/login'>이메일로 로그인</Link>
          <Link to='/signup'>회원가입</Link>
        </S.LinkBox>
      </S.LoginSection>
    </S.PublicContainer>
  );
};

export default Public;
