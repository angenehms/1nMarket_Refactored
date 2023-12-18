import { ChatHeader } from 'components';
import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import * as S from './style';
import { ReactComponent as ChatIcon } from './../../assets/icons/icon-message-circle.svg';
import { useEffect } from 'react';
import io from 'socket.io-client';

const ChatRoom = () => {

 // 서버의 주소를 입력합니다.
 const socket = io('http://localhost:8080');
 const { id } = useParams()

  useEffect(() => {

    // 서버로부터의 메시지 수신
    socket.on('serverMsg', (data) => {
      console.log(data);
    });

    socket.emit('ask-join', `${id}`);

    // 컴포넌트가 언마운트될 때 소켓 연결을 해제합니다.
    return () => {
      socket.disconnect();
    };
  }, []);

  const [inputValue, setInputValue] = useState('');
  const [searchParams] = useSearchParams();

  // 쿼리 파라미터 중 'with'의 값을 가져옴
  const writerUsername = searchParams.get('with');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 서버로 메시지 전송
    socket.emit('clientMsg', {msg:`${inputValue}`, roomId:`${id}`});
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
