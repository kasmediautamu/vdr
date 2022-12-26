import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.scss';

export default function Header(){
    return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <div className='app-logo'></div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login in</Nav.Link>
            <Nav.Link eventKey={2} href="/start">
              start
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>   
    )
}