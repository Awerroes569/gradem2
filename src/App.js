import React from 'react';
import Container from './components/Container/Container';
import NavBarBoot from './components/NavBar/NavBarBoot';
import FooterShort from './sections/FooterShort/FooterShort';
import Home from './sections/Home/Home';
import HomeSmall from './sections/HomeSmall/HomeSmall';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main style={{ background: 'black',  display: 'flex', flexDirection: 'column' }}>
      <NavBarBoot />
      <Container style={{ flex: '1 0 auto' }}>
        {/* Spacer to account for the navbar height */}
        <div style={{ height: `80px` }}></div>
        <Routes>
          <Route path="/" element={<HomeSmall />} />
        </Routes>
      </Container>
      <FooterShort style={{ flexShrink: 0 }} />
    </main>
  );
};

export default App;
