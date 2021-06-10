import React from 'react'

import Container from 'react-bootstrap/Container';
import Title from './components/Title';
import MyAccordion from './components/MyAccordion';

export default function FAQs() {
    return (
        <Container>
            <Title
                title="Preguntas frecuentes"
                desc="En esta sección puedes visualizar las preguntas
                más frecuentes junto con sus respuestas"
            />
            <MyAccordion
                question="Que le pasa a lupita?"
                answer="No se"
                eKey="0"
            />
            <MyAccordion
                question="¿Es fácil de instalar? "
                answer="Si, o bien podemos enviar a un técnico para mayor comodidad"
                eKey="1"
            />
            <MyAccordion
                question="¿Tiene un costo la instalación? "
                answer="No, va incluido en paquete que elijas"
                eKey="2"
            />
            <MyAccordion
                question="¿Cuál es el ave que vuela y come piedras? "
                answer="El ave como piedras"
                eKey="3"
            />
            <MyAccordion
                question="¿Tiene un precio el mantenimiento? "
                answer="Esto dependerá del paquete que elijas"
                eKey="4"
            />
            <MyAccordion
                question="¿Existe garantía? "
                answer="Dependerá de la falla que tenga el sistema"
                eKey="5"
            />
            <MyAccordion
                question="¿Existen otros dispositivos al mercado? "
                answer="Por el momento solo contamos con uno :("
                eKey="6"
            />
            <br />
            <br />
            <br />
            <br />
        </Container>

    )
}
