import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';
import ReservationForm from './ReservationForm/ReservationForm';

interface ComponentProps {}

const AboutComponent: React.FC<ComponentProps> = () => {
  return (
    <About>
      <ContainerComponent>
        <AboutTitle>
          <b>NOTIN</b> Malaga CF
        </AboutTitle>
        <Note>Model 2021</Note>
        <AboutParagraph>
          Dovolená, kancl na cestách, útěk z reality… Pojďme si vytvořit nové vzpomínky a zažít něco jiného,
          neobyčejného. Ráno si zaplavat v moři, vychutnat si snídani s výhledem na jezero, přes oběd jít na procházku
          šumícím lesem a přitom být stále v pracovním procesu. To jsme si vybrali my, protože když už home office, proč
          ne rovnou road office? Ale i nám se občas zasteskne po vaně a gauči a proto nabízíme tuhle možnost, být na
          dovolené i v práci zároveň, i vám. A to je super, ne? 😀
        </AboutParagraph>
        {/*<AboutParagraph>*/}
        {/*  Nemůžeme být na cestách pořád, rozhodli jsme se nabídnou tento pojízdný hotel i ostatním. Nabízíme nejprve ve*/}
        {/*  své sociální bulblině a za velmi <b>zvýhodněnou cenu</b>.*/}
        {/*</AboutParagraph>*/}
      </ContainerComponent>
      {/*<ReservationForm/>*/}
    </About>
  );
};

const Note = styled.div`
  display: flex;
  margin-bottom: 1.125rem;
`;

const AboutTitle = styled.h2`
  color: rgb(51, 51, 51);
  font-family: Roboto, sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 0;
`;

const AboutParagraph = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

const About = styled.div`
  color: #888888;

  display: flex;
  flex-direction: row;
  max-width: 1200px;

  margin: 120px auto 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default AboutComponent;
