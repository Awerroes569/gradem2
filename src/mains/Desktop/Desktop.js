import React from 'react';
import Container from '../../components/Container/Container';
import NavBarBoot from '../../components/NavBar/NavBarBoot';
import FooterShort from '../../sections/FooterShort/FooterShort';
import HomeSmall from '../../sections/HomeSmall/HomeSmall';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../sections/Footer/Footer';
import {useState, useCallback} from 'react';
import Offer from '../../sections/Offer/Offer';
import News from '../../sections/News/News';
import Repairs from '../../sections/Repairs/Repairs';
import References from '../../sections/References/References';
import Technologies from '../../sections/Technologies/Technologies';
import Interline from '../../components/Interline/Interline';
import CarouselTopLarge from '../../components/CarouselTop/CarouselTopLarge';
import Info from '../../components/Info/Info';

const Desktop = () => {



  
   

  return (
    <>
      
      <NavBarBoot />
      <div style={{ height: `100px` }}></div>
      <Interline />

      <Container style={{ flex: '1 0 auto' }}>
        <CarouselTopLarge />

        <Interline />

        <Info />

        <Interline />


      </Container>

      
      
    </>
  );
};

export default Desktop;
