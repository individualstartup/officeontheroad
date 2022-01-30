import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';

interface ComponentProps {}

const AboutComponent: React.FC<ComponentProps> = () => {
  return (
    <About>
      <ContainerComponent>
        <AboutTitle>
          <b>NOTIN</b> Malaga CF
        </AboutTitle>
        <AboutParagraph>
          Obytný vůz NOTIN Malaga CF z řady polo-integrovaných automobilů Progress se řadí mezi luxusní vůz ve své třídě
          jak zpracováním tak vybavením. Mezi jeho přednosti patří nástavba vyrobená patentovanou technologií NCIS kde
          obkladové panely neobsahují dřevěnou konstrukci. Veškerá konstrukce nábytku je ručně vyráběna přímo ve fabrice
          NOTIN kde je kladen důraz na francouzskou eleganci a detail.
        </AboutParagraph>
        <AboutParagraph>
          Moderně vybavená koupelna s odděleným XXL sprchovým koutem a pohodlná ložnice se zašupovacími dveřmi a
          královským lůžkem zaručí dostatek soukromí. Vůz je vybaven dostatečnou tepelnou izolací pro provoz i v zimních
          podmínkách. Standardem je již vyhřívání odpadní nádrže. Kuchyň je vybavena ledničkou Dometic 153L a
          dvou-plotýnkovím sporákem. Multifunkční polohovací stolek a lavice s uspořádáním Face to Face ze 100% kůže
          zajistí dostatek pohodlí pro kempování.
        </AboutParagraph>
      </ContainerComponent>
    </About>
  );
};

const AboutTitle = styled.h2`
  color: rgb(51, 51, 51);
  font-family: Roboto, sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  margin-bottom: 1.125rem;
`;

const AboutParagraph = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

const About = styled.div`
  color: #888888;

  @media (min-width: 1024px) {
    margin-top: -20px;
  }
`;

export default AboutComponent;
