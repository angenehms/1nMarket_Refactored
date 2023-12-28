import { ChatHeader } from 'components';
import React, { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import * as S from './style';
import { ReactComponent as ChatIcon } from './../../assets/icons/icon-message-circle.svg';
import { useEffect } from 'react';
import io from 'socket.io-client';

const ChatRoom = () => {
  // 서버의 주소를 입력합니다.
  const socket = io('http://localhost:8080');
  const { id } = useParams(); // 채팅방 다큐먼트 고유아이디
  const loginId = JSON.parse(localStorage.getItem('id')); // 로그인된 id
  const [chatState, setChatState] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [toggle, setToggle] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  // const check = useRef(true);

  // 쿼리 파라미터 중 'with'의 값을 가져옴
  const writerId = searchParams.get('writerId');
  const writerUsername = searchParams.get('with');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 서버로 메시지 전송
    socket.emit('clientMsg', {
      msg: `${inputValue}`,
      roomId: `${id}`,
      from: `${loginId}`,
      to: `${writerId}`,
      whenSend: `${new Date()}`,
    });

    window.scrollTo(0, document.body.scrollHeight);
    setInputValue('');
  };

  const onChangeValue = (e) => {
    setInputValue(e.target.value);
  };

  // useEffect(() => {
  //   if(check.current) {
  //     window.scrollTo(0, document.body.scrollHeight);
  //     // check.current = false
  //   }
  // }, [chatState])

  // useEffect(() => {

  //   const protectChatRoomPrivacy = async () => {
  //     const mountData = await fetch(
  //       `http://localhost:8080/chat/${id}/${loginId}/${writerId}`,
  //       {
  //         method: 'GET',
  //       },
  //     ).then((r) => r.json());

  //     if (mountData.canJoin) {
  //       setChatState(mountData.chatData);
  //       socket.on('serverMsg', (data) => {
  //         setChatState((prevArray) => [...prevArray, data]);
  //       });
  //       socket.emit('ask-join', `${id}`);
  //     } else {
  //       navigate('/Home');
  //     }
  //   };

  //   protectChatRoomPrivacy();
    
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  const getFirstData = async () => {
    const mountData = await fetch(
      `http://localhost:8080/chat/${id}/${loginId}/${writerId}`,
      {
        method: 'GET',
      },
    ).then((r) => r.json());
    if (mountData.canJoin) { 
      setChatState(mountData.chatData);
      setToggle(true);
    } else navigate('/Home'); 
  }
  
  useEffect(() => {
    socket.on('serverMsg', (data) => {
      setChatState((prevArray) => [...prevArray, data]);
    });
    socket.emit('ask-join', `${id}`);
    getFirstData()
    
    return () => {
      socket.disconnect();
    };
  }, []);
  
  useEffect(() => {
    // if (chatState.length > 0 && check.current) { // 최적화이전코드
    if (toggle) {
      window.scrollTo(0, document.body.scrollHeight);
      // check.current = false ;
    }
  }, [toggle])

  return (
    <>
      <ChatHeader writerUsername={writerUsername} />

      <S.Content>
        <S.ChatContents>
          {chatState.length
            ? chatState.map((item) =>
                item.from === loginId ? (
                  <S.MyChat>
                    <div>{item.msg}</div>
                  </S.MyChat>
                ) : (
                  <S.Someone>
                    <div>{item.msg}</div>
                  </S.Someone>
                ),
              )
            : null}
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

