import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function BarNav() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/"> <Nav.Link href="#home">Home</Nav.Link></Link> 
          <Link to="/contact"> <Nav.Link href="#features">Contact</Nav.Link></Link> 
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default BarNav;