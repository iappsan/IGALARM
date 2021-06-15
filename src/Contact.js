import React from 'react'
import HorizontalCard from './components/HorizontalCard';

import Container from 'react-bootstrap/Container';
import Title from './components/Title';

import ct1 from './img/contact/correo.png';
import ct2 from './img/contact/facebook.png';
import ct3 from './img/contact/twitter.png';

export default function Contact() {
    return (
        <Container>
            <Title
                title="Contactanos"
                desc="Envíanos un mensaje si es que tienes alguna
                duda específica, o si tienes algo que decirnos."
            />
            <HorizontalCard 
                title="Facebook"
                text="Siguenos en nuestra página de Facebook"
                source={ct2}
                link="https://www.facebook.com"
            />
            <HorizontalCard 
                title="Twitter"
                text="Siguenos en nuestra en Twitter"
                source={ct3}
                link="https://twitter.com"
            />
            <HorizontalCard 
                title="Correo"
                text="Escribenos un correo"
                source={ct1}
                link="https://gmail.com"
            />
        </Container>
    )
}
