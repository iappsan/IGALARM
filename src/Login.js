import React from 'react'

import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import Card from 'react-bootstrap/Card'

function Login() {
    return (
        <Container>
            <Title
                title="Inicia sesión"
                desc="Desde esta pantalla puedes iniciar sesión para poder
                administrar todas tu o tus alarmas. Ingresa tu correo electrónico
                y tu contraseña."
            />
            <Card className="overflow" style={{ width: '20rem', margin: 'auto auto' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Si aun no tienes una cuenta, da clic <Link className='link-primary' to="/Register"> AQUÍ </Link></small>
                </Card.Footer>
            </Card>
            <br />
            <br />
            <br />
        </Container>
    )
}

export default Login;