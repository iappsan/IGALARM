import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import Link from 'react-router-dom/Link';

function Login() {
    return (
        <Container>
            <Title
                title="Inicia sesión"
                desc="Desde esta pantalla puedes iniciar sesión para poder
                administrar todas tu o tus alarmas. Ingresa tu correo electrónico
                y tu contraseña."
            />
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
            <br />
            <br />
            <br />
            Si aun no tienes una cuenta, da clic <Link to="/Register"> AQUI </Link>
        </Container>
    )
}

export default Login;