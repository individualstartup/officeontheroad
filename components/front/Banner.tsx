import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

interface ComponentProps {}

const BannerComponent: React.FC<ComponentProps> = () => {
  return (
    <Banner>
      <BannerInner>
        <Logo>
          office<span>on</span>the<span>road</span>.cz
        </Logo>
        <Nav>
          <a href=""></a>
          <NavigationList>
            <NavigationItem>
              <a href="#o-vozu">O vozu</a>
            </NavigationItem>
            <NavigationItem>
              <a href="#fotogalerie">Fotogalerie</a>
            </NavigationItem>
            <NavigationItem>
              <a href="#pujcovne">Půjčovné</a>
            </NavigationItem>
            <NavigationItem>
              <a href="#kalendar">Kalendář</a>
            </NavigationItem>
            <NavigationItem>
              <a href="#vybaveni-vozu">Vybavení vozu</a>
            </NavigationItem>
            <NavigationItem>
              <a href="#podminky">Podmínky</a>
            </NavigationItem>
            <NavigationItem>
              <a href="#vice-k-pronajmu">Více k pronájmu</a>
            </NavigationItem>
            <NavigationItem>
              <a href="#kontakty">Kontakty</a>
            </NavigationItem>
          </NavigationList>
        </Nav>
      </BannerInner>
    </Banner>
  );
};

const NavigationItem = styled.li`
  font-size: 0.875rem;
  font-weight: 700;
  list-style: none;
  text-transform: uppercase;
`;
const NavigationList = styled.ol`
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  li:not(:first-child) {
    margin-left: 1.25rem;
  }
  a {
    color: rgb(255, 255, 255);
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  width: 50rem;
`;

const Logo = styled.p`
  font-size: 1.875rem;
  margin-bottom: 1.8125rem;
  margin-top: 1.875rem;
  span {
    font-weight: 900;
  }
`;

const BannerInner = styled.div`
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  width: 74.625rem;
  @media only screen and (max-width: 1214px) {
    box-sizing: border-box;
    width: 100%;
  }
`;
const Banner = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: rgb(255, 255, 255);
  font-family: Roboto, sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export default BannerComponent;
