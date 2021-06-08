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
            <br />
            <br />
            <MyAccordion
                question="Que le pasa a lupita?"
                answer="No se"
            />
            <MyAccordion
                question="¿Es fácil de instalar? "
                answer="Si, o bien podemos enviar a un técnico para mayor comodidad"
            />
            <MyAccordion
                question="¿Tiene un costo la instalación? "
                answer="No, va incluido en paquete que elijas"
            />
            <MyAccordion
                question="¿Cuál es el ave que vuela y come piedras? "
                answer="El ave como piedras"
            />
            <MyAccordion
                question="¿Tiene un precio el mantenimiento? "
                answer="Esto dependerá del paquete que elijas"
            />
            <MyAccordion
                question="¿Existe garantía? "
                answer="Dependerá de la falla que tenga el sistema"
            />
            <MyAccordion
                question="¿Existen otros dispositivos al mercado? "
                answer="Por el momento solo contamos con uno :("
            />
            <br />
            <br />
            <br />
            <br />
        </Container>

    )
}
