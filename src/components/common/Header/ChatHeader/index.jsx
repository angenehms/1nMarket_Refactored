import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";
import { useNavigate } from "react-router-dom";

const ChatHeader = ({writerUsername}) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <S.FlexDiv>
        <S.LeftIcon onClick={() => navigate(-1)}/>
        <S.ChatUserName>{`${writerUsername}`}</S.ChatUserName>
        </S.FlexDiv>
        <S.RightIcon/>
    </HeaderWrapper>
  );
};

export default ChatHeader;