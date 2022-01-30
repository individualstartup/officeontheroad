import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';

interface ComponentProps {}

const ContactComponent: React.FC<ComponentProps> = () => {
  return (
    <Contact>
      <ContainerComponent>
        <ContactWrapper>
          <div className="contact-info">
            <p>
              INDIVIDUAL STARTUP s.r.o.
              <br />
              Rybná 716/24, Staré Město
              <br />
              110 00 Praha 1<br />
              Česká republika
            </p>
            <p>
              Tel.: <a href="tel:+420603609901">+420 725 367 556</a>
              <br />
              Email: <a href="mailto:info@officeontheroad.cz">info@officeontheroad.cz</a>
              <br />
              IČ: 08 94 96 71
            </p>
          </div>
          <ul>
            <li>
              <a href="#fotogalerie">Fotogalerie</a>
            </li>
            <li>
              <a href="#pujcovne">Půjčovné</a>
            </li>
            <li>
              <a href="#kalendar">Kalendář</a>
            </li>
            <li>
              <a href="#vybaveni-vozu">Vybavení vozu</a>
            </li>
            <li>
              <a href="#podminky">Podmínky</a>
            </li>
            <li>
              <a href="#kontakty">Kontakty</a>
            </li>
          </ul>
          <ul className="social-sites">
            <li>
              <a href="https://www.facebook.com/officeontheroadcz">
                <Icon src="/images/svg/facebook.svg" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/office_on_the_road_cz/">
                <Icon src="/images/svg/instagram.svg" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">GDPR</a>
            </li>
            <li>
              <a href="">Ochrana osobních údajů</a>
            </li>
            <li>
              <a href="">Obchodní podmínky</a>
            </li>
          </ul>
        </ContactWrapper>
      </ContainerComponent>
    </Contact>
  );
};

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding: 2.8125rem 0.625rem 3.125rem 0.625rem;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Contact = styled.div`
  background: rgb(3, 131, 163);
  color: rgb(255, 255, 255);

  > div > * {
    margin-top: 2.8125rem;
    position: relative;
  }
  > div > *:not(:last-child)::after {
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAUCAYAAACqJ5zlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAChJREFUeNpiSN507P+rr9/BGMRmADFgAMTGFEDXwgiUYEAGI1wAIMAA/GFp4TR2dh0AAAAASUVORK5CYII=')
      repeat-y left top;
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    right: -2px;
    top: 0;
  }
  a {
    color: rgb(255, 255, 255);
  }
  a:hover,
  main div.contact a:focus {
    text-decoration: none;
  }

  div.contact-info p:last-of-type {
    margin-bottom: 0;
  }

  div.contact-info {
    margin-bottom: 40px;
    @media (min-width: 1024px) {
      margin-bottom: 0;
    }
  }

  ul:not([class]) {
    margin-bottom: 40px;

    @media (min-width: 1024px) {
      padding-left: 4.375rem;
      padding-right: 4.375rem;
      margin-bottom: 0;
    }
  }

  ul:not([class]) li {
    font-weight: 600;
    list-style: none;
  }

  ul.social-sites {
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 40px;

    @media (min-width: 1024px) {
      padding-left: 50px;
      padding-right: 50px;
      justify-content: center;
      margin-bottom: 0;
    }
  }

  ul.social-sites li {
    height: 40px;
    list-style: none;
    width: 40px;
  }

  ul.social-sites li:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img``;

export default ContactComponent;
