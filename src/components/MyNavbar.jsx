import React from 'react'

import { Link } from 'react-router-dom';

export default function MyNavbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">IGALARM</Link>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Login">Iniciar sesión</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/FAQs">FAQs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Team">Nuestro equipo</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Nuestro producto
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/Alarm">Nuestra alarma</Link></li>
                                    <li><Link className="dropdown-item" to="/Prices">Precios</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/Contact">Contacto</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}