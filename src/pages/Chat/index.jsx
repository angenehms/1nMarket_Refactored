import React, { useEffect, useState } from 'react';
import { ProfileHeader } from 'components';
import { useTitle } from 'hooks';
import * as S from './style';
import { axiosPrivate } from 'apis/axios';

const Chat = () => {
  const loginId = JSON.parse(localStorage.getItem('id'));
  const loginIdAccountname = JSON.parse(localStorage.getItem("accountname"));
  const [loginIdUsername, setLoginIdUsername] = useState("");
  const loginIdProfileImg = JSON.parse(localStorage.getItem("profile-img"));
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    const getLoginIdUsername = async () => {
      const {
        data: { profile },
      } = await axiosPrivate.get(`/profile/${loginIdAccountname}`);
      setLoginIdUsername(profile.username);
    };
    getLoginIdUsername();
  }, [])

  // const getUserInfo = async () => {
  //   const {
  //     data: { profile },
  //   } = await axiosPrivate.get(`/profile/${loginIdAccountname}`);
  //   console.log(profile.username)
  // };

  // getUserInfo();

  useEffect(() => {
    const getChatList = async () => {
      const data = await fetch(
        `http://localhost:8080/chat?loginId=${loginId}`,
        {
          method: 'GET',
        },
      ).then((r) => r.json());

      // console.log("data", data)

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
              to={`/chat/${item._id}?withId=${item.member.filter(i => i !== loginId)}&withUsername=${item.memberUsernames.filter(i => i !== loginIdUsername)}&writerImg=${item.memberProfileImages.filter(i => i !== loginIdProfileImg)}`}
            >
              {/* /chat/${채팅다큐먼트고유id}?with=${글쓴사람username} 로 라우팅 */}
              <S.ChatItem>
                <S.IconContentWrapper>
                  <S.IconDiv>
                    {item.memberProfileImages.filter(i => i !== loginIdProfileImg)[0].includes('mandarin') ? (
                      <S.ProfileIcon
                        src={
                          item.memberProfileImages.filter(i => i !== loginIdProfileImg)[0].includes('mandarin.api')
                            ? item.memberProfileImages.filter(i => i !== loginIdProfileImg)[0].replace(
                                'mandarin.api',
                                'api.mandarin',
                              )
                            : item.memberProfileImages.filter(i => i !== loginIdProfileImg)[0]
                        }
                        alt='프로필 이미지'
                      />
                    ) : (
                      <S.BasicProfileIcon />
                    )}

                    <S.NewChatMark />
                  </S.IconDiv>

                  <S.ChatContentDiv>
                    <S.ChatUserName>{item.memberUsernames.filter(i => i !== loginIdUsername)}</S.ChatUserName>
                    <S.ChatContent>{item.chatData[item.chatData.length - 1]?.msg}</S.ChatContent>
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
