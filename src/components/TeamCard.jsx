import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';


export default function TeamCard(props) {
    return (
        <Card className="teamCard overflow" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imgsrc} />
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                    {props.descripcion}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Boleta: {props.boleta}</ListGroupItem>
                <ListGroupItem>Telefono: {props.telefono}</ListGroupItem>
            </ListGroup>
        </Card>
    )
}
