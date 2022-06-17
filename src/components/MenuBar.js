//import React from 'react';
import  Navbar  from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import  Nav  from 'react-bootstrap/Nav';


function MenuBar(){
    return(
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
     </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default MenuBar