import React from 'react'
import Container from 'react-bootstrap/Container';
import Title from './components/Title';

export default function Alarm() {
    return (
        <Container>
            <Title
                title="El diseño de nuestra alarma"
                desc="Nuestra alarma está desarrollada con base en el
                sistema de arduino, un sistema de altavoces y sensores
                necesarios para brindarte la seguridad que necesitas"
            />
        </Container>
    )
}
