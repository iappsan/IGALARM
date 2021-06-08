import React, { useEffect } from 'react'

import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import { run as jsholder } from 'holderjs/holder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceCard from './components/PriceCard';

export default function Prices() {

    useEffect(() => {
        jsholder('image-class-name');
    });

    return (
        <Container>
            <Title
                title="Paquetes de alarma"
                desc="GABIIII PON EL TEXTO PLS"
            />
            <Row>
                <Col>
                    <PriceCard
                        title="test 1"
                        text="this is an example"
                    />
                </Col>
                <Col>
                    <PriceCard
                        title="test 2"
                        text="this is an example"
                    />
                </Col>
                <Col>
                    <PriceCard
                        title="test 3"
                        text="this is an example"
                    />
                </Col>
            </Row>
            <br />
            <br />
            <br />
        </Container>
    )
}
