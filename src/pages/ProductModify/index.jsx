import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { SaveHeader, ProductForm } from 'components';
import { axiosPrivate } from 'apis/axios';
import { useTitle } from 'hooks';
import { getCookie } from '../../cookie';

const ProductModify = () => {
  useTitle('1nMarket - ProductModify');
  // 마운트 시에 수정 사항 페이지에 기존 상품정보들을 인풋창에 미리 렌더링 시키기
  const { state } = useLocation();
  const [imgFiles, setImgFiles] = useState(state?.itemImage || '');
  const [productName, setProductName] = useState(state?.itemName || '');
  const [productLink, setProductLink] = useState(state?.link || '');
  const [productPrice, setProductPrice] = useState(state?.price || '');
  const [canSave, setCansave] = useState(false);

  const navigate = useNavigate();
  const { productId } = useParams();
  const accountName = getCookie('accountname');
  // const accountName = JSON.parse(localStorage.getItem('accountname'));

  useEffect(() => {
    if (!state) navigate('/home');
  }, []);

  // 수정사항 업로드 시키기
  const handleProductUpload = async (e) => {
    e.preventDefault();
    if (!canSave) return;
    await axiosPrivate.put(`/product/${productId}`, {
      product: {
        itemName: productName,
        price: Number(productPrice.toString().replace(/,/g, '')),
        link: productLink,
        itemImage: imgFiles,
      },
    });
    navigate(`/profile/${accountName}`);
  };

  return (
    <>
      <SaveHeader canSave={canSave} handleProductUpload={handleProductUpload} />
      <ProductForm
        imgFiles={imgFiles}
        setImgFiles={setImgFiles}
        productName={productName}
        setProductName={setProductName}
        productLink={productLink}
        setProductLink={setProductLink}
        productPrice={productPrice}
        setProductPrice={setProductPrice}
        setCansave={setCansave}
      />
    </>
  );
};

export default ProductModify;
