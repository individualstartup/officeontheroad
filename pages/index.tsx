import styled from 'styled-components';
import BannerComponent from '../components/front/Banner';
import AboutComponent from '../components/front/AboutComponent';
import GalleryComponent from '../components/front/Gallery';
import RentalComponent from '../components/front/Rental';
import CallendarComponent from '../components/front/Callendar';
import Equipment from '../components/front/Equipment';
import EquipmentComponent from '../components/front/Equipment';
import ConditionComponent from '../components/front/Condition';
import ContactComponent from '../components/front/Contact';
import CalendarPrime from '../components/front/CalendarPrime';

export default function Home() {
  return (
    <Homepage>
      <BannerComponent />
      <Main>
        <AboutComponent />
        <Hr />
        <GalleryComponent />
        <RentalComponent />
        <CalendarPrime />
        <Hr />
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
  width: 74.625rem;
  background: rgb(228, 228, 228);
  height: 1px;
`;
const Main = styled.main`
  background-image: url('/images/data/1_1.png');
  display: block;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.875rem;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;
const Homepage = styled.div``;
