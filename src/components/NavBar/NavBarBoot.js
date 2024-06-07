import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import settings from '../../settings/settings';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const NavBarBoot = () => {
  const imagePath = settings.images.logo;

  return (
    <Navbar expand="lg" style={{ backgroundColor: "black" }} className="d-flex">
      
      
      {/* Brand component centered */}
      <Navbar.Brand href="#home" className="mx-auto order-lg-1">
        <FavoriteButton path={imagePath} />
      </Navbar.Brand>

      {/* Toggle button for mobile view */}
      <Navbar.Toggle
        
        aria-controls="basic-navbar-nav"
      >
        <i  style={{ color: "white", fontSize: "32px", marginRight: "12px" }} class="fa-solid fa-bars"></i>
      </Navbar.Toggle>
      {/* Collapsible content */}
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-end order-lg-3"
        style={{ color: "white" }}
      >
        {/* Align links to the right */}
        <Nav className="text-center">
          <Nav.Link
            href="#home"
            style={{ color: "white" }}
            className="px-3"
          >
            OFERTA
          </Nav.Link>

          <Nav.Link
            href="#home"
            style={{ color: "white" }}
            className="px-3"
          >
            AKTUALNOŚCI
          </Nav.Link>

          <Nav.Link
            href="#home"
            style={{ color: "white" }}
            className="px-3"
          >
            REALIZACJE
          </Nav.Link>

          <Nav.Link
            href="#home"
            style={{ color: "white" }}
            className="px-3"
          >
            REFERENCJE
          </Nav.Link>

          <Nav.Link
            href="#home"
            style={{ color: "white" }}
            className="px-3"
          >
            TECHNOLOGIA
          </Nav.Link>

          <Nav.Link
            href="#home"
            style={{ color: "white" }}
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
