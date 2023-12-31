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
  const writerProfileImg = searchParams.get('writerImg');

  const loginIdProfileImg = JSON.parse(localStorage.getItem('profile-img'));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') return;
    // 띄어쓰기 공백으로만 이루어진 경우 서버로 제출 안되게 설정

    // 서버로 메시지 전송
    socket.emit('clientMsg', {
      msg: `${inputValue}`,
      roomId: `${id}`,
      from: `${loginId}`,
      to: `${writerId}`,
      whenSend: `${new Date()}`,
    });

    // window.scrollTo(0, document.body.scrollHeight);
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
  };

  useEffect(() => {
    socket.on('serverMsg', (data) => {
      setChatState((prevArray) => [...prevArray, data]);
    });
    socket.emit('ask-join', `${id}`);
    getFirstData();

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
  }, [toggle]);

  useEffect(() => {
    const lastChatingData = chatState[chatState.length - 1]; // pop() 으로 하면 버그발생 - 원본배열수정이슈로 인한 ..

    // if (toggle && (lastChatingData.from === loginId)) { // 이렇게 쓰면 아예 최초로 채팅방이 만들어질 때에는 데이터가 없으므로 from 접근이 안됨
    //   // 가장 최근 채팅이 내가 보낸 채팅일 때
    //   // 토글이 참이어야하는 이유는 마운트 이후여야 chatState 에 데이터가 쌓여 있어서 배열에 접근할 수 있음
    //   window.scrollTo(0, document.body.scrollHeight);
    // }

    if (lastChatingData !== undefined) {
      if (lastChatingData.from === loginId) {
        window.scrollTo(0, document.body.scrollHeight);
      }
    }

  }, [chatState]);

  return (
    <>
      <ChatHeader writerUsername={writerUsername} />

      <S.Content>
        <S.ChatContents>
          {chatState.length
            ? chatState.map((item, i) =>
                item.from === loginId ? (
                  <S.MyChat key={i}>
                    <S.ProfileImg
                      src={
                        loginIdProfileImg.includes('mandarin.api')
                          ? loginIdProfileImg.replace(
                              'mandarin.api',
                              'api.mandarin',
                            )
                          : loginIdProfileImg
                      }
                      alt='프로필 이미지'
                    />
                    <S.MyTextBox>{item.msg}</S.MyTextBox>
                  </S.MyChat>
                ) : (
                  <S.SomeoneChat key={i}>
                    <S.ProfileImg
                      src={
                        writerProfileImg.includes('mandarin.api')
                          ? writerProfileImg.replace(
                              'mandarin.api',
                              'api.mandarin',
                            )
                          : writerProfileImg
                      }
                      alt='프로필 이미지'
                    />
                    <S.SomeoneTextBox>{item.msg}</S.SomeoneTextBox>
                  </S.SomeoneChat>
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
