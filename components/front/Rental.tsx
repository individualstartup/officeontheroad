import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

interface ComponentProps {}

const RentalComponent: React.FC<ComponentProps> = () => {
  return (
    <>
      <Rentail>
        <h2>
          <b>Půjčovné</b>
        </h2>
        <p>
          <b>Termín:</b> 1.7.2021 - 14.7.2021
        </p>
        <p>
          <b>Cena:</b> 7 x 3.500 Kč, 6 x 3.000 Kč
        </p>
        <p>
          <b>Servisní poplatek:</b> 1.500 Kč
        </p>
        <p>
          <b>Cena za vybavení:</b> 14 x 200 Kč (motorka), 14 x 80 Kč (paddleboard), 14 x 200 Kč (elektrocentrála)
        </p>
        <p>
          <b>Hmotnost:</b> 3.080 kg
        </p>
        <p>
          <b>Základní váha:</b> 2.900 kg
        </p>
        <p>
          <b>Vybavení:</b> motorka (100 kg), paddleboard (40 kg), elektrocentrála (40 kg)
        </p>
        <p>
          <b>Záloha:</b> 30.000 Kč
        </p>
        <p className="total">
          <b>Celkem:</b> 50.720 Kč
        </p>
        <p className="more">
          <a href="">Objednat</a>
        </p>
      </Rentail>
    </>
  );
};

const Rentail = styled.div`
  background: rgb(239, 239, 239);
  border-radius: 18px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: 5.75rem 3.125rem 6.25rem 3.125rem;
  width: 74.625rem;

  @media only screen and (max-width: 1214px) {
    box-sizing: border-box;
    width: 100%;
  }

  h2 {
    margin-bottom: 1.1875rem;
  }

  p {
    margin-bottom: 0;
    padding: 0.6875rem 1.25rem 0.5625rem 1.25rem;
  }

  p:nth-of-type(odd) {
    background: rgb(255, 255, 255);
    border-radius: 5px;
  }

  p.total {
    color: rgb(51, 51, 51);
    font-size: 1.625rem;
  }
  p.more {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-weight: 900;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 0;
    margin-top: 2.8125rem;
    text-transform: uppercase;
  }
  p.more a {
    background: rgb(3, 131, 163);
    box-shadow: 0 0 0 1px rgb(5, 162, 201) inset, 0 0 20px rgba(0, 0, 0, 0.35);
    border-radius: 8px;
    color: rgb(255, 255, 255);
    display: block;
    padding: 0.875rem 3.75rem 1rem 3.75rem;
    text-decoration: none;
  }
`;

export default RentalComponent;
