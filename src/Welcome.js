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
                    title="Quienes somos?"
                    desc="dr tcfdl uiqwdhawydug a sduyhqwiauiasdasdvwqeeqwhje qw hjasdbkj hgjk"
                />
            </Container>
        </>
    )
}
