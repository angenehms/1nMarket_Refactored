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
  }, []); // 이거 풀면 무한루프 돌던데 원인 찾아보기

  useTitle('1nMarket - Chat');
  return (
    <>
      <ProfileHeader />
      <S.Content>
        <S.ChatList>
          {chatList.map((item, i) => (
            <S.ChatRoomLink
              key={i}
              to={`/chat/${item._id}?writerId=${item.member[1]}&with=${item.writerUsername}&writerImg=${item.writerProfileImg}`}
            >
              {/* /chat/${채팅다큐먼트고유id}?with=${글쓴사람username} 로 라우팅 */}
              <S.ChatItem>
                <S.IconContentWrapper>
                  <S.IconDiv>
                    {item.writerProfileImg.includes('mandarin.api') ? (
                      <S.ProfileIcon
                        src={
                          item.writerProfileImg.includes('mandarin.api')
                            ? item.writerProfileImg.replace(
                                'mandarin.api',
                                'api.mandarin',
                              )
                            : item.writerProfileImg
                        }
                        alt='프로필 이미지'
                      />
                    ) : (
                      <S.BasicProfileIcon />
                    )}

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
        </S.ChatList>
      </S.Content>
    </>
  );
};

export default Chat;
