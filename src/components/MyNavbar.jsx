import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavLink from 'react-router-dom/NavLink';

export default function MyNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand href="#home">
                    <NavLink className="NavLink" to="/">IGALARM</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <NavLink to="/Login">Iniciar sesión</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/FAQs">FAQs</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/Team">Nuestro equipo</NavLink>
                        </Nav.Link>
                        <NavDropdown title="Nuestro producto" id="basic-nav-dropdown">
                            <Nav.Link>
                                <NavLink to="/Alarm">Nuestra alarma</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/Prices">Precios</NavLink>
                            </Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link>
                                <NavLink to="/Contact">Contacto</NavLink>
                            </Nav.Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}