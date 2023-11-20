import React, { useRef, useState } from 'react';
import * as S from './style';

const ImageSlide = ({ images }) => {
  const [selectBtn, setSelectBtn] = useState(0);
  const slideRef = useRef();
  const handleSlide = (i) => {
    const { current: slideEl } = slideRef;
    const { width } = slideEl.getBoundingClientRect();
    slideEl.style.transform = `translateX(${(-width / images.length) * i}px)`;
    setSelectBtn(i);
  };

  const onErrorImg = (e) => {
    e.target.src = 'https://api.mandarin.weniv.co.kr/1672556398304.png';
  };

  return (
    <S.SlideContainer imgLength={images.length}>
      <S.Slide ref={slideRef} imgLength={images.length}>
        {images.map((image, i) => (
          <React.Fragment key={i}>
            {image && (
              <S.SlideItem>
                <S.PostImage
                  src={
                    image.includes('mandarin.api')
                      ? image.replace('mandarin.api', 'api.mandarin')
                      : image
                  }
                  alt=''
                  onError={onErrorImg}
                />
              </S.SlideItem>
            )}
          </React.Fragment>
        ))}
      </S.Slide>
      <S.ButtonWrapper>
        {images.length > 1 &&
          images.map((_, i) => (
            <S.SlideButton
              style={{ backgroundColor: selectBtn === i && '#EB7F5F' }}
              key={i}
              onClick={() => handleSlide(i)}
            />
          ))}
      </S.ButtonWrapper>
    </S.SlideContainer>
  );
};

export default ImageSlide;
