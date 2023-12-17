import React from 'react';
import { useNavigate } from 'react-router-dom';
import AlertModalLayout from '../AlertModalLayout';

const LogoutModal = ({ setOpenModal, setOpenAlert }) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    setOpenAlert(false);
    setOpenModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem('token');
    localStorage.removeItem('accountname');
    localStorage.removeItem('profile-img');
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
