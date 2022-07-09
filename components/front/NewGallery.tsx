import React, { useContext, useEffect, useState } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { ApiContext } from 'api/api';
import ImageGallery from 'react-image-gallery';
import getConfig from 'next/config';
import ContainerComponent from './Container';

interface ComponentProps {}

const NewGallery: React.FC<ComponentProps> = () => {
  const { publicRuntimeConfig } = getConfig();
  const hostPrefix = publicRuntimeConfig.CDN_HOST;

  const images = [
    `${hostPrefix}/images/data/mv01.jpeg`,
    `${hostPrefix}/images/data/mv02.jpeg`,
    `${hostPrefix}/images/data/mv03.jpeg`,
    `${hostPrefix}/images/data/mv04.jpeg`,
    `${hostPrefix}/images/data/mv05.jpeg`,
    `${hostPrefix}/images/data/schema.png`,
    `${hostPrefix}/images/data/IMG_3980.jpeg`,
    `${hostPrefix}/images/data/IMG_4089.jpeg`,
    `${hostPrefix}/images/data/IMG_4093.jpeg`,
    `${hostPrefix}/images/data/IMG_4094.jpeg`,
    `${hostPrefix}/images/data/IMG_4179.jpeg`,
    `${hostPrefix}/images/data/IMG_4264.jpeg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-3-1024x683.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-5-1024x683.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-6.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-7.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-8.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-9-1024x762.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-10-1024x683.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-11-1024x683.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-12.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-13-1024x683.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-14-1024x677.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-15-1024x683.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-16.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-17-1024x683.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-18-1024x693.jpg`,
    `${hostPrefix}/images/Camping-car-NOTIN-Malaga-CF-1024x677.jpg`,
  ];

  return (
    <>
      <ContainerComponent id={'galerie'}>
        <ImageGallery
          items={images.map((t) => {
            return { original: t, thumbnail: `${t}?height=100` };
          })}
        />
      </ContainerComponent>
    </>
  );
};

export default NewGallery;
