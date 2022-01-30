import React from 'react';
import styled from 'styled-components';
import HeroInformationBoxComponent from './HeroInformationBox';

interface ComponentProps {
  backgroundImage: string;
}

const HeroComponent: React.FC<ComponentProps> = ({ backgroundImage }) => {
  return (
    <Hero backgroundImage={backgroundImage}>
      <HeroInformationBoxComponent />
    </Hero>
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

export default HeroComponent;
