import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';
import { ReactComponent as HomeIcon } from '../../../assets/icons/icon-home.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/icon-message-circle.svg';
import { ReactComponent as PostIcon } from '../../../assets/icons/icon-edit.svg';
import { ReactComponent as ProfileIcon } from '../../../assets/icons/icon-user.svg';
import { ReactComponent as HomeIconFill } from '../../../assets/icons/icon-home-fill.svg';
import { ReactComponent as ChatIconFill } from '../../../assets/icons/icon-message-circle-fill.svg';
import { ReactComponent as PostIconFill } from '../../../assets/icons/icon-edit-fill.svg';
import { ReactComponent as ProfileIconFill } from '../../../assets/icons/icon-user-fill.svg';
import { useLocation } from 'react-router-dom';
import { getCookie } from '../../../cookie';

const Navbar = () => {
  const accountName = getCookie('accountname');
  // const accountName = JSON.parse(localStorage.getItem('accountname'));
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Outlet />
      <S.NavWrapper>
        <S.NavList>
          <li>
            <S.StyledLink to='/home'>
              {pathname === '/home' ? <HomeIconFill /> : <HomeIcon />}
              <S.NavIconText
                className={pathname === '/home' ? 'active' : 'inactive'}
              >
                홈
              </S.NavIconText>
            </S.StyledLink>
          </li>

          <li>
            <S.StyledLink to='/chat'>
              {pathname === '/chat' ? <ChatIconFill /> : <ChatIcon />}
              <S.NavIconText
                className={pathname === '/chat' ? 'active' : 'inactive'}
              >
                채팅
              </S.NavIconText>
            </S.StyledLink>
          </li>

          <li>
            <S.StyledLink to='/post/upload'>
              {pathname === '/post/upload' ? <PostIconFill /> : <PostIcon />}
              <S.NavIconText
                className={pathname === '/post/upload' ? 'active' : 'inactive'}
              >
                글 작성
              </S.NavIconText>
            </S.StyledLink>
          </li>

          <li>
            <S.StyledLink to={`/profile/${accountName}`}>
              {pathname === `/profile/${accountName}` ? (
                <ProfileIconFill />
              ) : (
                <ProfileIcon />
              )}
              <S.NavIconText
                className={
                  pathname === `/profile/${accountName}` ? 'active' : 'inactive'
                }
              >
                프로필
              </S.NavIconText>
            </S.StyledLink>
          </li>
        </S.NavList>
      </S.NavWrapper>
    </>
  );
};

export default Navbar;
