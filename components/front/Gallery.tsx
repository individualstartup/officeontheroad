import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';
import Slider from 'react-slick';
import getConfig from 'next/config';

interface ComponentProps {}

const GalleryComponent: React.FC<ComponentProps> = () => {
  const { publicRuntimeConfig } = getConfig();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
        },
      },
    ],
  };

  const hostPrefix = publicRuntimeConfig.CDN_HOST;

  return (
    <ContainerComponent id={'fotogalerie'}>
      <Gallery>
        <GalleryTitle>Fotogalerie</GalleryTitle>
        <GalleryInner>
          <GalleryImageList>
            <Slider {...settings}>
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_3929.jpeg?height=400`} />
              <GalleryImage
                alt=""
                src={`${hostPrefix}/images/data/C2CC94FB-725E-4892-83B4-9FEAF3CB422A.JPG?height=400`}
              />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_3980.jpeg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_4089.jpeg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_4093.jpeg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_4094.jpeg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_4179.jpeg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_4264.jpeg?height=400`} />
              {/*              <GalleryImage alt="" src="/images/data/gal1.jpg" />
              <GalleryImage alt="" src="/images/data/gal2.jpg" />
              <GalleryImage alt="" src="/images/data/gal3.jpg" />

              <GalleryImage alt="" src="/images/data/gal4.jpg" />
              <GalleryImage alt="" src="/images/data/gal5.jpg" />
              <GalleryImage alt="" src="/images/data/gal6.jpg" />*/}
            </Slider>
          </GalleryImageList>
        </GalleryInner>
      </Gallery>
    </ContainerComponent>
  );
};

const GalleryImageList = styled.div`
  border-radius: 20px;
  margin: 0 auto;

  .slick-slider {
    margin: 0 auto;
    text-align: center;
    height: 400px;

    img {
      height: 400px;
      max-height: 100%;
      object-fit: contain;
    }
  }
`;

const GalleryInner = styled.div`
  width: 100%;
`;

const GalleryImage = styled.img`
  padding: 1rem;
`;

const GalleryTitle = styled.h2`
  font-weight: 700;
`;

const Gallery = styled.div`
  margin: 3rem auto;
  width: 100%;
`;

export default GalleryComponent;
