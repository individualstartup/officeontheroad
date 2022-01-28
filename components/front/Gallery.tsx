import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

interface ComponentProps {}

const GalleryComponent: React.FC<ComponentProps> = () => {
  return (
    <>
      <Gallery>
        <h2>
          <b>Fotogalerie</b>
        </h2>
        <GalleryInner>
          <GalleryImageList>
            <GalleryPanel>
              <img alt="" src="/images/data/gal1.jpg" />
              <img alt="" src="/images/data/gal2.jpg" />
              <img alt="" src="/images/data/gal3.jpg" />
            </GalleryPanel>
            <GalleryPanel>
              <img alt="" src="/images/data/gal4.jpg" />
              <img alt="" src="/images/data/gal5.jpg" />
              <img alt="" src="/images/data/gal6.jpg" />
            </GalleryPanel>
          </GalleryImageList>
        </GalleryInner>
      </Gallery>
    </>
  );
};

const GalleryPanel = styled.p`
  height: 595px;
  margin-bottom: 0;
  position: relative;
  width: 595px;

  img {
    position: absolute;
  }
`;

const GalleryImageList = styled.div`
  border-radius: 20px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 595px;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-right: 1px;
  overflow: hidden;
  width: 1191px;

  p:nth-of-type(1) img:nth-of-type(1) {
    left: 0;
    top: 0;
  }

  p:nth-of-type(1) img:nth-of-type(2) {
    bottom: 0;
    left: 0;
  }

  p:nth-of-type(1) img:nth-of-type(3) {
    right: 0;
    top: 0;
  }

  p:nth-of-type(2) img:nth-of-type(1) {
    left: 0;
    top: 0;
  }

  p:nth-of-type(2) img:nth-of-type(2) {
    right: 0;
    top: 0;
  }

  p:nth-of-type(2) img:nth-of-type(3) {
    bottom: 0;
    right: 0;
  }
`;

const GalleryInner = styled.div`
  height: 595px;
  overflow-x: auto;
  width: 100%;
`;

const Gallery = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 5.6875rem 0.625rem 6.5625rem 0.625rem;
  width: 1191px;
`;

export default GalleryComponent;
