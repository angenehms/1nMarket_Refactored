import { ChatHeader } from 'components';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as S from './style';
import { ReactComponent as ChatIcon } from './../../assets/icons/icon-message-circle.svg';

const ChatRoom = () => {

  const [inputValue, setInputValue] = useState('');
  const [searchParams] = useSearchParams();

  // 쿼리 파라미터 중 'with'의 값을 가져옴
  const writerUsername = searchParams.get('with');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
  };

  const onChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <ChatHeader writerUsername={writerUsername}/>

      <S.Content>
        <S.ChatContents>
          <S.Someone>
            <div>Someone</div>
          </S.Someone>
          <S.MyChat>MyChat</S.MyChat>
          <S.Someone>
            <div>Someone</div>
          </S.Someone>
          <S.MyChat>MyChat</S.MyChat>
        </S.ChatContents>
      </S.Content>

      <S.FormWrapper onSubmit={handleSubmit}>
        <S.ChatInput type='text' onChange={onChangeValue} value={inputValue} />
        <S.SendBtn type='submit'>
          <ChatIcon />
        </S.SendBtn>
      </S.FormWrapper>
    </>
  );
};

export default ChatRoom;
