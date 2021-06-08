import React from 'react'

import Container from 'react-bootstrap/Container';
import Title from './components/Title';

export default function Contact() {
    return (
        <Container>
            <Title
                title="Contactanos"
                desc="Envíanos un mensaje si es que tienes alguna
                duda específica, o si tienes algo que decirnos."
            />
        </Container>
    )
}
