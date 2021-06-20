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
                        //Precio = "$1900"
                                              
                    />
                </Col>
                <Col>
                    <PriceCard
                        image = {pro}
                        title = "Paquete Pro"
                        titlePrices = "Paquete Pro"
                        descripcion = "Este paquete incluye:
                        2 Sensor para puerta
                        6 Sensores para ventanas
                        1 Bocina
                        1 Teclado
                        Control desde la web
                        Alerta a servicios de emergencia
                        Precio $3900 pago inicial 
                        + $250 mensuales"
                    />
                </Col>
                <Col>
                    <PriceCard
                        image = {premium}
                        title = "Paquete Premium"
                        titlePrices = "Paquete Premium"
                        descripcion1 = "El premium paquete incluye"
                        descripcion= "Sensor para puerta"
                        cantidad = "6"
                        descripcion= "Sensores para ventanas"
                        cantidad = "8"
                        descripcion= "Bocina"
                        cantidad = "1"
                        descripcion= "Sensor para puerta"
                        cantidad = "6"
                        descripcion= "Teclado"
                        cantidad = "1"
                        descripcion= "Control desde la web"
                        cantidad = ""
                        descripcion= "Alerta a servicios de emergencia"
                        cantidad = ""
                        descripcion= "Precio $5900 pago inicial 
                        + $250 mensuales"
                        cantidad = ""
                    />
                </Col>
            </Row>
            <br />
            <br />
            <br />
        </Container>
    )
}
