import styled from 'styled-components';
import BasicProfile from '../../assets/icons/basic-profile.svg';
import NewChat from '../../assets/icons/NewChat.svg';
import { Link } from 'react-router-dom';

export const Content = styled.main`
  padding: 72px 16px 0px;
`;

export const ChatList = styled.ul`
  max-width: 390px;
  height: 100vh;
  margin: 0 auto;

  @media screen and (max-width: 300px) {
    height: 100svh;
  }
`;

export const ChatItem = styled.li`
  display: flex;
  justify-content: space-between;
  height: 42px;
  margin-bottom: 20px;
`;

export const ChatRoomLink = styled(Link)`
  text-decoration-line: none;
`

export const IconContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconDiv = styled.div`
  position: relative;
`;

export const ChatContentDiv = styled.div`
  margin-left: 12px;
`;

export const BasicProfileIcon = styled.img.attrs({
  src: BasicProfile,
  alt: '기본 프로필 아이콘',
})`
  width: 42px;
  height: 42px;
`;

export const ProfileIcon = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`

export const NewChatMark = styled.img.attrs({
  src: NewChat,
  alt: '새로운 메세지 표시',
})`
  width: 12px;
  height: 12px;
  position: absolute;
  left: 0px;
`;

export const ChatUserName = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.black};
  margin-bottom: 4px;
  font-family: Pretendard-M;
`;

export const ChatContent = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.mediumGray};
`;

export const ChatDate = styled.p`
  font-size: 10px;
  color: ${({ theme }) => theme.palette.border};
  margin-top: 26px;
`;
