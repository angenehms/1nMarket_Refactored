import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { axiosPrivate } from '../../../apis/axios';
import { getCookie, removeCookie } from '../../../cookie';

const RequireAuth = () => {
  const token = getCookie('token')
  // const token = JSON.parse(localStorage.getItem('token'));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isValid = async () => {
      try {
        const { data: isValid } = await axiosPrivate.get('/user/checktoken');
        if (!isValid) {
          removeCookie('token');
          // localStorage.removeItem('token');
          navigate('/login');
        }
      } catch (err) {
          removeCookie('token');
          // localStorage.removeItem('token');
          navigate('/login');
      }
    };
    isValid();
  }, []);

  return (
    <>
      {token ? (
        <Outlet />
      ) : (
        <Navigate to='login' state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
