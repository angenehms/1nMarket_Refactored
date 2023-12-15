import {
  Follows,
  Home,
  Login,
  PostUpload,
  ProductUpload,
  Public,
  Signup,
  SignupProfile,
  Profile,
  ProfileModify,
  Search,
  Chat,
  Post,
  PostModify,
  ProductModify,
  Missing,
  ChatRoom,
} from 'pages';
import { Layout, Navbar, RequireAuth } from 'components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Public />} />
          <Route path='login' element={<Login />} />

          <Route path='signup'>
            <Route index element={<Signup />} />
            <Route path='profile' element={<SignupProfile />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route element={<Navbar />}>
              <Route path='home' element={<Home />} />

              <Route path='profile/:accountname'>
                <Route index element={<Profile />} />
                <Route path='product' element={<ProductUpload />} />
                <Route path='followings' element={<Follows />} />
                <Route path='followers' element={<Follows />} />
              </Route>

              <Route path='search' element={<Search />} />

              <Route path='chat' element={<Chat />} />
            </Route>

            <Route path='post'>
              <Route path='upload' element={<PostUpload />} />
              <Route path=':postId'>
                <Route index element={<Post />} />
                <Route path='edit' element={<PostModify />} />
              </Route>
            </Route>

            <Route path='profile/:userId/edit' element={<ProfileModify />} />
            <Route path='product/:productId/edit' element={<ProductModify />} />

            <Route path='chat/:id' element={<ChatRoom />} />
          </Route>

          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
