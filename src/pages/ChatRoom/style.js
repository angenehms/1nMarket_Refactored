import styled from 'styled-components';

export const Content = styled.main`
  padding: 56px 16px 72px;
`;

export const ChatContents = styled.ul`
  max-width: 390px;
  margin: 0 auto;
`;

export const MyChat = styled.li`
  /* 위치지정 */
  display: flex;
  justify-content: end;
  flex-direction: row-reverse;
`;

export const SomeoneChat = styled.li`
  /* 위치지정 */
  display: flex;
`;

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const MyTextBox = styled.div`
  word-break: break-all;

  max-width: 200px;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: yellow;
`;

export const SomeoneTextBox = styled.div`
  word-break: break-all;
  max-width: 200px;
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: skyblue;
`;

export const ToRecentChat = styled.button`
  position: fixed;
  z-index: 999;
  bottom: 70px;
  left: 50%;
  width: 350px;
  height: 36px;
  margin-left: -175px; /* 너비의 절반만큼 왼쪽으로 이동 */
  margin-top: -18px; /* 높이의 절반만큼 위로 이동 */
  border-radius: 15px;
  border: none; /* 테두리 없애기 */
  background-color: rgba(76, 153, 0, 0.9);
  display: flex;
  gap: 5px;
  align-items: center; /* 자식 요소들을 세로로 중앙 정렬 */
  padding-left: 10px;
`;

export const RecentChatProfileImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const RecentChatUsername = styled.div`
  color: rgb(51, 102, 0);
`

export const RecentChatContents = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  color: rgb(220, 255, 204);
  width: 100%;
  text-align: left;
  white-space: nowrap;       /* 줄 바꿈 방지 */
  overflow: hidden;          /* 넘치는 내용 숨김 */
  text-overflow: ellipsis;   /* 생략 부호 (...) 표시 */
  max-width: 100%;           /* 최대 너비 설정 */
`;

export const ToRecentChatArrow = styled.img`
  width: 15px;
  height: 17px;
  margin-left: auto;
  margin-right: 15px;
`;

export const ScrollDownBtn = styled.button`
  position: fixed;
  display: block;
  z-index: 999;
  bottom: 80px;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-left: 145px; /* 너비의 절반만큼 왼쪽으로 이동 */
  margin-top: -25px; /* 높이의 절반만큼 위로 이동 */
  border-radius: 50%;
  border: none;
  background-color: pink;
  opacity: 0.9;
`

export const ScrollDownImg = styled.img`
  width: 50%;
  height: 50%;
  display: block;
  margin: 0 auto;
  margin-top: 7px;
`

export const FormWrapper = styled.form`
  min-width: 390px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  padding: 10px 35px;
  border-top: 1px solid ${({ theme }) => theme.palette.border};
  background-color: ${({ theme }) => theme.palette.white};
  z-index: 110;
  padding-top: 10px;
  display: flex;
`;

export const ChatInput = styled.input`
  width: 90%;
  height: 80%;
  border-radius: 10px;
  padding: 0 10px 0 10px;
  margin-top: 5px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
  &:focus {
    outline: none; /* 호버 상태에서도 기본 색상을 유지하도록 설정 */
  }
`;

export const SendBtn = styled.button`
  display: inline-block;
  border: none;
  background-color: transparent;
`;
