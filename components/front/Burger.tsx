import React from 'react';
import styled from 'styled-components';

interface ComponentProps {
  open: boolean;
  setOpen: Function;
}

const BurgerComponent: React.FC<ComponentProps> = ({ open, setOpen }) => {
  return (
    <Burger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Burger>
  );
};

const Burger = styled.button`
  display: none;

  @media (max-width: 1100px) {
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.31rem;
      background-color: ${({ open }) => (open ? 'rgb(3, 131, 163)' : 'black')};
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? 'rotate(90deg)' : 'rotate(0)')};
      }

      :nth-child(2) {
        transform: ${({ open }) => (open ? 'translate(-12px, -8.5px) rotate(90deg)' : 'translateX(0)')};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? 'translate(12px, -16.5px)rotate(90deg)' : 'rotate(0)')};
      }
    }
  }
`;

export default BurgerComponent;
