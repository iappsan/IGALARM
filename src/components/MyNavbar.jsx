import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MyNavbar() {
    return (
        <>
            <Navbar fixed="bottom" bg="dark" variant="dark" expand="md">
                <Navbar.Brand href="#home">IGALARM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">FAQs</Nav.Link>
                        <Nav.Link href="#link">Nuestro equipo</Nav.Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Alarma</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Precios</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Contacto</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}