import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import BurgerComponent from './Burger';

interface ComponentProps {
  open: boolean;
  setOpen: Function;
}

const NavigationComponent: React.FC<ComponentProps> = ({ open, setOpen }) => {
  return (
    <div>
      <Nav open={open}>
        <NavigationList>
          {/*          <NavigationItem>
            <a href="#o-vozu">O vozu</a>
          </NavigationItem>*/}
          <NavigationItem>
            <a href="#fotogalerie">Fotogalerie</a>
          </NavigationItem>
          {/*          <NavigationItem>
            <a href="#pujcovne">Půjčovné</a>
          </NavigationItem>*/}
          {/*          <NavigationItem>
            <a href="#kalendar">Kalendář</a>
          </NavigationItem>*/}
          <NavigationItem>
            <a href="#vybaveni-vozu">Vybavení vozu</a>
          </NavigationItem>
          <NavigationItem>
            <a href="#podminky">Podmínky</a>
          </NavigationItem>
          {/*          <NavigationItem>
            <a href="#vice-k-pronajmu">Více k pronájmu</a>
          </NavigationItem>*/}
          <NavigationItem>
            <a href="#kontakty">Kontakty</a>
          </NavigationItem>
        </NavigationList>
      </Nav>
      <BurgerComponent open={open} setOpen={setOpen} />
    </div>
  );
};

const NavigationItem = styled.li`
  font-size: 1.2rem;
  font-weight: bold;
  list-style: none;
  text-transform: uppercase;

  @media (max-width: 1100px) {
    width: 100%;
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`;
const NavigationList = styled.ol`
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
  }

  li:not(:first-child) {
    margin-left: 1.25rem;
    @media (max-width: 1100px) {
      margin-left: 0;
    }
  }
  a {
    color: #575e68;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  @media (max-width: 1100px) {
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(120%)')};
    padding: 3rem 1rem;
    position: absolute;
    right: 20px;
    transition: transform 0.3s ease-in-out;
    top: 85px;
    background-color: rgb(3, 131, 163);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 250px;
    text-align: center;
    border-radius: 20px;
    a {
      color: white;
    }

    ::after {
      content: ' ';
      position: absolute;
      top: -10px;
      right: 38px;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent rgb(3, 131, 163) transparent;
    }
  }
`;

export default NavigationComponent;
