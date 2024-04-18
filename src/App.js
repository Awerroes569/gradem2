import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import { Routes, Route } from 'react-router-dom';
import NoMatch from './sections/NoMatch/NoMatch';
import Favorite from './sections/Favorite/Favorite';
import List from './components/List/List';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
 </main>
  );
};

export default App;