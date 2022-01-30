import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';
import EquipmentListBoxComponent from './EquipmentListBox';

interface ComponentProps {}

const EquipmentComponent: React.FC<ComponentProps> = () => {
  return (
    <ContainerComponent>
      <Equipment>
        <EquipmentWrapper>
          <EquipmentTitle>
            <b>Vybavení</b> vozu
          </EquipmentTitle>
          <EquipmentParagraph>
            <EquipmentIcon src="/images/svg/places-ride.svg" />
            <EquipmentSpan>
              Na jízdu
              <br />
              <EquipmentBold>3+1 míst</EquipmentBold>
            </EquipmentSpan>
          </EquipmentParagraph>
          <EquipmentParagraph>
            <EquipmentIcon src="/images/svg/places-sleep.svg" />
            <EquipmentSpan>
              Na spaní
              <EquipmentBold>3+1 míst</EquipmentBold>
            </EquipmentSpan>
          </EquipmentParagraph>
          <EquipmentParagraph>
            <EquipmentIcon src="/images/svg/sprcha.svg" />
            <EquipmentSpan>
              Sprcha
              <br />
              <EquipmentBold>Vnitřní</EquipmentBold>
            </EquipmentSpan>
          </EquipmentParagraph>
          <EquipmentParagraph>
            <EquipmentIcon src="/images/svg/toilet.svg" />
            <EquipmentSpan>
              Toaleta
              <br />
              <EquipmentBold>Chemická</EquipmentBold>
            </EquipmentSpan>
          </EquipmentParagraph>
          <EquipmentParagraph>
            <EquipmentIcon src="/images/svg/prevodovka.svg" />
            <EquipmentSpan>
              Převodovka
              <br />
              <EquipmentBold>Manuální</EquipmentBold>
            </EquipmentSpan>
          </EquipmentParagraph>
          <EquipmentParagraph>
            <EquipmentIcon src="/images/svg/fuel.svg" />
            <EquipmentSpan>
              Palivo
              <br />
              <EquipmentBold>Nafta</EquipmentBold>
            </EquipmentSpan>
          </EquipmentParagraph>
          <EquipmentParagraph>
            <EquipmentIcon src="/images/svg/nahon.svg" />
            <EquipmentSpan>
              Náhon
              <br />
              <EquipmentBold>Přední</EquipmentBold>
            </EquipmentSpan>
          </EquipmentParagraph>
          <EquipmentParagraph>
            <EquipmentIcon src="/images/svg/dimension.svg" />
            <EquipmentSpan>
              D x Š x V (m)
              <br />
              <EquipmentBold>7.36 x 2.3 x 3.07</EquipmentBold>
            </EquipmentSpan>
          </EquipmentParagraph>
          <EquipmentParagraph>
            <EquipmentIcon src="/images/svg/winter.svg" />
            <EquipmentSpan>
              Zimní provoz
              <br />
              <EquipmentBold>Pneu, řetězy, ...</EquipmentBold>
            </EquipmentSpan>
          </EquipmentParagraph>
        </EquipmentWrapper>
        <EquipmentListBoxComponent />
      </Equipment>
    </ContainerComponent>
  );
};

const EquipmentTitle = styled.h2`
  display: block;
  font-family: 700;
  width: 100%;
`;

const EquipmentParagraph = styled.p`
  display: flex;
  font-size: 1rem;
  line-height: 1.5625rem;
  margin-bottom: 2.5rem;
  margin-right: 3.125rem;
`;

const EquipmentIcon = styled.img`
  align-self: center;
  margin-right: 20px;
`;

const EquipmentSpan = styled.span`
  display: flex;
  flex-direction: column;
  min-width: 80px;
  width: 100%;
`;

const EquipmentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto 52px auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  width: 100%;
`;

const EquipmentBold = styled.b`
  color: rgb(51, 51, 51);
  font-size: 1.25rem;
  font-weight: 700;
`;

const Equipment = styled.div`
  margin-top: 100px;
`;

export default EquipmentComponent;
