import React from 'react'

import Title from './components/Title';
import Container from 'react-bootstrap/Container';

const UserPage = ({handleLogOut}) => {
    return (
        <>
            <Container>
            <Title
                title="Bienvenido"
                desc="Desde aqui puedes cambiar la configuracion de tu
                cuenta y tambien puedes cambiar y revisar la configuracion 
                de tus alarmas."
            />
            <button className="btn btn-secondary" onClick={handleLogOut}>
                Salir
            </button>
            </Container>
        </>
    )
}

export default UserPage;