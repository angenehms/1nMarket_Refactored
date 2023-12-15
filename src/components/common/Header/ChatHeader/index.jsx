import React from "react";
import * as S from "./style"
import { HeaderWrapper } from "../style";
import { useNavigate, useParams } from "react-router-dom";

const ChatHeader = () => {
  const navigate = useNavigate();
  const id = useParams();

  return (
    <HeaderWrapper>
      <S.FlexDiv>
        <S.LeftIcon onClick={() => navigate(-1)}/>
        <S.ChatUserName>{`${id.id}`}</S.ChatUserName>
        </S.FlexDiv>
        <S.RightIcon/>
    </HeaderWrapper>
  );
};

export default ChatHeader;