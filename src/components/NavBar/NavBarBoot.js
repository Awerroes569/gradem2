import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import settings from '../../settings/settings';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Interline from '../Interline/Interline';

const NavBarBoot = () => {
  const imagePath = settings.images.logo;
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
    setExpanded(false);
  };
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '0 20px' }}>
    <Navbar expanded={expanded} fixed='top' expand="lg"  style={{ backgroundColor: "black", maxWidth:'1400px' }} className="d-flex mx-auto py-3">
      
      
      {/* Brand component centered */}
      <Navbar.Brand
        className="mx-auto mx-lg-4 order-lg-1"
        onClick={() => {handleClick('/');}}
      >
        <FavoriteButton path={imagePath}/>
      </Navbar.Brand>

      {/* Toggle button for mobile view */}
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        
        aria-controls="basic-navbar-nav"
      >
        <i  style={{ color: "white", fontSize: "5vh", marginRight: "12px" }} className="fa-solid fa-bars"></i>
      </Navbar.Toggle>
      {/* Collapsible content */}
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end order-lg-3"
        style={{ color: "white", fontSize: "2vh"}}
      >
        {/* Align links to the right */}
        <Nav className="text-center">
          <Nav.Link
            style={{ color: "white", padding:"2vh 0"}}
            className="px-2"
            onClick={() => {handleClick('/offer');}}
          >
            OFERTA
          </Nav.Link>

          <Nav.Link
            
            style={{ color: "white", padding:"2vh 0" }}
            className="px-2"
            onClick={() => {handleClick('/news');}}
          >
            AKTUALNOŚCI
          </Nav.Link>


          { /* href="#home" */ }
          <Nav.Link
            
            style={{ color: "white", padding:"2vh 0" }}
            className="px-2"
            onClick={() => {handleClick('/repairs');}}
          >
            REALIZACJE
          </Nav.Link>

          <Nav.Link
            
            style={{ color: "white", padding:"2vh 0" }}
            className="px-2"
            onClick={() => {handleClick('/references');}}

          >
            REFERENCJE
          </Nav.Link>

          <Nav.Link
            style={{ color: "white", padding:"2vh 0" }}
            className="px-2"
            onClick={() => {handleClick('/technologies');}}
          >
            TECHNOLOGIA
          </Nav.Link>

          <Nav.Link
            href="#home"
            style={{ color: "white", padding:"2vh 0" }}
            className="px-2"
          >
            KONTAKT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    
  );
};

export default NavBarBoot;
