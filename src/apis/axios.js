import axios from 'axios';
import { getCookie } from '../cookie';

const BASE_URL = 'https://api.mandarin.weniv.co.kr';
// const CHAT_URL = process.env.REACT_APP_SERVER_URL;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const axiosImgUpload = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = getCookie('token');
    // const token = JSON.parse(localStorage.getItem('token'));

    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// export const axiosChat = axios.create({ // 채팅서버 관련 통신용 axios
//   baseURL: CHAT_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// axiosChat.interceptors.request.use(
//   (config) => {
//     const token = getCookie('token');
//     // const token = JSON.parse(localStorage.getItem('token'));

//     if (!config.headers['Authorization']) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error),
// )
