import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'apis/axios';
import { useTitle } from 'hooks';
import * as S from './style';

const Login = () => {
  useTitle('1nMarket - Login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef();

  const from = location.state?.from?.pathname || '/';

  const canLogin = !!email.length && !!password.length;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canLogin) return;

    const { data } = await axios.post(
      '/user/login',
      JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    );
    if (data?.status === 422) {
      return setErrMsg(data?.message);
    }
    
    localStorage.setItem("id", JSON.stringify(data?.user?._id))
    localStorage.setItem('token', JSON.stringify(data?.user?.token));
    localStorage.setItem('profile-img', JSON.stringify(data?.user?.image));
    localStorage.setItem(
      'accountname',
      JSON.stringify(data?.user?.accountname),
    );
    setEmail('');
    setPassword('');
    navigate(from, { replace: true });

  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('token'))) {
      navigate('/home');
    }
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, []);

  return (
    <S.Container>
      <S.Title>로그인</S.Title>
      <S.LoginForm onSubmit={handleSubmit}>
        <S.InputWrapper>
          <S.Label htmlFor='email'>이메일</S.Label>
          <S.LoginInput
            id='email'
            type='text'
            ref={inputRef}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputWrapper>

        <S.Label htmlFor='pwd'>비밀번호</S.Label>
        <S.LoginInput
          id='pwd'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        {errMsg && <S.AlarmParagraph>{errMsg}</S.AlarmParagraph>}

        <S.LoginButton
          style={{ backgroundColor: canLogin ? '#495573' : '#abb9d6' }}
        >
          로그인
        </S.LoginButton>
      </S.LoginForm>

      <S.StyledLink to='/signup'>이메일로 회원가입</S.StyledLink>
    </S.Container>
  );
};

export default Login;
