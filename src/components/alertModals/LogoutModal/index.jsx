import React from 'react';
import { useNavigate } from 'react-router-dom';
import AlertModalLayout from '../AlertModalLayout';
import { removeCookie } from '../../../cookie';

const LogoutModal = ({ setOpenModal, setOpenAlert }) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    setOpenAlert(false);
    setOpenModal(false);
  };

  const handleLogout = () => {
    removeCookie('token');
    removeCookie("id");
    removeCookie('accountname');
    removeCookie('profile-img');
    // localStorage.removeItem('token');
    // localStorage.removeItem("id");
    // localStorage.removeItem('accountname');
    // localStorage.removeItem('profile-img');
    navigate('/');
  };

  return (
    <AlertModalLayout comment='로그아웃 하시겠어요?'>
      <li onClick={handleCancel}>취소</li>
      <li onClick={handleLogout}>로그아웃</li>
    </AlertModalLayout>
  );
};

export default LogoutModal;
