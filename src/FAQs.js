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
                más frecuentes junto con sus respeustas"
            />
            <br />
            <br />
            <MyAccordion
                question="Que le pasa a lupita?"
                answer="No se"
            />
        </Container>
    )
}
