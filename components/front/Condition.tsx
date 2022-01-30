import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';

interface ComponentProps {}

const ConditionComponent: React.FC<ComponentProps> = () => {
  return (
    <ContainerComponent>
      <Condition className="conditions" id="podminky">
        <h2>
          <b>Podmínky</b>
        </h2>
        <p>
          <Icon src="/images/svg/kauce.svg" />
          <b>Vratná kauce</b> <span>30.000 Kč</span>
        </p>
        <p>
          <Icon src="/images/svg/noci.svg" />
          <b>Minimální počet nocí pronájmu</b> <span>3 noci</span>
        </p>
        <p>
          <Icon src="/images/svg/kmlimit.svg" />
          <b>Limit kilometrů za den</b> <span>300 km</span>
        </p>
      </Condition>
    </ContainerComponent>
  );
};
const Condition = styled.div`
  background: rgb(239, 239, 239);
  border-radius: 18px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  padding: 5.75rem 3.125rem 6.25rem 3.125rem;
  width: 100%;
  margin-bottom: 100px;

  h2 {
    margin-bottom: 2.125rem;
  }
  p {
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 0;
    padding: 1.3125rem 1.25rem 1.1875rem 1.25rem;
  }
  p:nth-of-type(odd) {
    background: rgb(255, 255, 255);
    border-radius: 5px;
  }
  img {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 10px;
  }
  span {
    margin-left: auto;
    margin-right: 0;
    padding-left: 1.25rem;
    text-align: right;
  }
`;
const Icon = styled.img``;

export default ConditionComponent;
