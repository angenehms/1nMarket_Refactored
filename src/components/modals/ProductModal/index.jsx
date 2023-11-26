import React from 'react';
import { useState } from 'react';
import * as S from './style';
import { ProductAlertModal, ModalLayout } from 'components';

const ProductModal = ({
  link,
  productId,
  product,
  setProductList,
  setOpenModal,
}) => {
  const [openAlert, setOpenAlert] = useState(false);
  const accountname = JSON.parse(localStorage.getItem('accountname'));

  return accountname === product.author.accountname ? (
    <>
      <ModalLayout setOpenModal={setOpenModal}>
        <li onClick={() => setOpenAlert(true)}>삭제</li>
        <li>
          <S.StyledLink
            to={`/product/${productId}/edit`}
            state={{ ...product }}
          >
            수정
          </S.StyledLink>
        </li>
        <li>
          <S.ProductLink href={`${link}`}>웹사이트에서 상품 보기</S.ProductLink>
        </li>
      </ModalLayout>
      {openAlert && (
        <ProductAlertModal
          productId={productId}
          setProductList={setProductList}
          setOpenAlert={setOpenAlert}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  ) : (
    <ModalLayout setOpenModal={setOpenModal}>
      <li>
        <S.ProductLink href={`${link}`}>웹사이트에서 상품 보기</S.ProductLink>
      </li>
    </ModalLayout>
  );
};

export default ProductModal;
