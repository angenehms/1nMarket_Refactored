# 자취러들의 현명한 소비생활, 1n마켓 🛒

📌 **배포 URL** : https://sg-1nmarket.netlify.app/

📌 **계정** `ID` 1nmarket@sharebuy.com <br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `PW` 1nmarket

<br />
   
![1nmarket_readme7](https://user-images.githubusercontent.com/104605709/210308994-3e9752d8-c24b-4659-97ed-9b2aa787c74a.jpg)

<br />

## 1. 프로젝트 소개

> 🛒 **1n마켓**은 개인으로 사기에 부담스러운 용량의 물건들을 같이 구매함으로써 불필요한 구매를 줄이고 합리적인 소비를 할 수 있도록 도와주는 공동구매 커뮤니티 마켓입니다. <br /> <br />
> 💡 1인 가구가 증가하고 있는 사회적 흐름에 따라 사고싶지만 개인에게는 과잉 구매가 될 수 있는 물건들을 같이 구매할 수 있으면 좋겠다는 생각에서 시작됐습니다. <br /> <br />
> 👥 직접 공동구매를 모집하여 생필품, 식료품 등에서 나가는 불필요한 지출을 줄일 수 있습니다. <br /> <br />
> 👋 본인의 자취생활 꿀팁 및 어려운 부분들은 게시글을 작성하여 공유할 수 있습니다. <br /> <br />
> 💬 다른 자취러들의 꿀팁이 궁금하다면 친해지고 싶은 사용자를 팔로우하여 1인 가구 라이프스타일을 함께 공유해 보세요!

<br />

## 2. 팀원 및 역할분담

|                                                       **팀리더 & 프론트**                                                        |                                                       **디자인 & 프론트**                                                       |                                                            **프론트**                                                            |                                                            **프론트**                                                            |
| :------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
|                                                 [재원](https://github.com/oneny)                                                 |                                               [승미](https://github.com/wSeungMi)                                               |                                               [석규](https://github.com/angenehms)                                               |                                                [민희](https://github.com/dev-chu)                                                |
| <img src="https://user-images.githubusercontent.com/111214565/210369871-c8a8f623-1c60-4e7a-9f2a-90ae1950b1b1.png" width="100" /> | <img src="https://user-images.githubusercontent.com/111214565/210369976-be99d796-b34f-4f60-a52f-3a89c903d1d3.png" width='100'/> | <img src="https://user-images.githubusercontent.com/111214565/210370080-43eac5e3-6d0c-4b82-b7ba-f535ac491c3f.png"  width='100'/> | <img src='https://user-images.githubusercontent.com/111214565/210370229-ce7063c0-2d93-4fd0-9d06-c4ae3aa4113c.png' width='100' /> |

<br>

<img src="https://user-images.githubusercontent.com/111214565/210323336-dc6e0741-5fe1-4035-992f-7f7398377892.png" width="1000">

<br />

## 3. 개발환경

### [기술]

- Frontend: React, React-router, Styled-components, Axios, Eslint, Prettier
- Backend: 제공된 API 사용

### [협업 도구]

- `Git`
- `Github` [Wiki(컨벤션)](https://github.com/1nMarket/frontend/wiki) / [Project](https://github.com/orgs/1nMarket/projects/1)
- `Notion` 주요 회의록 및 일정관리
- `Discord` 웹훅(실시간 커밋&PR관리)사용 및 회의/실시간 소통

<details>
  <summary><strong>폴더트리 보기</strong></summary>

```shell
  src
   ┣ apis
   ┃ ┗ axios.js
   ┣ assets
   ┃ ┗ icons
   ┣ components
   ┃ ┣ alertModals
   ┃ ┃ ┣ AlertModalLayout
   ┃ ┃ ┣ LogoutModal
   ┃ ┃ ┣ PostRemoveModal
   ┃ ┃ ┣ ProductAlertModal
   ┃ ┃ ┗ ReportModal
   ┃ ┣ comment
   ┃ ┃ ┣ CommentBox
   ┃ ┃ ┗ CommentInput
   ┃ ┣ common
   ┃ ┃ ┣ Header
   ┃ ┃ ┃ ┣ ChatHeader
   ┃ ┃ ┃ ┣ FollowHeader
   ┃ ┃ ┃ ┣ HomeHeader
   ┃ ┃ ┃ ┣ ProfileHeader
   ┃ ┃ ┃ ┣ SaveHeader
   ┃ ┃ ┃ ┣ SearchHeader
   ┃ ┃ ┃ ┣ UploadHeader
   ┃ ┃ ┣ Layout
   ┃ ┃ ┣ Navbar
   ┃ ┃ ┗ RequireAuth
   ┃ ┣ modals
   ┃ ┃ ┣ ModalLayout
   ┃ ┃ ┣ MyPostModal
   ┃ ┃ ┣ PostModal
   ┃ ┃ ┣ ProductModal
   ┃ ┃ ┗ ProfileModal
   ┃ ┣ post
   ┃ ┃ ┣ ImageSlide
   ┃ ┃ ┣ PostAlbum
   ┃ ┃ ┣ PostForm
   ┃ ┃ ┣ PostItem
   ┃ ┃ ┣ PostsList
   ┃ ┃ ┗ ProductForm
   ┃ ┣ profile
   ┃ ┃ ┣ FollowUser
   ┃ ┃ ┣ MyPosts
   ┃ ┃ ┣ ProductList
   ┃ ┃ ┗ ProfileInfo
   ┃ ┣ search
   ┃ ┃ ┗ SearchList
   ┃ ┣ splash
   ┃ ┃ ┗ SplashImg
   ┃ ┣ user
   ┃ ┃ ┗ UserProfileForm
   ┃ ┗ index.js
   ┣ hooks
   ┃ ┣ index.js
   ┃ ┣ useDebounce.js
   ┃ ┗ useTitle.js
   ┣ pages
   ┃ ┣ Chat
   ┃ ┣ Follows
   ┃ ┣ Home
   ┃ ┣ Login
   ┃ ┣ Missing
   ┃ ┣ Post
   ┃ ┣ PostModify
   ┃ ┣ PostUpload
   ┃ ┣ ProductModify
   ┃ ┣ ProductUpload
   ┃ ┣ Profile
   ┃ ┣ ProfileModify
   ┃ ┣ Public
   ┃ ┣ Search
   ┃ ┣ Signup
   ┃ ┣ SignupProfile
   ┃ ┗ index.js
   ┣ routes
   ┃ ┗ Router.jsx
   ┣ styles
   ┃ ┣ GlobalStyled.jsx
   ┃ ┗ theme.js
   ┣ utils
   ┃ ┗ setTime.js
   ┣ App.js
   ┗ index.js
```

</details>

<br />

## 4. 주요기능

<details>
  <summary>4-1. useTitle로 효율적인 Doc Title 설정하기</summary>

### 페이지 타이틀

웹사이트에 접속하면 브라우저의 상단 탭에서 페이지 제목을 볼 수 있습니다. 이 페이지 제목을 Document Title이라고 합니다.  
Document Title은 가장 대표적인 웹사이트의 타이틀로, 각 페이지의 주제를 잘 나타낼 수 있는 요소이자 해당 웹사이트를 사용하는 유저에게 현재 자신이 있는 위치를 알려주는 중요한 요소입니다.

<div style="display: flex; justify-content: center">
  <img width="518" alt="스크린샷 2023-01-02 오후 9 03 49" src="https://user-images.githubusercontent.com/97153666/210228808-2bc81167-ca94-4c1d-b022-c3891ad8892b.png">
</div>

하지만 React는 SPA이고 하나의 `index.html`을 가지기 때문에 각 페이지마다의 타이틀을 `<title></title>` 요소로 변경할 수가 없습니다. 따라서 다음과 같이 `useTitle` 커스텀 훅을 만들었습니다.

### useTitle

```js
import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => (document.title = prevTitle);
  }, [title]);
};

export default useTitle;
```

`useTitle`은 `unmount`시까지 이전 페이지 타이틀이다가 새 페이지 `mount`하는 경우에 그 페이지의 타이틀로 바꿀 수 있도록 만들었습니다.

#### useTitle 적용

```jsx
const Login = () => {
  useTitle('1nMarket - Login');

  // ...
};
```

<img width="1191" alt="스크린샷 2023-01-02 오후 9 16 07" src="https://user-images.githubusercontent.com/97153666/210230071-ddc55885-8048-4f51-8e82-476169b12562.png">

다음처럼 useTitle에 인자로 `1nMarket - Login`을 넘겨주게 되면 해당 페이지의 타이틀로 변경하게 됩니다.

</details>

<details>
  <summary>4-2. Intersection Observer 통해서 피드 무한스크롤 구현</summary>

### Intersection Observer

기본적으로 브라우저 뷰포트(Viewport)와 설정한 요소(Element)의 교차점을 관찰하며, 요소가 뷰포트에 포함되는지 포함되지 않는지, 더 쉽게는 사용자 화면에 지금 보이는 요소인지 아닌지를 구별하는 기능을 제공합니다. 저희는 사용자 화면에 보이는 요소인지 구별하는 기능 즉, 관찰 대상의 교차 상태(Boolean) 확인할 수 있는 `isIntersecting`을 이용해 무한 스크롤을 구현하기로 했습니다.

### Intersection Observer 적용

```js
const Home = () => {
  const [postsList, setPostList] = useState([]);
  const [hasNextFeed, setHasNextFeed] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const page = useRef(0);
  const observerTargetEl = useRef(null);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextFeed) return;

    const getFeed = async () => {
      const {
        data: { posts },
      } = await axiosPrivate.get(`/post/feed/?limit=10&skip=${page.current}`);
      setPostList((prev) => [...prev, ...posts]);
      setHasNextFeed(posts.length % 10 === 0);
      setIsLoading(false);
      page.current += 10;
    };

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getFeed();
      }
    });
    io.observe(observerTargetEl.current);

    return () => {
      io.disconnect();
    };
  }, [hasNextFeed]);

  return (
    <>
      <HomeHeader />
      <S.Container>
        <PostsList postsList={postsList} />

        <div ref={observerTargetEl} />
      </S.Container>
    </>
  );
};
```

- `<div ref={observerTargetEl}>`으로 관찰하려고 하는 엘리먼트를 생성하고, useRef를 이용하여 지정해줬습니다.
- `/post/feed/?limit=10&skip=${page.current}`
  - limit으로 한 번에 10개의 포스트들을 받아오도록 하고, skip을 통해 변수를 넘겨서 0 ~ 9, 10 ~ 19, 20 ~ 29번의 포스트들을 가져올 수 있도록 설정했습니다.
- `hasNextPage` 상태를 통해 다음 페이지가 존재하는지 체크하고, 만약 10의 배수로 떨어지지 않는다면 다음 포스트가 없으므로 `false`로 되도록 설정했습니다.
  - 만약 100개의 포스트라는 10으로 나누어 떨어지기 때문에 한 번 더 요청한다는 단점이 있습니다.
- `io.observer(observerTargetEl.current)`를 통해 해당 엘리먼트를 관찰합니다.
- `if (entries[0].isIntersecting) { getFeed() }`
  ![intersection-observer-is-intersecting](https://user-images.githubusercontent.com/97153666/210304150-610bb400-a885-4638-82b2-d8cc387bf938.jpg)
  - 출처: [Intersection Observer - 요소의 가시성 관찰](https://heropy.blog/2019/10/27/intersection-observer/)
  - 관찰 대상이 루트 요소와 교차 상태로 들어가거나(`true`) 교차 상태에서 나가는지 (`false`) 여부를 나타내는 값(`Boolean`)을 이용하여 `useRef`로 지정한 요소가 교차 상태가 되면 `getFeed`가 실행되도록 설정했습니다.

### 무한 스크롤 구현 시 문제점

10개의 포스트 렌더링 후 다음 10개의 포스트를 받아오면 20개의 포스트 렌더링 그 다음 10개의 포스트를 받아오면 30개의 포스트를 렌더링하는 문제가 발생합니다. 이를 해결하기 위해서 React에서 제공하는 `memo`를 사용하였는데 아래 트러블 슈팅에서 자세히 다루겠습니다.

</details>

<br />

## 5. 트러블 슈팅

<details>
  <summary>5-1. memo 사용해서 피드 무한스크롤 시 이전 게시글 최적화 작업</summary>

### ❓ 문제원인

### 게시글 무한 스크롤 문제점

<img width="1080" alt="스크린샷 2023-01-03 오후 2 41 52" src="https://user-images.githubusercontent.com/97153666/210306801-7d3227d3-a181-4627-ba46-008f6955f1a2.png">

위에서 `Intersection Oberserver`로 무한 스크롤 구현 시 10개의 포스트 렌더링 후 다음 10개의 포스트를 받아오면 20개의 포스트 렌더링 그 다음 10개의 포스트를 받아오면 30개의 포스트를 렌더링하는 문제가 발생한다고 했습니다. 이와 같은 문제를 `React Profiler`를 돌려보면 다음처럼 다음 10개의 포스트를 받아와도 제일 상단에 있는 게시글이 다시 렌더링되는 것을 확인할 수 있습니다.

### 🛠 해결방법 : memo

#### memo란?

React는 먼저 컴포넌트를 렌더링(rendering)한 뒤, 이전 렌더된 결과와 비교하여 DOM 업데이트를 결정합니다. 그래서 렌더 결과가 이전과 다르다면, React는 DOM을 업데이트합니다.  
컴포넌트가 `React.memo()`로 래핑될 때, React는 컴포넌트를 렌더링하고 결과를 메모이징(`Memoizing`)합니다. 그리고 자주 다음 렌더링이 일어날 때 `props`가 같다면 React는 메모이징된 내용을 재사용합니다. 이를 활용하여 다음 10개의 게시글을 받아올 때 이전 게시글들을 메모이징하여 다시 렌더링하지 않도록 만들 수 있습니다.

#### memo 적용

```jsx
import { memo } from 'react';
const PostItem = ({ post }) => {
  // ...
};
export default memo(PostItem);
```

<img width="1243" alt="스크린샷 2023-01-03 오후 2 42 39" src="https://user-images.githubusercontent.com/97153666/210306691-134da416-d1d1-446b-91cc-ec4890d77f53.png">

만약 `post`와 같은 `props`가 변경되지 않는다면 다음 렌더링 때 메모이징된 내용을 그대로 사용하고 다시 렌더링하지 않게 된 것을 React Profiler를 통해서 확인할 수 있습니다. 이제는 아무리 많은 게시글을 불러오더라도 마지막 10개의 게시글만 렌더링하게 되도록 만들었습니다.

</details>

<details>
  <summary>5-2. useDebounce 사용해서 검색 최적화하기</summary>
   
### ❓ 문제원인
### 기존 Search 컴포넌트

```jsx
const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (!keyword.length) return;

    const searchUsers = async () => {
      const { data } = await axiosPrivate.get(
        `/user/searchuser/?keyword=${keyword}`,
      );
      setSearchList(data);
    };
    searchUsers();
  }, [keyword]);
};
```

<img width="1656" alt="스크린샷 2023-01-02 오후 2 15 55" src="https://user-images.githubusercontent.com/97153666/210197695-9f83b85e-c657-44ae-abbe-d9ced33d1aec.png">

기존의 Search 페이지에서 검색칸에 값을 입력할 때마다 api를 호출하기 때문에 필요없는 요청을 너무 많이 하게 되어 이를 줄일 필요가 있다고 느끼게 되었습니다. 그래서 바로바로 호출하기 보다는 값을 입력한 후 시간이 어느 정도 흐른 후에 api를 호출하는 방식으로 만들기 위해서 useDebounce 커스텀 훅을 생성했습니다.
이 때, `debounce`는 쉽게 말해 특정 시간이 지난 후에 한 번만 이벤트가 실행되도록 하는 것입니다.

### 🛠 해결방법 : useDebounce

```js
// hooks/useDebounce.js
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounceValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
```

입력된 값(`value`)를 state로 재정의(`debouncedValue`)한 후, `useEffect`에서 `setTimeout`을 이용하여 특정 시간이 지난 후에 전달받은 `debouncedValue`의 값을 변경하도록 작성했습니다.  
`delay`는 기본 500밀리초를 기본으로 `setDebounceValue`가 실행되기까지의 지연 시간입니다.

#### useDbounce 훅 적용

```jsx
const Search = () => {
  const [keyword, setKeyword] = useState('');
  const debouncedValue = useDebounce(keyword);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (!debouncedValue.length) return;

    const searchUsers = async () => {
      const { data } = await axiosPrivate.get(
        `/user/searchuser/?keyword=${debouncedValue}`,
      );
      setSearchList(data);
    };
    searchUsers();
  }, [debouncedValue]);
};
```

<img width="1583" alt="스크린샷 2023-01-02 오후 2 29 22" src="https://user-images.githubusercontent.com/97153666/210197700-4d5b8275-cfce-4344-b103-4b3446b89692.png">

기존의 `keyword`가 아닌 이제는 사용자가 입력하고 끝으로 500밀리초가 지나서 상태값이 바뀌는 `debouncedValue`를 통해 불필요한 리렌더링을 막을 수 있게 되었습니다.

</details>

<details>
  <summary>5-3. 사용자 토큰 검증</summary>

### ❓ 문제원인

### 기존 RequireAuth 컴포넌트

```jsx
const RequireAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const location = useLocation();

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
```

저희는 사용자가 로그인하면 `accessToken`을 localStorage에 저장하는 방식을 사용했습니다. 그리고 위 `RequireAuth` 컴포넌트을 통해 localStorage에 `token`이 있는 경우에 `<Outlet>`을 통해 자식 요소들을 보여주고, 없는 경우에는 `/login` 경로로 이동하도록 작성했습니다. 하지만 이 때 문제가 있는 것을 확인했습니다.

<img width="1194" alt="스크린샷 2023-01-02 오후 4 25 09" src="https://user-images.githubusercontent.com/97153666/210203674-d1ad5521-adad-483c-907a-39082a6d5a5e.png">

위 사진처럼 인위적으로 localStorage에 `token`과 그 값으로 아무렇게나 정하고 저장하면 로그인 후에만 들어갈 수 있는 페이지도 들어갈 수 있게 됩니다. 따라서 토큰의 유무 확인만으로는 부족하고, `token`을 검증하는 과정이 필요하다고 느끼게 되었습니다.

### 🛠 해결방법 : `/user/checktoken` api를 통해 알맞은 토큰인지 검증

```jsx
const RequireAuth = () => {
  const token = JSON.parse(localStorage.getItem('token'));
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isValid = async () => {
      try {
        const { data: isValid } = await axiosPrivate.get('/user/checktoken');
        if (!isValid) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      } catch (err) {
        localStorage.removeItem('token');
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
```

위 `useEffect` 안에서 localStorage에 저장된 `token`이 알맞는 것인지 `GET /user/checktoken`을 통해서 확인한 후 만약 `401(unauthorized)`나 `isValid: false`를 받게 되면 다음처럼 localStorage에 저장된 token을 지우고 `/login` 페이지로 이동할 수 있도록 작성했습니다.  
만약 `isValid: true`를 응답받게 되면 기존의 로직대로 `<Outlet />`을 통해 자식 요소들을 계속해서 보여주도록 했습니다.

</details>

<details>

<summary>5-4. 복잡한 경로 jsconfig.json으로 깔끔하게 정리하기</summary>

### ❓ 문제원인

### 절대 경로 적용 전 router.jsx 파일

```jsx
// src/routes/Route.jsx
import Layout from '../components/common/Layout';
import Navbar from '../components/common/Navbar';
import RequireAuth from '../components/common/RequireAuth';
import Follows from '../pages/Follows';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PostUpload from '../pages/PostUpload';
import ProdcutUpload from '../pages/ProductUpload';
import Profile from '../pages/Profile';
// ...
```

상대 경로로 멀리 떨어진 컴포넌트 참조 시 경로가 지저분해질 수 있고, 현재 컴포넌트 위치를 옮기면 vscode에서 import Path를 제대로 못 잡아주는 경우가 간혹 있습니다. 따라서 절대 경로를 설정해줘 이를 해결하고자 했습니다.

### 🛠 해결방법

### 방법1. 절대 경로 설정

루트폴더에 `jsconfig.json`을 생성하여 다음과 같이 `"baseUrl": "src"`를 작성하면 루트폴더가 src 폴더로 설정되고, 절대경로 작성시 src폴더에서부터 경로를 찾게 됩니다.

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

### 방법2. `export ... from ...`로 모듈 다시 내보내기

```js
// pages/index.js
export { default as Home } from './Home';
export { default as Chat } from './Chat';
export { default as Follows } from './Follows';
export { default as Login } from './Login';
// ...
```

`components`와 `pages` 폴더에 index.js 파일을 생성해 다음과 같이 모듈을 다시 내보내줘 경로를 참조하는 경우 `component`와 `pages`만 작성해도 참조할 수 있도록 만들어줬습니다.

- `export default`로 내보내는 경우에는 저희처럼 `export { default as Home } from './Home'`으로 작성해줘야 합니다.
- 만약 그냥 `export`로 내보내는 경우는 `export * from './Home'`으로도 가능합니다.

### 경로 참조

```jsx
// routes/Route.jsx
import {
  Follows,
  Home,
  // ...
} from 'pages';
import { Layout, Navbar, RequireAuth } from 'components';
```

```jsx
// pages/Search
import { useState, useEffect } from 'react';
import { SearchHeader, SearchList } from 'components';
import { useDebounce, useTitle } from 'hooks';
import { axiosPrivate } from 'apis/axios';
import * as S from './style';

// ...
```

위의 과정을 통해 경로를 깔끔하게 관리하는 것만으로 import하기 위한 코드를 한 줄로 줄일 수 있고, 파일 위치 파악을 간단히 할 수 있도록 만들 수 있습니다. 그리고, 현재 컴포넌트 위치를 옮겨도 절대 경로와 `index.js`로 참조하므로 IDE에 종속적이지 않습니다.

</details>

<details>
  <summary>5-5. Link를 통해 State 전달하기</summary>

### 상품 상세 페이지 데이터 호출

상품 수정 페이지가 마운트 될 때 수정하려는 상품의 데이터가 초깃값으로 렌더링되게 만드려고 했습니다. 이 때, 보통의 경우 상품 상세 조회를 통해 데이터를 불러오는 경우가 대부분입니다.

```js
useEffect(() => {
  const getProduct = async () => {
    const {
      data: { product },
    } = await axiosPrivate.get(`/product/detail/${productId}`);
    setImgFiles(product.itemImage);
    setProductName(product.itemName);
    setProductLink(product.link);
    setProductPrice(product.price);
  };
  getProduct();
}, []);
```

### ❓ 문제원인

하지만 이런 방식으로 데이터를 호출할 경우 서버와 통신하는 시간이 필요하게 되어 곧바로 데이터가 보이지 않습니다. 즉, 바로 아래와 같이 통신이 완료되기까지 초기값을 보여주다 응답을 받은 후에 조회한 데이터 값을 렌더링합니다.

<img src="https://user-images.githubusercontent.com/97153666/210312394-d507748f-3e31-4975-a74d-a31a0c6c02af.gif" width="200">

### 🛠 해결방법 : ProductModal 컴포넌트에서 Link를 통해 state 전달하기

```jsx
// components/modals/ProductModal
const ProductModal = ({ product }) => {
  <ModalContainer>
    <li>
      <Link to={`/product/${productId}/edit`} state={{ ...product }}>
        수정
      </Link>
    </li>
    // ...
  </ModalContainer>;
};
```

저희는 이러한 **렌더링 지연문제를 해결하기 위해** `react-router-dom`의 `Link`를 통해 state 값을 전달하여 초기값으로 사용했습니다.

#### 전달받은 state로 ProductModify 컴포넌트에서 초깃값 설정

```js
// pages/ProductModify.jsx
const { state } = useLocation();

const [imgFiles, setImgFiles] = useState(state?.itemImage || '');
const [productName, setProductName] = useState(state?.itemName || '');
const [productLink, setProductLink] = useState(state?.link || '');
const [productPrice, setProductPrice] = useState(state?.price || '');
```

<img src="https://user-images.githubusercontent.com/111214565/210313778-2d9e923b-c53e-4213-ae68-4b6a883637f8.gif" width="200">

그러면 페이지 렌더링될 때 이전 페이지(`Profile 페이지`)의 데이터를 활용하기 때문에 불필요한 통신과정을 건너뛰고, 사용자가 깜빡거리는 현상을 보지 않아도 되게 만들 수 있습니다.

</details>

<br />

## 5. UI 및 페이지 기능

<div align="center">

|                                                            0. splash                                                            |                                                           1. 회원가입                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/108019693/210326971-f55a4abc-927f-4dce-a2be-a0c72c2e0274.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/108019693/210326973-e30eef0a-34c8-4235-80ff-e782e04dee74.gif" width="300"/> |

|                                                            2. 로그인                                                            |                                                            3. 홈화면                                                            |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/108019693/210326975-71c80d97-cb56-46cb-be1d-712ee998961c.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/108019693/210326976-03330086-3c1b-4f23-913d-7635feae7ebf.gif" width="300"/> |

|                                                          4. 유저 검색                                                           |                                                         5. 유저 프로필                                                          |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/108019693/210326980-dfec63b4-45ac-4e33-b3a5-5d01237b11bd.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/108019693/210327021-6a9f0ea1-3b22-4594-b02a-ab6929ecd695.gif" width="300"/> |

|                                                         6. 공구글 등록                                                          |                                                        6-2. 공구글 삭제                                                         |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/108019693/210326999-04a59779-c290-47ad-991a-35a09478f199.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/108019693/210327038-3cf44fe4-7f9b-4ac2-aed6-68724bb04bee.gif" width="300"/> |

|                                                       7. 게시글 등록                                                        |                                                          8. 댓글 등록                                                           |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/108019693/210327003-969363d6-551f-4d61-848a-62e0b3042878.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/108019693/210327034-3e85e46c-904f-4b9c-a683-39dd3b6d0097.gif" width="300"/> |

|                                                         9. 마이 프로필                                                          |                                                      10. 마이 프로필 수정                                                       |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/108019693/210326984-780633d0-88ac-4b3e-b2f0-a73c71d54cf3.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/108019693/210326992-2aeaba6e-82e8-4dc0-9f30-f9d29102e1d0.gif" width="300"/> |

|                                                       11. 이미지 슬라이드                                                       |                                                        12. 팔로잉/팔로워                                                        |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/108019693/210354102-b5eab792-3170-4e5a-8596-12e1ad1f1e9c.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/108019693/210354125-1e752496-0caf-4cf6-a78c-b1da95e4031e.gif" width="300"/> |

</div>
<br />  
<br />
<br />

## 6. 쁘2조 팀빌딩

### 1) 매일 오전 9시 데일리스크럼 진행

<div align="center"><img src="https://user-images.githubusercontent.com/104605709/210311021-8e5cd96a-4731-4cb7-bde5-a1e31f9c671f.png" width="350px"></div>

매일 오전 9시에 모여 오늘 진행할 자신의 업무와 어려운 점들을 공유하였습니다. 그 과정에서 프로젝트의 진행 속도와 해결되지 않는 이슈들, 또한 각 팀원의 컨디션을 파악하여 **모든 팀원이 프로젝트를 끝까지 마무리할 수 있도록 일정조율 및 이슈를 함께 해결하는 문화를 만들었습니다.**

### 2) 매일 30분 페어프로그래밍

데일리스크럼을 통해 파악된 각 팀원들의 개발 속도 및 실력 편차를 줄이고자 매일 30분간 팀리더의 주도하에 페어프로그래밍을 진행했습니다. 이를 통해 **에러를 해결하는 방법을 배울 수 있었으며, 그 과정에서 의견을 전달하고 조율하는 소프트 스킬을 향상시킬 수 있었습니다.**

<br />

## 7. 앞으로의 업데이트 계획

### 1) [리팩토링] 전역 상태관리 사용

- 지금은 사용자의 정보나 반복해서 사용해야하는 데이터들을 로컬 스토리지 혹은 props로 관리하고 있어, 내용이 많아질수록 관리가 어려워집니다. 리팩토링 단계에서는 데이터를 효율적으로 관리하고자 전역 상태 관리 라이브러리를 사용해보고자 합니다.

### 2) [리팩토링] 이미지 스프라이트 기법 사용

- 현재 단일 파일로 되어있는 아이콘 이미지들을 스프라이트 이미지로 변경하고, 이미지 로딩 속도를 개선시켜 사용자에게 좀 더 쾌적한 환경을 제공하고자 합니다.

### 3) 추가 기능 구현

- 채팅 기능 구현 및 소셜 로그인 기능을 조금 더 완성도를 높일 예정입니다.

<p align="right"><a href="#top">🔼 Top</a></p>
