import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';

interface ComponentProps {}

const RentalComponent: React.FC<ComponentProps> = () => {
  return (
    <ContainerComponent>
      <Rentail>
        <RentailTitle>
          <b>Půjčovné</b>
        </RentailTitle>
        <RetailParagraphOdd>
          <b>Termín:</b> 1.7.2021 - 14.7.2021
        </RetailParagraphOdd>
        <RetailParagraph>
          <b>Cena:</b> 7 x 3.500 Kč, 6 x 3.000 Kč
        </RetailParagraph>
        <RetailParagraphOdd>
          <b>Servisní poplatek:</b> 1.500 Kč
        </RetailParagraphOdd>
        <RetailParagraph>
          <b>Cena za vybavení:</b> 14 x 200 Kč (motorka), 14 x 80 Kč (paddleboard), 14 x 200 Kč (elektrocentrála)
        </RetailParagraph>
        <RetailParagraphOdd>
          <b>Hmotnost:</b> 3.080 kg
        </RetailParagraphOdd>
        <RetailParagraph>
          <b>Základní váha:</b> 2.900 kg
        </RetailParagraph>
        <RetailParagraphOdd>
          <b>Vybavení:</b> motorka (100 kg), paddleboard (40 kg), elektrocentrála (40 kg)
        </RetailParagraphOdd>
        <RetailParagraph>
          <b>Záloha:</b> 30.000 Kč
        </RetailParagraph>
        <RetailTotalRow>
          <b>Celkem:</b> 50.720 Kč
        </RetailTotalRow>
        <RetailTotal>
          <RetailTotalButton>Objednat</RetailTotalButton>
        </RetailTotal>
      </Rentail>
    </ContainerComponent>
  );
};

const Rentail = styled.div`
  background: rgb(239, 239, 239);
  border-radius: 18px;
  box-sizing: border-box;
  margin: 100px auto;
  width: 100%;
  padding: 100px 53px;
`;

const RentailTitle = styled.h2`
  margin-bottom: 1.1875rem;
`;

const RetailParagraphOdd = styled.p`
  background: rgb(255, 255, 255);
  border-radius: 5px;
  padding: 0.6875rem 1.25rem 0.5625rem 1.25rem;
`;

const RetailParagraph = styled.p`
  margin-bottom: 0;
  padding: 0.6875rem 1.25rem 0.5625rem 1.25rem;
`;

const RetailTotalRow = styled.p`
  color: rgb(51, 51, 51);
  font-size: 1.625rem;
  padding: 0.6875rem 1.25rem 0.5625rem 1.25rem;
  background: rgb(255, 255, 255);
`;

const RetailTotal = styled.div`
  margin-bottom: 0;
  margin-top: 2.8125rem;
  display: flex;
  font-weight: 900;
  justify-content: center;
`;

const RetailTotalButton = styled.a`
  text-transform: uppercase;
  background-color: #0383a3;
  box-shadow: 0 0 0 1px rgb(5, 162, 201) inset, 0 0 20px rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  color: rgb(255, 255, 255);
  display: block;
  padding: 0.875rem 3.75rem 1rem 3.75rem;
  text-decoration: none;
  max-width: 220px;
  max-height: 60px;
`;

export default RentalComponent;
