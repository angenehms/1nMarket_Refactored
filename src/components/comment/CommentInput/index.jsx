import { useState } from 'react';
import { axiosPrivate } from 'apis/axios';
import * as S from './style';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../../cookie';

const CommentInput = ({ postId, setComments }) => {
  const dispatch = useDispatch();
  const image = getCookie('profile-img');
  const [txt, setTxt] = useState('');

  const onChangeInput = (e) => {
    setTxt(e.target.value);
  };

  const AddComment = async () => {
    const {
      data: { comment },
    } = await axiosPrivate.post(
      `/post/${postId}/comments`,
      JSON.stringify({
        comment: {
          content: txt,
        },
      }),
    );
    setComments((prev) => [comment, ...prev]);
    dispatch({ type: 'CommentInput_Components_SetPostsList' });
    setTxt('');
  };

  return (
    <S.FooterConatiner>
      <S.InputSection>
        <S.ProfileImg
          src={
            image.includes('mandarin.api')
              ? image.replace('mandarin.api', 'api.mandarin')
              : image
          }
          alt='프로필 이미지'
        />
        <S.InputText
          type='text'
          placeholder='댓글 입력하기...'
          onChange={onChangeInput}
          value={txt}
        />
        <S.CommentBtn
          className={txt ? 'active' : null}
          disabled={txt ? false : true}
          onClick={AddComment}
        >
          게시
        </S.CommentBtn>
      </S.InputSection>
    </S.FooterConatiner>
  );
};

export default CommentInput;
