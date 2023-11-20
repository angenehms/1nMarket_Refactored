import { useState, useEffect } from 'react';
import { axiosImgUpload } from 'apis/axios';
import * as S from './style';

/* eslint-disable */
const URL_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const ProductForm = ({
  imgFiles,
  setImgFiles,
  productName,
  setProductName,
  productLink,
  productPrice,
  setProductPrice,
  setProductLink,
  setCansave,
}) => {
  const [validProductName, setValidProductName] = useState(false);
  const [errProductNameMsg, setErrProductNameMsg] = useState('');
  const [validProductLink, setValidProductLink] = useState(false);
  const [errProductLinkMsg, setErrProductLinkMsg] = useState('');

  const handleImgUpload = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('image', e.target.files[0]);
    const { data } = await axiosImgUpload.post('/image/uploadfile', form);

    // 업로드 취소시 나타나는 엑스박스 이미지 없애기 위한 조건문
    if (!e.target.files[0]) return setImgFiles('');

    setImgFiles(`https://api.mandarin.weniv.co.kr/${data.filename}`);
  };

  // 가격에 컴마 찍기
  const priceComma = (productPrice) => {
    const comma = (productPrice) => {
      return productPrice.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const uncomma = (productPrice) => {
      return productPrice.replace(/[^\d]+/g, '');
    };
    return comma(uncomma(productPrice));
  };

  // 링크 유효성 검사
  useEffect(() => {
    const result = URL_REGEX.test(productLink);
    setValidProductLink(result);

    if (productLink.length && !result)
      setErrProductLinkMsg('잘못된 URL 형식입니다.');
    else setErrProductLinkMsg('');
  }, [productLink]);

  // 상품명 유효성 검사(두 글자 이상 정규식 구하기)
  useEffect(() => {
    const result = !!(productName.length >= 2);
    setValidProductName(result);

    if (productName.length && !result)
      setErrProductNameMsg('상품명은 최소 두 글자 이상 입력해주세요.');
    else setErrProductNameMsg('');
  }, [productName]);

  useEffect(() => {
    setCansave(
      !!imgFiles && validProductName && !!productPrice && validProductLink,
    );
  }, [imgFiles[0], validProductName, productPrice, validProductLink]);

  return (
    <S.Form>
      <S.ImgWrapper>
        <S.ImgUploadText>이미지등록</S.ImgUploadText>
        <S.ProductImgDiv>
          <label htmlFor='img'>
            {imgFiles ? <S.ProductImg src={imgFiles} /> : null}
            <S.BtnImg />
            <input
              type='file'
              id='img'
              accept='.jpg, .gif, .png, .jpeg, .bmp, .tif, .heic'
              className='ir'
              onChange={handleImgUpload}
            />
          </label>
        </S.ProductImgDiv>
      </S.ImgWrapper>

      <S.InputWrapper>
        <S.ProductInputLabel htmlFor='itemName'>
          [모집인원] 공구명
        </S.ProductInputLabel>
        <S.ProductInput
          id='itemName'
          required
          placeholder='예시) [3명] 감귤 같이사요!!'
          type='text'
          minLength='2'
          maxLength='100'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        {errProductNameMsg && <p>{errProductNameMsg}</p>}

        <S.ProductInputLabel htmlFor='price'>1인당 금액</S.ProductInputLabel>
        <S.ProductInput
          id='price'
          required
          placeholder='숫자만 입력 가능합니다.'
          type='text'
          value={productPrice}
          onChange={(e) => {
            setProductPrice(priceComma(e.target.value));
          }}
        />

        <S.ProductInputLabel htmlFor='link'>1/N할 상품 URL</S.ProductInputLabel>
        <S.ProductInput
          id='link'
          required
          placeholder='URL을 입력해 주세요.'
          type='text'
          value={productLink}
          onChange={(e) => setProductLink(e.target.value)}
        />
        {errProductLinkMsg && <p>{errProductLinkMsg}</p>}
      </S.InputWrapper>
    </S.Form>
  );
};

export default ProductForm;
