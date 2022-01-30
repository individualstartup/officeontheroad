import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';

interface ComponentProps {}

const EquipmentListBoxComponent: React.FC<ComponentProps> = () => {
  return (
    <ContainerComponent>
      <EquipmentWrapper>
        <EquipmentUnorderedList>
          <EquipmentListItem>Držák na kola</EquipmentListItem>
          <EquipmentListItem>Klimatizace motorové části</EquipmentListItem>
          <EquipmentListItem>Nezávislé topení</EquipmentListItem>
          <EquipmentListItem>Dřez</EquipmentListItem>
          <EquipmentListItem>Lednice s mražákem</EquipmentListItem>
          <EquipmentListItem>Kempingový nábytek</EquipmentListItem>
          <EquipmentListItem>Hadice na vodu</EquipmentListItem>
          <EquipmentListItem>Prodlužovací kabel</EquipmentListItem>
          <EquipmentListItem>Toalení papír</EquipmentListItem>
          <EquipmentListItem>Markýza</EquipmentListItem>
          <EquipmentListItem>Parkovací kamera</EquipmentListItem>
          <EquipmentListItem>Solární panely</EquipmentListItem>
          <EquipmentListItem>Vařič</EquipmentListItem>
          <EquipmentListItem>Nádobá a příbory</EquipmentListItem>
          <EquipmentListItem>Venkovní osvětlení</EquipmentListItem>
          <EquipmentListItem>Chemie do WC</EquipmentListItem>
          <EquipmentListItem>Vyrovnávací klíny</EquipmentListItem>
        </EquipmentUnorderedList>
      </EquipmentWrapper>
      <EquipmentFlexWrapper>
        <EquipmentLink href="">Zobrazit méně</EquipmentLink>
      </EquipmentFlexWrapper>
    </ContainerComponent>
  );
};

const EquipmentWrapper = styled.div`
  border: 1px solid rgb(228, 228, 228);
  border-radius: 18px;
  box-sizing: border-box;
  clear: both;
  color: rgb(51, 51, 51);
  padding: 2.8125rem 3.125rem 3.375rem 3.125rem;
  width: 100%;
`;

const EquipmentUnorderedList = styled.ul`
  -webkit-column-count: 4;
  column-count: 4;
  -webkit-column-gap: 1.25rem;
  column-gap: 1.25rem;
  margin-bottom: 0;

  @media only screen and (max-width: 1000px) {
    -webkit-column-count: 3;
    column-count: 3;
  }

  @media only screen and (max-width: 800px) {
    -webkit-column-count: 2;
    column-count: 2;
  }

  @media only screen and (max-width: 600px) {
    -webkit-column-count: 1;
    column-count: 1;
  }
`;

const EquipmentListItem = styled.li`
  list-style: none;
  padding-left: 30px;
  position: relative;

  ::before {
    border: 2px solid rgb(3, 131, 163);
    border-radius: 50%;
    content: '';
    height: 6px;
    left: 0;
    position: absolute;
    top: 10px;
    width: 6px;
  }
`;

const EquipmentFlexWrapper = styled.p`
  display: flex;
  font-weight: 600;
  justify-content: center;
  margin-bottom: 6.1875rem;
  margin-top: 3.125rem;
  text-transform: uppercase;
  width: 100%;
`;

const EquipmentLink = styled.a`
   {
    border: 1px solid rgb(228, 228, 228);
    border-radius: 10px;
    color: rgb(228, 228, 228);
    display: block;
    padding: 0.1875rem 1.25rem 0.3125rem 1.25rem;
    text-decoration: none;
  }
`;

export default EquipmentListBoxComponent;
