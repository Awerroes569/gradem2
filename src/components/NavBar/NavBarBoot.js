import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import settings from '../../settings/settings';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavBarBoot = () => {
  const imagePath = settings.images.logo;
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
    setExpanded(false);
  };
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} fixed='top' expand="lg"  style={{ backgroundColor: "black" }} className="d-flex py-3">
      
      
      {/* Brand component centered */}
      <Navbar.Brand
        className="mx-auto order-lg-1"
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
        style={{ color: "white", fontSize: "2.5vh"}}
      >
        {/* Align links to the right */}
        <Nav className="text-center">
          <Nav.Link
            style={{ color: "white", padding:"4vh 0"}}
            className="px-3"
            onClick={() => {handleClick('/offer');}}
          >
            OFERTA
          </Nav.Link>

          <Nav.Link
            
            style={{ color: "white", padding:"4vh 0" }}
            className="px-3"
            onClick={() => {handleClick('/news');}}
          >
            AKTUALNOŚCI
          </Nav.Link>

          <Nav.Link
            href="#home"
            style={{ color: "white", padding:"4vh 0" }}
            className="px-3"
          >
            REALIZACJE
          </Nav.Link>

          <Nav.Link
            href="#home"
            style={{ color: "white", padding:"4vh 0" }}
            className="px-3"
          >
            REFERENCJE
          </Nav.Link>

          <Nav.Link
            href="#home"
            style={{ color: "white", padding:"4vh 0" }}
            className="px-3"
          >
            TECHNOLOGIA
          </Nav.Link>

          <Nav.Link
            href="#home"
            style={{ color: "white", padding:"4vh 0" }}
            className="px-3"
          >
            KONTAKT
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarBoot;
