import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";
import { useNavigate } from "react-router-dom";

const ChatHeader = ({withUsername}) => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <S.FlexDiv>
        <S.LeftIcon onClick={() => navigate(-1)}/>
        <S.ChatUserName>{`${withUsername}`}</S.ChatUserName>
        </S.FlexDiv>
        <S.RightIcon/>
    </HeaderWrapper>
  );
};

export default ChatHeader;