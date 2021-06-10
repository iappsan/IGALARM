import React from 'react'

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MyAccordion(props) {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={props.eKey} className="accordionLink">
                        {props.question}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={props.eKey}>
                    <Card.Body>{props.answer}</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
