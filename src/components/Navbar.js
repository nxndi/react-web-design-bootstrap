import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"

const navbar = () => {
  return (
    <div>
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold fs-4'>Ngoding Santai</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#services" className="mx-2">Services</Nav.Link>
            <Nav.Link href="#gallery" className="mx-2">Gallery</Nav.Link>
            <Nav.Link href="#faq" className="mx-2">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default navbar