{/* This is something that can be used at a later point, if styled correctly. */}

import React from 'react';
import styled from 'styled-components';
import HeroInformationBoxComponent from './HeroInformationBox';
import Slider from 'react-slick';

interface ComponentProps {
  backgroundImage: string;
}

const HeroWithSliderComponent: React.FC<ComponentProps> = ({ backgroundImage }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <Hero backgroundImage={backgroundImage}>
        <HeroInformationBoxComponent />
      </Hero>
    </Slider>
  );
};

const Hero = styled.div`
  display: flex;
  align-items: center;
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 470px;
  max-width: 2000px;
  background-position: right top;
  margin-bottom: 250px;
  position: relative;

  @media (min-width: 1024px) {
    background-position: center top;
    margin: 0 auto 30px auto;
    min-height: 767px;
  }

  @media (min-width: 1440px) {
    min-height: 767px;
    margin: 0 auto 40px auto;
  }
`;

export default HeroWithSliderComponent;
