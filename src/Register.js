import React from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Register() {
    return (
        <Container>
            <Title
                title="Registro"
                desc="Para registrarte, necesitas el código
                de producto (el cual quedará vinculado permanentemente
                a tu cuenta)."
            />
            <Form>
                <Card className="overflow" style={{ width: '25rem', margin: 'auto auto auto auto' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Form.Group controlId="formRegister">
                            <Form.Row>
                                <Col>
                                    <Form.Control type="text" placeholder="Nombre(s)" />
                                </Col>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Col>
                                    <Form.Control type="text" placeholder="Apellido Paterno" />
                                </Col>
                                <Col>
                                    <Form.Control type="text" placeholder="Apellido Materno" />
                                </Col>
                            </Form.Row>
                            <br />
                            <hr />
                            <br />
                            <Row>
                                <Col>
                                    <Form.Control type="email" placeholder="Email" />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <Form.Control type="password" placeholder="Contraseña" />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <Form.Control type="password" placeholder="Confirmar contraseña" />
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <Form.Control size="sm" type="text" placeholder="Código de alarma" />
                                </Col>
                                <Col>
                                    <Button variant="primary" type="submit" >
                                        Registrar
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Card.Body>
                </Card>
            </Form>
            <br />
            <br />
            <br />
        </Container >
    )
}
