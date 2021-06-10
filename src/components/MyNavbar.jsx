import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

export default function MyNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand href="#home">
                    <Link className="MainNavLink" to="/">IGALARM</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link className="NavLink" to="/Login">Iniciar sesión</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="NavLink" to="/FAQs">FAQs</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="NavLink" to="/Team">Nuestro equipo</Link>
                        </Nav.Link>
                        <NavDropdown title="Nuestro producto" id="basic-nav-dropdown">
                            <Nav.Link>
                                <Link className="NavLinkDark" to="/Alarm">Nuestra alarma</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className="NavLinkDark" to="/Prices">Precios</Link>
                            </Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link>
                                <Link className="NavLinkDark" to="/Contact">Contacto</Link>
                            </Nav.Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}