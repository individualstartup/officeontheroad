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
import Head from 'next/head';
import { Calendar } from 'primereact/calendar';
import CalendarPrime from '../components/front/CalendarPrime';
import CallendarComponent from '../components/front/Callendar';
import { useEffect } from 'react';
import NewGallery from '../components/front/NewGallery';

export default function Home() {
  useEffect(() => {
    window.addEventListener('hashchange', function () {
      window.scrollTo(window.scrollX, window.scrollY - 100);
    });
  }, []);
  return (
    <>
      <Head>
        <title>OfficeOnTheRoad.cz - Pronájem obytného vozu</title>
        <meta
          name="description"
          content="OfficeOnTheRoad.cz - Pronájem obytného vozu Praha. Obytňákem na lyže bežky nebo jen na výlety pěšky."
        />
        <meta property="og:title" content="OfficeOnTheRoad.cz - Pronájem obytného vozu" />
        <meta
          property="og:description"
          content="OfficeOnTheRoad.cz - Pronájem obytného vozu Praha. Obytňákem na lyže bežky nebo jen na výlety pěšky."
        />
      </Head>
      <Homepage>
        <BannerComponent />
        <Main>
          <AboutComponent />
          <ContainerComponent>
            <Hr />
          </ContainerComponent>
          {/* <GalleryComponent />*/}
          <NewGallery />
          <ContainerComponent>
            <Hr />
          </ContainerComponent>
          {/*<RentalComponent />*/}
          {/*          <CalendarPrime />*/}
          {/*<CallendarComponent />*/}
          <CalendarPrime />
          <EquipmentComponent />
          <ConditionComponent />
          <ContactComponent />
        </Main>
      </Homepage>
    </>
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
