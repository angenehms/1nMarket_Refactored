import React from 'react';
import * as S from './style';

const SearchList = ({ searchList }) => {
  const onErrorImg = (e) => {
    e.target.src = 'https://api.mandarin.weniv.co.kr/1671431659709.png';
  };

  return (
    <S.SearchList>
      {searchList.map((item) => (
        <S.StyledLink to={`/profile/${item.accountname}`} key={item._id}>
          <S.SearchItem>
            <S.UserImage
              alt='프로필'
              src={
                item.image.includes('mandarin.api')
                  ? item.image.replace('mandarin.api', 'api.mandarin')
                  : item.image
              }
              onError={onErrorImg}
            />
            <S.UserInfo>
              <S.UserName>{item.username}</S.UserName>
              <S.AccountName>{item.accountname}</S.AccountName>
            </S.UserInfo>
          </S.SearchItem>
        </S.StyledLink>
      ))}
    </S.SearchList>
  );
};

export default SearchList;
