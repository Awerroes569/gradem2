import React from 'react';
import Container from './components/Container/Container';
import NavBarBoot from './components/NavBar/NavBarBoot';
import FooterShort from './sections/FooterShort/FooterShort';
import HomeSmall from './sections/HomeSmall/HomeSmall';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Footer from './sections/Footer/Footer';
import FooterAccord from './sections/FooterAccord/FooterAccord';
import {useState, useCallback} from 'react';
import Offer from './sections/Offer/Offer';
import News from './sections/News/News';
import Repairs from './sections/Repairs/Repairs';
import References from './sections/References/References';
import Technologies from './sections/Technologies/Technologies';
import Interline from './components/Interline/Interline';
import { useEffect } from 'react';
import Mobile from './mains/Mobile/Mobile';
import Desktop from './mains/Desktop/Desktop';

const App = () => {



  
    const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main style={{
      background: 'black',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      maxWidth: '1400px',
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box',

    }}>
      {width<576? <Mobile /> :<Desktop />}
      
    </main>
  );
};

export default App;
