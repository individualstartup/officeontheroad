import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

interface ComponentProps {}

const EquipmentComponent: React.FC<ComponentProps> = () => {
  return (
    <>
      <Equipment>
        <h2>
          <b>Vybavení</b> vozu
        </h2>
        <p>
          <Icon src="/images/svg/places-ride.svg" />
          <span>
            Na jízdu
            <br />
            <b>3+1 míst</b>
          </span>
        </p>
        <p>
          <Icon src="/images/svg/places-sleep.svg" />
          <span>
            Na spaní
            <br />
            <b>3+1 míst</b>
          </span>
        </p>
        <p>
          <Icon src="/images/svg/sprcha.svg" />
          <span>
            Sprcha
            <br />
            <b>Vnitřní</b>
          </span>
        </p>
        <p>
          <Icon src="/images/svg/toilet.svg" />
          <span>
            Toaleta
            <br />
            <b>Chemická</b>
          </span>
        </p>
        <p>
          <Icon src="/images/svg/prevodovka.svg" />
          <span>
            Převodovka
            <br />
            <b>Manuální</b>
          </span>
        </p>
        <p>
          <Icon src="/images/svg/fuel.svg" />
          <span>
            Palivo
            <br />
            <b>Nafta</b>
          </span>
        </p>
        <p>
          <Icon src="/images/svg/nahon.svg" />
          <span>
            Náhon
            <br />
            <b>Přední</b>
          </span>
        </p>
        <p>
          <Icon src="/images/svg/dimension.svg" />
          <span>
            D x Š x V (m)
            <br />
            <b>7.36 x 2.3 x 3.07</b>
          </span>
        </p>
        <p>
          <Icon src="/images/svg/winter.svg" />
          <span>
            Zimní provoz
            <br />
            <b>Nevím co</b>
          </span>
        </p>
        <div className="more">
          <ul>
            <li>Držák na kola</li>
            <li>Klimatizace motorové části</li>
            <li>Nezávislé topení</li>
            <li>Dřez</li>
            <li>Lednice s mražákem</li>
            <li>Kempingový nábytek</li>
            <li>Hadice na vodu</li>
            <li>Prodlužovací kabel</li>
            <li>Toalení papír</li>
            <li>Markýza</li>
            <li>Parkovací kamera</li>
            <li>Solární panely</li>
            <li>Vařič</li>
            <li>Nádobá a příbory</li>
            <li>Venkovní osvětlení</li>
            <li>Chemie do WC</li>
            <li>Vyrovnávací klíny</li>
          </ul>
        </div>
        <p className="more">
          <a href="">Zobrazit méně</a>
        </p>
      </Equipment>
    </>
  );
};

const Icon = styled.img``;
const Equipment = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  width: 74.625rem;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-top: 5.6875rem;

  @media only screen and (max-width: 1214px) {
    box-sizing: border-box;
    width: 100%;
  }

  h2 {
    width: 100%;
  }

  p:not([class]) {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 1rem;
    line-height: 1.5625rem;
    margin-bottom: 2.5rem;
    margin-right: 3.125rem;
  }
  p img {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    margin-right: 16px;
  }
  p span {
    display: block;
  }
  p b {
    color: rgb(51, 51, 51);
    font-size: 1.25rem;
    font-weight: 700;
  }
  div.more {
    border: 1px solid rgb(228, 228, 228);
    border-radius: 18px;
    box-sizing: border-box;
    clear: both;
    color: rgb(51, 51, 51);
    padding: 2.8125rem 3.125rem 3.375rem 3.125rem;
    width: 100%;
  }
  div.more ul {
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
  }
  div.more li {
    list-style: none;
    padding-left: 30px;
    position: relative;
  }

  div.more li::before {
    border: 2px solid rgb(3, 131, 163);
    border-radius: 50%;
    content: '';
    height: 6px;
    left: 0;
    position: absolute;
    top: 10px;
    width: 6px;
  }

  p.more {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-weight: 600;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 6.1875rem;
    margin-top: 3.125rem;
    text-transform: uppercase;
    width: 100%;
  }

  p.more a {
    border: 1px solid rgb(228, 228, 228);
    border-radius: 10px;
    color: rgb(228, 228, 228);
    display: block;
    padding: 0.1875rem 1.25rem 0.3125rem 1.25rem;
    text-decoration: none;
  }
`;

export default EquipmentComponent;
