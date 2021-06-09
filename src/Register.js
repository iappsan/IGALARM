import React from 'react'

import Container from 'react-bootstrap/Container';
import Title from './components/Title';

export default function Register() {
    return (
        <Container>
            <Title
                title="Registro"
                desc="Para registrarte, necesitas el código
                de producto (el cual quedará vinculado permanentemente
                a tu cuenta)."
            />
            
        </Container>
    )
}
