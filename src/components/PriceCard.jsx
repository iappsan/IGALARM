import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

export default function PriceCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush" style={{ textAlign: 'center' }}>
            <ListGroupItem> {props.puerta}</ListGroupItem>
            <ListGroupItem> {props.ventana}</ListGroupItem>
            <ListGroupItem> {props.bocina}</ListGroupItem>
            <ListGroupItem> {props.teclado}</ListGroupItem>
            <ListGroupItem> {props.extras}</ListGroupItem>
            <ListGroupItem> {props.web}</ListGroupItem>
            <ListGroupItem> {props.precio}<br /> Pago único</ListGroupItem>
            <ListGroupItem> {props.precios}<br /> Pago inicial 
            <br /> <h2>+ $250 </h2>  Mensuales </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button variant="dark">Comprar</Button>
            </Card.Body>
        </Card>
    )
}
