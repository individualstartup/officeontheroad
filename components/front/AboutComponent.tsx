import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';

interface ComponentProps {}

const AboutComponent: React.FC<ComponentProps> = () => {
  return (
    <About>
      <ContainerComponent>
        {/*       <AboutTitle>
          <b>NOTIN</b> Malaga CF
        </AboutTitle>*/}
        <AboutParagraph>
          Pojízdný hotel je možná trochu nadnesený název, ale pro nás to tak opravdu je. Rozhodli jsme se více cestovat,
          ale protože "bez práce nejsou koláče", brzo vnikl koncept officeontheroad. Protože volna není nazbyt, zkusili
          jsme přes den pracovat a ráno a odpoledne užívat neznámých míst.
        </AboutParagraph>
        <AboutParagraph>
          Nemůžeme být na cestách pořád, rozhodli jsme se nabídnou tento pojízdný hotel i ostatním.
        </AboutParagraph>
      </ContainerComponent>
    </About>
  );
};

const AboutTitle = styled.h2`
  color: rgb(51, 51, 51);
  font-family: Roboto, sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 1.125rem;
`;

const AboutParagraph = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

const About = styled.div`
  color: #888888;

  @media (min-width: 1024px) {
    margin-top: -20px;
  }
`;

export default AboutComponent;
