import React, { useState } from 'react'

import Title from './components/Title';
import Container from 'react-bootstrap/Container';
import fb from './firebase';

const UserPage = (props) => {

    const {
        handleLogOut,
        currentUser,
        alreadyConfig,
        setAlreadyConfig,
        handleCompleteUserData,
        name,
        setName,
        lname,
        setLname
    } = props;



    if (currentUser.displayName !== null) {
        setAlreadyConfig(true)
    }

    const [alarma, setAlarma] = useState({
        email: '',
        codProd: '',
        addr: '',
        geo: ''
    })

    fb
        .firestore()
        .collection("alarmas")
        .get()
        .then((data) => {
            data.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`)
            })
        })
        .catch((error) => {
            console.log(error.code)
        })

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
                    ''
                ) : (
                    <div className="shadow-lg p-3 mb-5 bg-body rounded">
                        Por favor termina de llenar tus datos:
                        <form>
                            <div className="row">
                                <div className="col">
                                    <label className="form-label">Nombre</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        autoFocus
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="col">
                                    <label className="form-label">Primer apellido</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        value={lname}
                                        onChange={(e) => setLname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                            </div>
                            <button onClick={(e) => handleCompleteUserData(e)} className="btn btn-primary">Guardar</button>
                        </form>
                    </div>
                )}
                <h3>Mis alarmas</h3>
                <p>
                    Las siguientes son las alrmas que tienes configuradas
                    dentro de tu cuenta. Siempre puedes añadir una nueva,
                    todo lo que necesitas es dar clic en el botón de abajo
                    que dice "Nueva alarma" e introducir el código de la
                    nueva alarma que compraste.
                </p>

                <div className="accordion" id="accortdionNewAlarm">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-controls="collapseOne">
                                Nueva alarma
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accortdionNewAlarm">
                            <div className="accordion-body">
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Código de producto"
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Dirección"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Contraseña de alarma"
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Geo"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-success">Añadir</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <hr />
                <button className="btn btn-secondary" onClick={handleLogOut}>
                    Cerrar sesión
                </button>
            </Container>
        </>
    )
}

export default UserPage;