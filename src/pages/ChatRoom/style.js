import styled from 'styled-components';

export const Content = styled.main`
  padding: 72px 16px 0px;
`;

export const ChatContents = styled.ul`
  max-width: 390px;
  height: 100vh;
  margin: 0 auto;
`

export const Someone = styled.li`
    /* 위치지정 */
    display: flex;
`

export const MyChat = styled.li`
    /* 위치지정 */
    display: flex;
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
