import React, { useState } from 'react'

import Title from './components/Title';
import Container from 'react-bootstrap/Container';
import MyAlarma from './components/MyAlarma';

const UserPage = (props) => {

    const {
        handleLogOut,
        currentUser,
        handleCompleteUserData,
        name,
        setName,
        lname,
        setLname,
        saveAlarm,
        arrayAlarm
    } = props;

    const [initialAlarma, setInitialAlarma] = useState({
        email: currentUser.email,
        codProd: '',
        addr: '',
        pass: '',
        geo: ''
    })

    const [alarma, setAlarma] = useState(initialAlarma);

    const handleInputChange = (e) => {
        e.preventDefault();

        const { name, value } = e.target;
        setAlarma({ ...alarma, [name]: value });
    }

    const handleAlarmSubmit = (e) => {
        e.preventDefault()
        setAlarma({ ...initialAlarma })
        saveAlarm(alarma)
        setInitialAlarma(...initialAlarma)
    }

    return (
        <>
            <Container>
                <Title
                    title={("Bienvenido " + currentUser.displayName)}
                    desc="Desde aqui puedes cambiar la configuracion de tu
                cuenta y tambien puedes cambiar y revisar la configuracion 
                de tus alarmas."
                />
                {currentUser.displayName !== null ? (
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

                <Container>
                    {arrayAlarm.map((doc) => {
                        return doc.email === currentUser.email ?
                            <MyAlarma
                                key={doc.id}
                                codProd={doc.codProd}
                                addr={doc.addr}
                                pass={doc.pass}
                            />
                            : false
                    })}
                </Container>

                <br />
                <br />
                <br />

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
                                                    name="codProd"
                                                    value={alarma.codProd}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Dirección"
                                                    name="addr"
                                                    value={alarma.addr}
                                                    onChange={handleInputChange}
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
                                                    name="pass"
                                                    value={alarma.pass}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="coordenadas"
                                                    name="geo"
                                                    value={alarma.geo}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-success"
                                        onClick={handleAlarmSubmit}>
                                        Añadir
                                    </button>
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
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Activar alarma
                </button>
                <br />
                <br />
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Alerta</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ¡Tu alarma ha sido activada!
                                Contacta a los servicios de emergencias
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <a type="button"
                                className="btn btn-primary"
                                rel="noopener noreferrer"
                                href="https://twitter.com/spf_sspc" 
                                target="_blank">Contactar policia</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default UserPage;