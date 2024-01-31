import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { axiosImgUpload, axiosPrivate } from 'apis/axios';
import * as S from './style';
import { getCookie } from '../../../cookie';

const USERNAME_REGEX = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{2,10}$/;
// eslint-disable-next-line
const ACCOUNTNAME_REGEX = /^[a-z0-9\.\_]{2,15}$/;

const UserProfileForm = ({
  setCanSave,
  username,
  setUsername,
  accountname,
  setAccountname,
  intro,
  setIntro,
  profileImg,
  setProfileImg,
}) => {
  const { pathname } = useLocation();
  const [validUserName, setValidUserName] = useState(false);
  const [errUserNameMsg, setErrUserNameMsg] = useState('');
  const [validAccountName, setValidAccountName] = useState(false);
  const [validDupAccountName, setValidDupAccountName] = useState(
    pathname.includes('/edit') ? true : false,
  );
  const [errAccountNameMsg, setErrAccountNameMsg] = useState('');
  const userAccountname = getCookie('accountname') || '';
  // const userAccountname = JSON.parse(localStorage.getItem('accountname')) || '';

  const handleImgUpload = async (e) => {
    if (!e.target.files[0]) return;

    let form = new FormData();
    form.append('image', e.target.files[0]);
    // 서버에 파일 전달
    const {
      data: { filename },
    } = await axiosImgUpload.post('/image/uploadfile', form);

    setProfileImg(`https://api.mandarin.weniv.co.kr/${filename}`);
  };

  // 계정 ID 중복확인
  const handleDupAccountName = async () => {
    if (validAccountName === true && userAccountname !== accountname) {
      try {
        const { data } = await axiosPrivate.post(
          `/user/accountnamevalid`,
          JSON.stringify({
            user: {
              accountname: accountname,
            },
          }),
        );
        if (data.message === '사용 가능한 계정ID 입니다.') {
          setValidDupAccountName(true);
          setErrAccountNameMsg(data.message);
        } else if (data.message === '잘못된 접근입니다.') {
          setValidDupAccountName(false);
          setErrAccountNameMsg('');
        } else {
          setValidDupAccountName(false);
          setErrAccountNameMsg(data.message);
        }
      } catch (error) {
        console.error('err');
      }
    } else if (userAccountname === accountname) {
      setValidDupAccountName(true);
    } else {
      setValidDupAccountName(false);
    }
  };

  // 계정 ID 유효성 체크
  useEffect(() => {
    const result = ACCOUNTNAME_REGEX.test(accountname);

    if (accountname.length && !result) {
      setValidDupAccountName(false);
      setErrAccountNameMsg(
        '영문 소문자,숫자와 특수문자 마침표(.),밑줄(_)만 사용 가능합니다.',
      );
      setValidAccountName(false);
    } else {
      setErrAccountNameMsg('');
      setValidAccountName(true);
    }
  }, [accountname]);

  // 사용자 이름 유효성 체크
  useEffect(() => {
    const result = USERNAME_REGEX.test(username);
    setValidUserName(result);

    if (username.length && !result) {
      setErrUserNameMsg('2~10자의 한글,영어,숫자만 사용 가능합니다.');
      setValidAccountName(false);
    } else if (!username) {
      setErrUserNameMsg('');
      setValidAccountName(false);
    } else {
      setErrUserNameMsg('');
      setValidAccountName(true);
    }
  }, [username]);

  useEffect(() => {
    setCanSave(validUserName && validAccountName & validDupAccountName);
  }, [validUserName, validAccountName, validDupAccountName]);

  // 회원가입처리

  return (
    <>
      <S.ProfileForm>
        <S.FileWrapper>
          <S.FileLabel htmlFor='profileImg'>
            <S.ProfileImg
              src={
                profileImg.includes('mandarin.api')
                  ? profileImg.replace('mandarin.api', 'api.mandarin')
                  : profileImg
              }
              alt='프로필 사진'
            />
          </S.FileLabel>
          <input
            id='profileImg'
            type='file'
            accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
            onChange={handleImgUpload}
            className='ir'
          />
        </S.FileWrapper>
        <S.InputWrapper length='16px'>
          <S.ProfileLabel htmlFor='userName'>사용자 이름</S.ProfileLabel>
          <S.ProfileInput
            id='userName'
            placeholder='2~10자의 한글,영어,숫자만 사용 가능합니다.'
            maxLength='10'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errUserNameMsg && (
            <S.ErrMsg validcheck={validUserName}>{errUserNameMsg}</S.ErrMsg>
          )}
        </S.InputWrapper>
        <S.InputWrapper length='16px'>
          <S.ProfileLabel htmlFor='accountName'>계정 ID</S.ProfileLabel>
          <S.ProfileInput
            id='accountName'
            placeholder='영문 소문자,숫자, 특수문자(.),(_)만 사용 가능합니다.'
            maxLength='15'
            value={accountname}
            onChange={(e) => setAccountname(e.target.value)}
            onBlur={handleDupAccountName}
          />
          {errAccountNameMsg && (
            <S.ErrMsg validcheck={validDupAccountName}>
              {errAccountNameMsg}
            </S.ErrMsg>
          )}
        </S.InputWrapper>
        <S.InputWrapper length='30px'>
          <S.ProfileLabel htmlFor='introduce'>소개</S.ProfileLabel>
          <S.ProfileInput
            id='introduce'
            placeholder='간단한 자기소개를 적어주세요!'
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
        </S.InputWrapper>
      </S.ProfileForm>
    </>
  );
};

export default UserProfileForm;
