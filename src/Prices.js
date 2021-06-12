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
                desc="Aquí podrás encontrar y escoger el paquete que mas se adapte a tus necesidades "
            />
            <Row>
               
                <Col>
                    <PriceCard
                        title = " Paquete Basico"
                        puerta = "1 Sensor para puerta"
                        ventana = "2 Sensores para ventanas"
                        bocina = "1 Altavoz"
                        teclado = "1 Teclado"
                        precio = "$ 1900" 
                    />
                </Col>
                <Col>
                    <PriceCard
                        title=" Paquete Pro"
                        puerta = "2 Sensores para puerta"
                        ventana = "4 Sensores para ventanas"
                        bocina = "1 Altavoz"
                        teclado = "1 Teclado"
                        web = "Control desde web"
                        extras = "Alerta a servicios de emergencia"
                        precios = "$ 3900" 
                    />
                </Col>
                <Col>
                    <PriceCard
                        title=" Paquete Premium"
                        puerta = "4 Sensores para puerta"
                        ventana = "6 Sensores para ventanas"
                        bocina = "1 Altavoz"
                        teclado = "1 Teclado"
                        web = "Control desde web"
                        extras = "Alerta a servicios de emergencia"
                        precios = "$ 6900" 
                    />
                </Col>
            </Row>
            <br />
            <br />
            <br />
        </Container>
    )
}
