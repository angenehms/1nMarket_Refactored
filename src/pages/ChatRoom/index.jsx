import { ChatHeader } from 'components';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { ReactComponent as ChatIcon } from './../../assets/icons/icon-message-circle.svg';

const ChatRoom = () => {
  const id = useParams();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue('');
  };

  const onChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <ChatHeader id={id} />

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
