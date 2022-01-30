import React from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';

interface ComponentProps {}

const HeroInformationBoxComponent: React.FC<ComponentProps> = () => {
  return (
    <ContainerComponent>
      <MobileWrapper>
        <Box>
          <BoxTitle>
            <span>Obytný vůz</span> <span>NOTIN</span> <span> Malaga CF </span>
            <span>s&nbsp;královským lůžkem</span>
          </BoxTitle>
          <More>
            <a href="#kalendar">Chci si pronajmout</a>
          </More>
        </Box>
      </MobileWrapper>
    </ContainerComponent>
  );
};

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const BoxTitle = styled.h1`
  color: #333;
  line-height: 2.8125rem;
  text-align: left;

  @media (min-width: 1024px) {  
    color: rgb(255, 255, 255);
  }

  span:nth-of-type(1) {
    display: block;
    font-size: 30px;
    font-weight: 400;
    line-height: 1;

    @media (min-width: 1024px) {  
      display: inline-block;
      font-size: 2.5rem;
    }
  }
  span:nth-of-type(2) {
    display: inline-block;
    font-size: 90px;
    font-weight: 900;
    line-height: 1;

    @media (min-width: 1024px) { 
      font-size: 6.25rem;
    }
  }

  span:nth-of-type(3) {
    display: inline-block;
    font-size: 40px;
    font-weight: 500;
    line-height: 1;
  }

  span:nth-of-type(4) {
    display: inline-block;
    font-size: 25px;
    font-weight: 400;
    line-height: 1;

    @media (min-width: 1024px) {  
      font-size: 1.875rem;
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;
  text-align: center;
  position: absolute;
  left: 20px;
  max-width: 516px;

  @media (max-width: 1024px) {
    bottom: -190px;
  }

  @media (max-width: 500px) {
    bottom: -270px;
  }

  @media (min-width: 1024px) {
    padding: 2.6875rem 3.125rem 3.0625rem 3.125rem;
    max-width: 400px;
    margin-top: -98px;
    min-height: 400px;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 18px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    position: static;
  }
`;

const More = styled.p`
  display: flex;
  font-weight: 900;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 1.25rem;
  text-transform: uppercase;

  a {
    background: rgb(3, 131, 163);
    box-shadow: 0 0 0 1px rgb(5, 162, 201) inset, 0 0 20px rgba(0, 0, 0, 0.35);
    border-radius: 8px;
    color: rgb(255, 255, 255);
    display: block;
    padding: 0.875rem 2.5rem 1rem 2.5rem;
    text-decoration: none;
  }
`;

export default HeroInformationBoxComponent;
