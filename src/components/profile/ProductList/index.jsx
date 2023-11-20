import React, { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosPrivate } from 'apis/axios';
import { ProductModal } from 'components';
import * as S from './style';

const ProductList = () => {
  // params 객체로 받아옴
  const { accountname } = useParams();
  const [productList, setProductList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const getProductList = async () => {
      const {
        data: { product },
      } = await axiosPrivate.get(`/product/${accountname}`);
      setProductList(product);
    };
    getProductList();
  }, [accountname]);

  const onErrorImg = (e) => {
    e.target.src = 'https://api.mandarin.weniv.co.kr/1672556398304.png';
  };

  return (
    <>
      {productList.length === 0 ? null : (
        <S.ProductListWrapper>
          <S.ProductBox>
            <S.Title>1/N하고 있는 상품</S.Title>
            <S.ProductList>
              {productList.map((product, i) => (
                <Fragment key={product.id}>
                  <S.ProductItem onClick={() => setOpenModal(true)}>
                    <S.ProductListImg
                      src={
                        product.itemImage.includes('mandarin.api')
                          ? product.itemImage.replace(
                              'mandarin.api',
                              'api.mandarin',
                            )
                          : product.itemImage
                      }
                      alt=''
                      onError={onErrorImg}
                    />
                    <S.ProductMember>
                      <S.ProductMemberTxt>모집중</S.ProductMemberTxt>
                    </S.ProductMember>
                    <p>{product.itemName}</p>
                    <strong>
                      <S.ProductItemTxt>1인당</S.ProductItemTxt>{' '}
                      {product.price.toLocaleString()}원
                    </strong>
                  </S.ProductItem>
                  {openModal && (
                    <ProductModal
                      link={product.link}
                      productId={product.id}
                      product={product}
                      setProductList={setProductList}
                      setOpenModal={setOpenModal}
                    />
                  )}
                </Fragment>
              ))}
            </S.ProductList>
          </S.ProductBox>
        </S.ProductListWrapper>
      )}
    </>
  );
};

export default ProductList;
