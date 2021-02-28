import React from 'react';
import  { Navbar, Nav } from 'react-bootstrap';
import './Header.scss'

function Header() {
  return (
    <Navbar>
      <Navbar.Brand href="/">Moviedb-React</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Top10</Nav.Link>
          <Nav.Link href="#link"></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
