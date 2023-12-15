import React, { useEffect, useState } from 'react';
import { ProfileHeader } from 'components';
import { useTitle } from 'hooks';
import * as S from './style';

const Chat = () => {
  const loginId = JSON.parse(localStorage.getItem('id'));
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    const getChatList = async () => {
      const data = await fetch(
        `http://localhost:8080/chat?loginId=${loginId}`,
        {
          method: 'GET',
        },
      ).then((r) => r.json());

      setChatList(data);
    };

    getChatList();
  }, []);

  // const chatMembers = [
  //   {
  //     username: '공구하자',
  //     content: '이번에 정정 언제하맨마씸?',
  //     date: '2023.12.14',
  //   },
  //   {
  //     username: '세계최강구두쇠',
  //     content: '깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지...',
  //     date: '2023.12.02',
  //   },
  //   {
  //     username: '처음자취러',
  //     content: '내 차는 내가 평가한다. 오픈 이벤트에 참여 하...',
  //     date: '2023.11.17',
  //   },
  // ];

  useTitle('1nMarket - Chat');
  return (
    <>
      <ProfileHeader />
      <S.Content>
        <S.ChatList>
          {chatList.map((item, i) => (
            <S.ChatRoomLink key={i} to={`/chat/${item.username}`}>
              <S.ChatItem>
                <S.IconContentWrapper>
                  <S.IconDiv>
                    { item.writerProfileImg.includes('mandarin.api') ? <S.ProfileIcon src={
                        item.writerProfileImg.includes('mandarin.api')
                          ? item.writerProfileImg.replace('mandarin.api', 'api.mandarin')
                          : item.writerProfileImg
                      }
                      alt='프로필 이미지'
                    /> : <S.BasicProfileIcon />}
                    
                    <S.NewChatMark />
                  </S.IconDiv>

                  <S.ChatContentDiv>
                    <S.ChatUserName>{item.writerUsername}</S.ChatUserName>
                    <S.ChatContent>최근 메세지 내용</S.ChatContent>
                  </S.ChatContentDiv>
                </S.IconContentWrapper>

                <S.ChatDate>{item.date}</S.ChatDate>
              </S.ChatItem>
            </S.ChatRoomLink>
          ))}

          <S.ChatRoomLink to={'/chat/철수네농장'}>
            <S.ChatItem>
              <S.IconContentWrapper>
                <S.BasicProfileIcon />

                <S.ChatContentDiv>
                  <S.ChatUserName>철수네농장</S.ChatUserName>
                  <S.ChatContent>
                    한 박스에 오천원씩 해서 나누는 게 어때요?
                  </S.ChatContent>
                </S.ChatContentDiv>
              </S.IconContentWrapper>

              <S.ChatDate>2020.10.25</S.ChatDate>
            </S.ChatItem>
          </S.ChatRoomLink>
        </S.ChatList>
      </S.Content>
    </>
  );
};

export default Chat;
