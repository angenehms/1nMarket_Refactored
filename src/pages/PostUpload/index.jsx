import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosImgUpload, axiosPrivate } from '../../apis/axios';
import UploadHeader from '../../components/common/Header/UploadHeader';
import { ReactComponent as UploadIcon } from '../../assets/icons/icon-upload.svg';
import * as S from './style';
import { useRef } from 'react';

const PostUpload = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [imgFiles, setImgFiles] = useState([]);
  const textRef = useRef();

  const canSave = !!imgFiles.length || !!content;

  const handleImgUpload = async (e) => {
    e.preventDefault();
    if (imgFiles.length > 2)
      return window.alert('이미지는 세 개 이하로 업로드가 가능합니다!');
    const form = new FormData();
    form.append('image', e.target.files[0]);
    const { data } = await axiosImgUpload.post('/image/uploadfile', form);

    setImgFiles((prev) => [
      ...prev,
      `https://mandarin.api.weniv.co.kr/${data.filename}`,
    ]);
  };

  const autoResizeTextarea = (e) => {
    textRef.current.style.height = 'auto';
    let height = textRef.current.scrollHeight; // 높이
    textRef.current.style.height = `${height + 16}px`;
  };

  const handlePostUpload = async (e) => {
    console.log(content, imgFiles);
    e.preventDefault();
    if (!canSave) return;
    await axiosPrivate.post(
      '/post',
      JSON.stringify({
        post: {
          content,
          image: imgFiles.join(','),
        },
      }),
    );
    navigate('/home');
  };

  const handleRemoveImg = (idx) => {
    setImgFiles((prev) => prev.filter((_, i) => idx !== i));
  }

  return (
    <>
      <UploadHeader canSave={canSave} handlePostUpload={handlePostUpload} />
      <S.Conatiner>
        <S.ProfileImg
          src={JSON.parse(localStorage.getItem('profile-img'))}
          alt='사용자 이미지'
        />
        <S.PostForm>
          <S.PostComment
            ref={textRef}
            value={content}
            placeholder='게시글 입력하기...'
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={autoResizeTextarea}
            onKeyUp={autoResizeTextarea}
          />
          <S.ImgLabel htmlFor='img'>
            <UploadIcon />
          </S.ImgLabel>
          <input
            style={{ display: 'none' }}
            id='img'
            type='file'
            accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
            onChange={handleImgUpload}
          />
          <S.ImgList>
            {imgFiles?.map((img, i) => (
              <S.ImgItem key={img.slice(10)} >
                <S.PostImg src={img} alt='' />
                <S.RemoveButton type='button' onClick={() => handleRemoveImg(i)}>
                  <span className='ir'>이미지 삭제</span>
                </S.RemoveButton>
              </S.ImgItem>
            ))}
          </S.ImgList>
        </S.PostForm>
      </S.Conatiner>
    </>
  );
};

export default PostUpload;
