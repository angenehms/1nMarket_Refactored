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
  max-width: 200px;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: yellow;
`;

export const SomeoneTextBox = styled.div`
  max-width: 200px;
  padding: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: skyblue;
`;

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
