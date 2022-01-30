import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';

interface ComponentProps {}

const GalleryComponent: React.FC<ComponentProps> = () => {
  return (
    <ContainerComponent>
      <Gallery>
        <GalleryTitle>Fotogalerie</GalleryTitle>
        <GalleryInner>
          <GalleryImageList>
            <GalleryPanel>
              <GalleryImage alt="" src="/images/data/gal1.jpg" />
              <GalleryImage alt="" src="/images/data/gal2.jpg" />
              <GalleryImage alt="" src="/images/data/gal3.jpg" />
            </GalleryPanel>
            <GalleryPanel>
              <GalleryImage alt="" src="/images/data/gal4.jpg" />
              <GalleryImage alt="" src="/images/data/gal5.jpg" />
              <GalleryImage alt="" src="/images/data/gal6.jpg" />
            </GalleryPanel>
          </GalleryImageList>
        </GalleryInner>
      </Gallery>
    </ContainerComponent>
  );
};

const GalleryPanel = styled.p`
  margin-bottom: 0;
  position: relative;
  width: 100%;
  display: inline-block;
  height: 595px;

  @media screen and (max-width: 768px) {
    height: 100%;
  }

  img {
    position: absolute;

    @media screen and (max-width: 768px) {
      position: static;
    }
  }
`;

const GalleryImageList = styled.div`
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  margin-right: 1px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  img {
    @media screen and (max-width: 768px) {
      width: 33%;
      height: 275px;
      object-fit: cover;
    }

    @media screen and (max-width: 500px) {
      width: 275px;
    }
  }

  p:nth-of-type(1) img:nth-of-type(1) {
    left: 0;
    top: 0;
  }

  p:nth-of-type(1) img:nth-of-type(2) {
    bottom: 0;
    left: 0;
  }

  p:nth-of-type(1) img:nth-of-type(3) {
    right: 5px;
    top: 0;
  }

  p:nth-of-type(2) img:nth-of-type(1) {
    left: -5px;
    top: 0;
  }

  p:nth-of-type(2) img:nth-of-type(2) {
    right: 10px;
    top: 0;
  }

  p:nth-of-type(2) img:nth-of-type(3) {
    bottom: 0;
    right: 10px;
  }
`;

const GalleryInner = styled.div`
  overflow-x: auto;
  width: 100%;
`;

const GalleryImage = styled.img``;

const GalleryTitle = styled.h2`
  font-weight: 700;
`;

const Gallery = styled.div`
  margin: 100px auto;
  width: 100%;
`;

export default GalleryComponent;
