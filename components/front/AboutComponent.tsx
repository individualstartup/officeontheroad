import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

interface ComponentProps {}

const AboutComponent: React.FC<ComponentProps> = () => {
  return (
    <About>
      <Box>
        <BoxTitle>
          <span>Obytný vůz</span> <span>NOTIN</span> Malaga CF <span>s&nbsp;královským lůžkem</span>
        </BoxTitle>
        <More>
          <a href="#kalendar">Chci si pronajmout</a>
        </More>
      </Box>
      <h2>
        <b>NOTIN</b> Malaga CF
      </h2>
      <p>
        Obytný vůz NOTIN Malaga CF z řady polo-integrovaných automobilů Progress se řadí mezi luxusní vůz ve své třídě
        jak zpracováním tak vybavením. Mezi jeho přednosti patří nástavba vyrobená patentovanou technologií NCIS kde
        obkladové panely neobsahují dřevěnou konstrukci. Veškerá konstrukce nábytku je ručně vyráběna přímo ve fabrice
        NOTIN kde je kladen důraz na francouzskou eleganci a detail.
      </p>
      <p>
        Moderně vybavená koupelna s odděleným XXL sprchovým koutem a pohodlná ložnice se zašupovacími dveřmi a
        královským lůžkem zaručí dostatek soukromí. Vůz je vybaven dostatečnou tepelnou izolací pro provoz i v zimních
        podmínkách. Standardem je již vyhřívání odpadní nádrže. Kuchyň je vybavena ledničkou Dometic 153L a
        dvou-plotýnkovím sporákem. Multifunkční polohovací stolek a lavice s uspořádáním Face to Face ze 100% kůže
        zajistí dostatek pohodlí pro kempování.
      </p>
      {/*      <More>
        <a href="">Zobrazit více</a>
      </More>*/}
    </About>
  );
};

const More = styled.p`
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-weight: 900;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 1.25rem;
  text-transform: uppercase;

  a {
    background: rgb(3, 131, 163);
    box-shadow: 0 0 0 1px rgb(5, 162, 201) inset, 0 0 20px rgba(0, 0, 0, 0.35);
    border-radius: 8px;
    color: rgb(255, 255, 255);
    display: block;
    padding: 0.875rem 2.5rem 1rem 2.5rem;
    text-decoration: none;
  }
`;
const BoxTitle = styled.h1`
  color: rgb(255, 255, 255);
  line-height: 2.8125rem;

  span:nth-of-type(1) {
    display: inline-block;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 1;
  }
  span:nth-of-type(2) {
    display: inline-block;
    font-size: 6.25rem;
    font-weight: 900;
    line-height: 1;
  }
  span:nth-of-type(3) {
    display: inline-block;
    font-size: 1.875rem;
    font-weight: 400;
    line-height: 1;
  }
`;
const Box = styled.div`
  background: rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: 1px solid rgb(255, 255, 255);
  border-radius: 18px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.35);
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 90px;
  margin-top: 90px;
  padding: 2.6875rem 3.125rem 3.0625rem 3.125rem;
  width: 400px;
`;

const About = styled.div`
  padding-bottom: 6.25rem;
  padding-top: 6.25rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  width: 74.625rem;

  h2 {
    color: rgb(51, 51, 51);
    font-family: Roboto, sans-serif;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 1.125rem;
  }
`;

export default AboutComponent;
