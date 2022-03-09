import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';

interface ComponentProps {}

const ConditionComponent: React.FC<ComponentProps> = () => {
  return (
    <ContainerComponent>
      <Condition className="conditions" id="podminky">
        <ConditionTitle>
          <b>Podmínky</b>
        </ConditionTitle>
        <ConditionParagraph>
          <Icon src="/images/svg/kauce.svg" />
          <b>Vratná kauce</b> <ConditionIconText>30.000,- Kč</ConditionIconText>
        </ConditionParagraph>
        <ConditionParagraph>
          <Icon src="/images/svg/kauce.svg" />
          <b>Zaváděcí cena na jeden den</b> <ConditionIconText>2 490,- Kč</ConditionIconText>
        </ConditionParagraph>
        <ConditionParagraph>
          <Icon src="/images/svg/kauce.svg" />
          <b>Servisní poplatek (na jedno půjčení)</b> <ConditionIconText>1 500,- Kč</ConditionIconText>
        </ConditionParagraph>
        <ConditionParagraph>
          <Icon src="/images/svg/noci.svg" />
          <b>Minimální počet nocí pronájmu</b> <ConditionIconText>3 noci</ConditionIconText>
        </ConditionParagraph>
        <ConditionParagraph>
          <Icon src="/images/svg/kmlimit.svg" />
          <b>Limit kilometrů za den</b> <ConditionIconText>300 km</ConditionIconText>
        </ConditionParagraph>
      </Condition>
    </ContainerComponent>
  );
};

const ConditionTitle = styled.h2`
  h2 {
    margin-bottom: 2.125rem;
  }
`;

const ConditionParagraph = styled.p`
  align-items: center;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  padding: 1.3125rem 1.25rem 1.1875rem 1.25rem;

  :nth-of-type(odd) {
    background: rgb(255, 255, 255);
    border-radius: 5px;
  }
`;

const ConditionIconText = styled.span`
  margin-left: auto;
  padding-left: 1.25rem;
  text-align: right;
`;

const Condition = styled.div`
  background: rgb(239, 239, 239);
  border-radius: 18px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: 5.75rem 3.125rem 6.25rem 3.125rem;
  width: 100%;
  margin-top: 3rem;
`;
const Icon = styled.img`
  margin-right: 10px;
`;

export default ConditionComponent;
