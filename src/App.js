import Container from './components/Container/Container'
import NavBarBoot from './components/NavBar/NavBarBoot';
import Home from './sections/Home/Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBarBoot />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;