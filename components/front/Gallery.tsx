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
    autoplay: true,
    autoplaySpeed: 2000,
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
              <GalleryImage alt="Rozlozeni obytnaku" src={`${hostPrefix}/images/data/schema.png?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_3929.jpeg?height=400`} />
              <GalleryImage
                alt=""
                src={`${hostPrefix}/images/data/C2CC94FB-725E-4892-83B4-9FEAF3CB422A.JPG?height=400`}
              />
              <GalleryImage
                alt=""
                src={`${hostPrefix}/images/data/62E89C95-9F17-4C6E-867B-DCDA88DB664F.jpg?height=400`}
              />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_3980.jpeg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_4089.jpeg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_4093.jpeg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_4094.jpeg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_4179.jpeg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/data/IMG_4264.jpeg?height=400`} />

              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-3-1024x683.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-5-1024x683.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-6.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-7.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-8.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-9-1024x762.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-10-1024x683.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-11-1024x683.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-12.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-13-1024x683.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-14-1024x677.jpgheight=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-15-1024x683.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-16.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-17-1024x683.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-18-1024x693.jpg?height=400`} />
              <GalleryImage alt="" src={`${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-1024x677.jpg?height=400`} />
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
    
    ul.slick-dots {
      display: flex;
    }
  }
`;

const GalleryInner = styled.div`
  width: 100%;
`;

const GalleryImage = styled.img``;

const GalleryTitle = styled.h2`
  font-weight: 700;
`;

const Gallery = styled.div`
  margin: 3rem auto;
  width: 100%;
`;

export default GalleryComponent;
