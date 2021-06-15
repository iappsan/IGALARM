import React from 'react'

import Title from './components/Title';
import Container from 'react-bootstrap/Container';

const UserPage = (props) => {

    const {
        handleLogOut,
        currentUser,
        alreadyConfig,
        setAlreadyConfig,
        handleCompleteUserData
    } = props;

    if (currentUser.displayName !== null) {
        setAlreadyConfig(true)
    }

    return (
        <>
            <Container>
                <Title
                    title={("Bienvenido " + currentUser.email)}
                    desc="Desde aqui puedes cambiar la configuracion de tu
                cuenta y tambien puedes cambiar y revisar la configuracion 
                de tus alarmas."
                />
                {alreadyConfig ? (
                    "Configurado"
                ) : (
                    <div className="shadow-lg p-3 mb-5 bg-body rounded">
                        Por favor termina de llenar tus datos:
                        <form>
                            <div className="row">
                                <div className="col">
                                    <label className="form-label">Nombre</label>
                                    <input type="email" className="form-control" autoFocus id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="col">
                                    <label className="form-label">Primer apellido</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="mb-3">
                            </div>
                            <button onClick={(e) => handleCompleteUserData(e)} className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                )}
                <button className="btn btn-secondary" onClick={handleLogOut}>
                    Cerrar sesión
                </button>
            </Container>
        </>
    )
}

export default UserPage;