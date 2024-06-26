import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import settings from '../../settings/settings';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const NavBarBoot = () => {
  const imagePath = settings.images.logo;

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="d-flex">
      {/* Toggle button for mobile view */}
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <i className="fa-solid fa-bars" style={{ color: "white", fontSize: "32px", marginRight: "12px" }}></i>
      </Navbar.Toggle>

      {/* Brand component centered */}
      <Navbar.Brand href="#home" className="mx-auto order-lg-1">
        <FavoriteButton path={imagePath} />
      </Navbar.Brand>

      {/* Collapsible content */}
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end order-lg-3">
        <Nav className="text-center">
          <Nav.Link href="#home" className="px-3 text-white">OFERTA</Nav.Link>
          <Nav.Link href="#home" className="px-3 text-white">AKTUALNOŚCI</Nav.Link>
          <Nav.Link href="#home" className="px-3 text-white">REALIZACJE</Nav.Link>
          <Nav.Link href="#home" className="px-3 text-white">REFERENCJE</Nav.Link>
          <Nav.Link href="#home" className="px-3 text-white">TECHNOLOGIA</Nav.Link>
          <Nav.Link href="#home" className="px-3 text-white">KONTAKT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarBoot;
