import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import ContainerComponent from './Container';

interface ComponentProps {}

const ContactComponent: React.FC<ComponentProps> = () => {
  return (
    <Contact>
      <ContainerComponent>
        <ContactWrapper>
          <ContactFlexWrapper>
            <div className="contact-info">
              <ContactInfoParagraph>INDIVIDUAL STARTUP s.r.o.</ContactInfoParagraph>
              <ContactInfoParagraph>Rybná 716/24, Staré Město</ContactInfoParagraph>
              <ContactInfoParagraph>110 00 Praha 1</ContactInfoParagraph>
              <ContactInfoParagraph>Česká republika</ContactInfoParagraph>
              <ContactInfoParagraph>
                Tel.: <ContactLink href="tel:+420603609901">+420 725 367 556</ContactLink>
              </ContactInfoParagraph>
              <ContactInfoParagraph>
                Email: <ContactLink href="mailto:info@officeontheroad.cz">info@officeontheroad.cz</ContactLink>
              </ContactInfoParagraph>
              <ContactInfoParagraph>IČ: 08 94 96 71</ContactInfoParagraph>
            </div>

            <ContactlinksUnorderedList>
              <ContactUnorderedListItem>
                <ContactLink href="#fotogalerie">Fotogalerie</ContactLink>
              </ContactUnorderedListItem>
              <ContactUnorderedListItem>
                <ContactLink href="#pujcovne">Půjčovné</ContactLink>
              </ContactUnorderedListItem>
              <ContactUnorderedListItem>
                <ContactLink href="#kalendar">Kalendář</ContactLink>
              </ContactUnorderedListItem>
              <ContactUnorderedListItem>
                <ContactLink href="#vybaveni-vozu">Vybavení vozu</ContactLink>
              </ContactUnorderedListItem>
              <ContactUnorderedListItem>
                <ContactLink href="#podminky">Podmínky</ContactLink>
              </ContactUnorderedListItem>
              <ContactUnorderedListItem>
                <ContactLink href="#kontakty">Kontakty</ContactLink>
              </ContactUnorderedListItem>
            </ContactlinksUnorderedList>

            <ContactSocialUnorderedList>
              <ContactSocialListItem>
                <ContactLink href="https://www.facebook.com/officeontheroadcz">
                  <Icon src="/images/svg/facebook.svg" />
                </ContactLink>
              </ContactSocialListItem>
              <ContactSocialListItem>
                <ContactLink href="https://www.instagram.com/office_on_the_road_cz/">
                  <Icon src="/images/svg/instagram.svg" />
                </ContactLink>
              </ContactSocialListItem>
            </ContactSocialUnorderedList>
          </ContactFlexWrapper>

          <ContactUnorderedListAdditionalInformation>
            <ContactUnorderedListAdditionalInformationItem>
              <ContactLink href="">GDPR</ContactLink>
            </ContactUnorderedListAdditionalInformationItem>
            <ContactUnorderedListAdditionalInformationItem>
              <ContactLink href="">Ochrana osobních údajů</ContactLink>
            </ContactUnorderedListAdditionalInformationItem>
            <ContactUnorderedListAdditionalInformationItem>
              <ContactLink href="">Obchodní podmínky</ContactLink>
            </ContactUnorderedListAdditionalInformationItem>
          </ContactUnorderedListAdditionalInformation>
        </ContactWrapper>
      </ContainerComponent>
    </Contact>
  );
};

const ContactWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 2.8125rem 0.625rem 3.125rem 0.625rem;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContactFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;

  @media only screen and (max-width: 1024px) {
    align-items: center;
    width: 90%;
  }
`;

const ContactInfoParagraph = styled.p``;

const ContactLink = styled.a`
  color: rgb(255, 255, 255);

  :hover {
    text-decoration: none;
  }
`;

const ContactSocialUnorderedList = styled.ul`
  align-items: center;
  display: flex;
  align-items: start;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    flex-direction: column;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: center;
    margin-bottom: 0;
  }
`;

const ContactUnorderedListAdditionalInformation = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 1024px) {
    padding-left: 4.375rem;
    padding-right: 4.375rem;
    margin-bottom: 0;
    display: block;
  }
`;

const ContactlinksUnorderedList = styled.ul`
  margin-bottom: 40px;
  display: none;

  @media (min-width: 1024px) {
    padding-left: 4.375rem;
    padding-right: 4.375rem;
    margin-bottom: 0;
    display: block;
  }
`;

const ContactUnorderedListItem = styled.li`
  font-weight: 600;
  list-style: none;
`;

const ContactUnorderedListAdditionalInformationItem = styled.li`
  font-weight: 600;
  list-style: none;
`;

const ContactSocialListItem = styled.li`
  height: 40px;
  list-style: none;
  width: 40px;
  margin-left:20px;

  @media (min-width: 1024px) { 
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const Contact = styled.div`
  background: rgb(3, 131, 163);
  color: rgb(255, 255, 255);
`;

const Icon = styled.img``;

export default ContactComponent;
