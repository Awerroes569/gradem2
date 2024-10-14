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

const App = () => {

  const [showFooter, setShowFooter] = useState(true);

  const handleFooter = useCallback(() => {
    setShowFooter(!showFooter);
  }, [showFooter]);

  return (
    <main style={{ background: 'black',  display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBarBoot />
      <div style={{ height: `100px` }}></div>

      <Container style={{ flex: '1 0 auto' }}>
        {/* Spacer to account for the navbar height */}
        <Routes>
          <Route path="/" element={<HomeSmall />} />
          <Route path="/footer" element={<Footer cb={handleFooter}/>}  />
          <Route path="/offer" element={<Offer />}  />
          <Route path="/news" element={<News />}  />
          <Route path="/repairs" element={<Repairs />}  />
          <Route path="/references" element={<References />}  />
          <Route path="/technologies" element={<Technologies />}  />

          

        </Routes>
      </Container>
      {showFooter&&<FooterShort style={{ flexShrink: 0 }} />}
      
    </main>
  );
};

export default App;
