import React from 'react'

import Title from './components/Title';
import Container from 'react-bootstrap/Container';

const UserPage = (props) => {

    const {
        handleLogOut,
        currentUser,
        alreadyConfig,
        setAlreadyConfig
    } = props;

    if (currentUser.displayName !== null) {
        setAlreadyConfig(true)
    }

    return (
        <>
            <Container>
                {alreadyConfig ? (
                    "Configurado"
                ) : (
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        Por favor termina de llenar tus datos
                    </div>
                )}
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