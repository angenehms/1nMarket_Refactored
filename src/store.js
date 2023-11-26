import { createStore } from 'redux';

export const ActionObj_Home = (posts) => ({
  type: 'Home_Page_SetPostsList',
  payload: posts,
});

export const ActionObj_MyPosts = (post) => ({
  type: 'MyPosts_Components_SetPostsList',
  payload: post,
});

export const ActionObj_Post = (post) => ({
  type: 'Post_Page_SetPostsList',
  payload: post,
});

export const ActionObj_PostRemoveModal = (postId) => ({
  type: 'PostRemoveModal_Components_SetPostsList',
  payload: postId,
});

export const store = createStore(function (currentState, action) {
  if (currentState === undefined) {
    // 스테이트 저장공간
    return {
      postsList: [],
      myPostsList: [],
      postPagePost: [],
    };
  }

  const newState = { ...currentState };

  if (action.type === 'Home_Page_SetPostsList') {
    newState.postsList = [...newState.postsList, ...action.payload];
  }

  if (action.type === 'Home_Page_SetPostsList_CleanUp') {
    newState.postsList = [];
  }

  if (action.type === 'MyPosts_Components_SetPostsList') {
    newState.myPostsList = [...action.payload];
  }

  if (action.type === 'Post_Page_SetPostsList') {
    newState.postPagePost = [action.payload];
  }

  if (action.type === 'PostRemoveModal_Components_SetPostsList') {
    newState.myPostsList = newState.myPostsList.filter(
      ({ id }) => id !== action.payload,
    );
  }

  //     newState.postsList = (prev) =>
  //       prev.filter(({ id }) => id !== action.payload);
  //   }

  //   if (action.type === 'CommentInput_Components_SetPostsList') {
  //     newState.postsList = (prev) => [
  //       {
  //         ...prev[0],
  //         commentCount: prev[0].commentCount + 1,
  //       },
  //     ];
  //   }

  return newState;
});

// dispatch(forParams(postId));
// dispatch 는 인자로 객체를 받고 그 객체의 이름은 리듀서의 인자인 action 이다.
