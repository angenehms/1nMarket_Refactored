import { ChatHeader } from 'components';
import React, { useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import * as S from './style';
import { ReactComponent as ChatIcon } from './../../assets/icons/icon-message-circle.svg';
import { useEffect } from 'react';
import DownArrowIcon from '../../assets/icons/icon-arrow-down.png';
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
  const isScrollBottom = useRef(true);
  const [forScrollRefRender, setScrollRefRender] = useState(null);
  const [monitorReceiving, setMonitorReceiving] = useState(false);
  const observerTargetEl = useRef(null);
  // const check = useRef(true);

  // 쿼리 파라미터의 값을 가져옴
  const withId = searchParams.get('withId');
  const withUsername = searchParams.get('withUsername');
  const withProfileImg = searchParams.get('writerImg');

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
      to: `${withId}`,
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
  //       `http://localhost:8080/chat/${id}/${loginId}/${withId}`,
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
    const mountData = await fetch(`http://localhost:8080/chat/${id}`, {
      method: 'GET',
    }).then((r) => r.json());

    console.log(mountData);

    if (mountData.canJoin) {
      setChatState(mountData.chatData);
      setToggle(true);
    } else navigate('/Home');
  };

  const toNewChat = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    // 마운트 될 때 코드
    socket.on('serverMsg', (data) => {
      setChatState((prevArray) => [...prevArray, data]);
      setMonitorReceiving(true);
    });
    socket.emit('ask-join', `${id}`);
    getFirstData();

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // 순서상 마운트가 된 이후에 실행되어야하는 코드
    // if (chatState.length > 0 && check.current) { // 최적화이전코드

    if (toggle) {
      window.scrollTo(0, document.body.scrollHeight);
      // check.current = false ;
    }
  }, [toggle]);

  useEffect(() => {
    const lastChatingData = chatState[chatState.length - 1]; // pop() 으로 하면 버그발생 - 원본배열수정이슈로 인한 ..

    const io = new IntersectionObserver((entries) => {
      // if ( isScrollBottom.current ) {
      //   console.log("떼어짐 false")
      //   isScrollBottom.current = false
      // }

      if (entries[0].isIntersecting) {
        console.log('붙는 조건식');
        isScrollBottom.current = true;
        setScrollRefRender(isScrollBottom.current);
        setMonitorReceiving(false);
        console.log('isScrollBottom', isScrollBottom.current);
      } else {
        console.log('떼어지는 조건식');
        isScrollBottom.current = false;
        setScrollRefRender(isScrollBottom.current);
        console.log('isScrollBottom', isScrollBottom.current);
        console.log(forScrollRefRender);
      }

      // if ( isScrollBottom.current )
      // window.scrollTo(0, document.body.scrollHeight);
    });

    io.observe(observerTargetEl.current);

    // if (toggle && (lastChatingData.from === loginId)) { // 이렇게 쓰면 아예 최초로 채팅방이 만들어질 때에는 데이터가 없으므로 from 접근이 안됨
    //   // 가장 최근 채팅이 내가 보낸 채팅일 때
    //   // 토글이 참이어야하는 이유는 마운트 이후여야 chatState 에 데이터가 쌓여 있어서 배열에 접근할 수 있음
    //   window.scrollTo(0, document.body.scrollHeight);
    // }

    if (lastChatingData !== undefined) {
      if (lastChatingData.from === loginId) {
        // 최근 채팅을 내가 보낼 때
        console.log(lastChatingData);
        window.scrollTo(0, document.body.scrollHeight);
      }

      if (lastChatingData.from === withId) {
        if (isScrollBottom.current) {
          // 채팅창 스크롤이 가장 하단에 있는데 상대에게 메세지가 온경우 -> 반대로 스크롤이 위에있을 경우엔 상대메세지가 와도 스크롤 다운이 일어나지 않음
          window.scrollTo(0, document.body.scrollHeight);
        }
      }

      // console.log(withId, lastChatingData.from)
      // console.log(lastChatingData.from)
      // console.log(lastChatingData.from === withId)

      // if ( lastChatingData.from === withId ) { // 최근 채팅이 상대가 보낸 채팅일 때

      //   console.log("df", document.documentElement.scrollTop)
      //   console.log("fg", document.documentElement.scrollHeight)
      //   console.log("presentViewPosition", presentViewPosition)
      //   console.log(document.documentElement.scrollHeight - document.documentElement.scrollTop)
      //   console.log(document.documentElement.scrollHeight-window.scrollY)

      //   if ( window.scrollY + window.innerHeight >= document.body.scrollHeight - 20  ) { // 스크롤이 맨 하단부에 있다면
      //     window.scrollTo(0, document.body.scrollHeight);
      //   }
      // }
    }

    return () => {
      io.disconnect();
    };
  }, [chatState]);

  return (
    <>
      <ChatHeader withUsername={withUsername} />

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
                        withProfileImg.includes('mandarin.api')
                          ? withProfileImg.replace(
                              'mandarin.api',
                              'api.mandarin',
                            )
                          : withProfileImg
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

      {monitorReceiving &&
      !isScrollBottom.current &&
      chatState[chatState.length - 1].from === withId ? (
        <S.ToRecentChat onClick={toNewChat}>
          <S.RecentChatProfileImg
            src={
              withProfileImg.includes('mandarin.api')
                ? withProfileImg.replace('mandarin.api', 'api.mandarin')
                : withProfileImg
            }
            alt='최근 채팅 보낸이 프로필 이미지'
          />
          <S.RecentChatUsername>{withUsername}</S.RecentChatUsername>
          <S.RecentChatContents>
            {chatState[chatState.length - 1].msg}
          </S.RecentChatContents>
          <S.ToRecentChatArrow
            src={DownArrowIcon}
            alt='채팅창 스크롤 다운 아이콘'
          />
        </S.ToRecentChat>
      ) : null}

      <div ref={observerTargetEl}></div>

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
