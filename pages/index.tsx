import styled from 'styled-components';
import BannerComponent from '../components/front/Banner';
import GalleryComponent from '../components/front/Gallery';
import RentalComponent from '../components/front/Rental';
import EquipmentComponent from '../components/front/Equipment';
import ConditionComponent from '../components/front/Condition';
import ContactComponent from '../components/front/Contact';
import HeroComponent from 'components/front/Hero';
import AboutComponent from 'components/front/AboutComponent';
import ContainerComponent from 'components/front/Container';

export default function Home() {
  return (
    <Homepage>
      <BannerComponent />
      <Main>
        <HeroComponent backgroundImage="url('/images/data/1_1.webp')" />
        <AboutComponent />
        <ContainerComponent>
          <Hr />
        </ContainerComponent>
        <GalleryComponent />
        <ContainerComponent>
          <Hr />
        </ContainerComponent>
        {/* <RentalComponent />*/}
        <EquipmentComponent />
        <ConditionComponent />
        <ContactComponent />
      </Main>
    </Homepage>
  );
}

const Hr = styled.hr`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background: #e4e4e4;
  height: 1px;
`;
const Main = styled.main`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.875rem;
`;
const Homepage = styled.div``;
