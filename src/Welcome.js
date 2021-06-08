import React from 'react'

import MainCarousel from './components/MainCarousel';
import Title from './components/Title';
import Container from 'react-bootstrap/Container';

export default function Welcome() {
    return (
        <>
            <MainCarousel />
            <Container>
            <Title
                    title="Nuestro objetivo"
                    desc="Es dar a conocer otras opciones para implementar sistemas de seguridad con una mayor
                    accesibilidad en el sentido económico, brindar seguridad y confianza."
                />
                <Title
                    title="Nuestra misión"
                    desc="Proteger lo más importante para ti, tu hogar, empresa, familia o bienes. Brindando un
                    sistema más económico que genere confianza y seguridad."
                />
                <Title
                    title="Nuestra visión"
                    desc="Generar un sistema de confianza y seguridad que se adapte a las necesidades de nuestros clientes."
                />  
                
            </Container>
        </>
    )
}
