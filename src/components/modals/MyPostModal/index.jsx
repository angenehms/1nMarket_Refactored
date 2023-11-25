import { useState } from 'react';
import * as S from './style';
import { ModalLayout, PostRemoveModal } from 'components';

const MyPostModal = ({ setOpenModal, postId, post }) => {
  const [openAelrt, setOpenAlert] = useState(false);

  return (
    <>
      <ModalLayout setOpenModal={setOpenModal}>
        <li onClick={() => setOpenAlert(true)}>삭제</li>
        <li>
          <S.PostEditLink to={`/post/${postId}/edit`} state={{ ...post }}>
            수정
          </S.PostEditLink>
        </li>
      </ModalLayout>
      {openAelrt && (
        <PostRemoveModal
          postId={postId}
          setOpenModal={setOpenModal}
          setOpenAlert={setOpenAlert}
        />
      )}
    </>
  );
};

export default MyPostModal;
