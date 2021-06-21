import React, { useEffect } from 'react'

import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import { run as jsholder } from 'holderjs/holder';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PriceCard from './components/PriceCard';

import basico from './img/prices/basico.png';
import pro from './img/prices/pro.png';
import premium from './img/prices/premium.png';



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
                        image = {basico}
                        reference = "#multiCollapseExample1"
                        id = "multiCollapseExample1"
                        title = "Paquete básico"
                        titlePrices = "Paquete básico"
                        descripcion0 = "Este paquete incluye:"
                        cantidad1 = "1" 
                        descripcion1= "Sensor para puerta"
                        cantidad2 = "2"
                        descripcion2 = "Sensores para ventanas" 
                        cantidad3 = "1" 
                        descripcion3 = "Bocina"
                        cantidad4 = "1" 
                        descripcion4 = "Teclado"
                        precio = "Pago unico $1900"
                                              
                    />
                </Col>
                <Col>
                <PriceCard
                        image = {pro}
                        title = "Paquete Pro"
                        reference = "#multiCollapseExample2"
                        titlePrices = "Paquete Pro"
                        id = "multiCollapseExample2"
                        descripcion0 = "El Pro paquete incluye"
                        descripcion1 = "Sensor para puerta"
                        cantidad1 = "2"
                        descripcion2 = "Sensores para ventanas"
                        cantidad2 = "6"
                        descripcion3 = "Bocina"
                        cantidad3 = "1"
                        descripcion4= "Teclado"
                        cantidad4 = "1"
                        descripcion5 = "Control desde la web y Alerta a servicios de emergencia"
                        precio = "Precio $5900 pago inicial + $250 mensuales"
                    />
                </Col>
                <Col>
                    <PriceCard
                        image = {premium}
                        title = "Paquete Premium"
                        reference = "#multiCollapseExample3"
                        titlePrices = "Paquete Premium"
                        id = "multiCollapseExample3"
                        descripcion0 = "El premium paquete incluye"
                        descripcion1 = "Sensor para puerta"
                        cantidad1 = "6"
                        descripcion2 = "Sensores para ventanas"
                        cantidad2 = "8"
                        descripcion3 = "Bocina"
                        cantidad3 = "1"
                        descripcion4 = "Teclado"
                        cantidad4 = "1"
                        descripcion5 = "Control desde la web y Alerta a servicios de emergencia"
                        precio = "Precio $5900 pago inicial + $250 mensuales"
                    />
                </Col>
            </Row>
            <br />
            <br />
            <br />
        </Container>
    )
}
