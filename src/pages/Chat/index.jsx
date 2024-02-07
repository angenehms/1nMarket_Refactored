import React, { useEffect, useState } from 'react';
import { ProfileHeader, ProfileModal } from 'components';
import { useTitle } from 'hooks';
import * as S from './style';
import { axiosPrivate } from 'apis/axios';
import { getCookie } from '../../cookie';

const Chat = () => {
  const loginId = getCookie('id');
  const loginIdAccountname = getCookie("accountname");
  const loginIdProfileImg = getCookie("profile-img");
  
  const [loginIdUsername, setLoginIdUsername] = useState("");
  const [chatList, setChatList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const getLoginIdUsername = async () => {
      const {
        data: { profile },
      } = await axiosPrivate.get(`/profile/${loginIdAccountname}`);
      setLoginIdUsername(profile.username);
    };
    getLoginIdUsername();
  }, [])

  useEffect(() => {
    const getChatList = async () => {
      const data = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/chat?loginId=${loginId}`,
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
      <ProfileHeader setOpenModal={setOpenModal} />
      <S.Content>
        <S.ChatList>
          {chatList.map((item, i) => (
            <S.ChatRoomLink
              key={i}
              to={`/chat/${item._id}`}
            >
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
      {openModal && <ProfileModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Chat;
