import React from 'react'

import Container from 'react-bootstrap/Container';
import Title from './components/Title';

const Login = (props) => {

    const {
        email,
        setEmail,
        pass,
        pass2,
        setPass,
        setPass2,
        handleLogin,
        handleResPass,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailErr,
        passErr,
        passErr2
    } = props;

    return (
        <Container>
            {hasAccount ? (
                <Title
                    title="Inicia sesión"
                    desc="Desde esta pantalla puedes iniciar sesión para poder
                    administrar todas tu o tus alarmas. Ingresa tu correo electrónico
                    y tu contraseña."
                />
            ) : (
                <Title
                    title="Registro"
                    desc="Registrate con tu correo electrónico y una contraseña."
                />
            )}
            <div className="card" style={{ width: '25rem', margin: 'auto auto' }}>
                <form>
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                autoFocus
                                required
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailErr ?
                                <p className="alert alert-warning">{emailErr}</p>
                                : false}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                required
                                placeholder="Contraseña"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                            />
                            {passErr ?
                                <p className="alert alert-warning">{passErr}</p>
                                : false}
                        </div>
                        {hasAccount ? true : (
                            <div className="mb-3">
                                <label className="form-label">Confirma la contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    required
                                    placeholder="Confirma la contraseña"
                                    value={pass2}
                                    onChange={(e) => setPass2(e.target.value)}
                                />
                                <br />
                                <label>Requisitos de contraseña</label>
                                <ol>
                                    <li>Al menos 6 caracteres</li>
                                </ol>
                                {passErr2 ?
                                    <p className="alert alert-warning">{passErr2}</p>
                                    : false}
                            </div>
                        )}
                        {hasAccount ? (
                            <>
                                <button onClick={(e) => handleLogin(e)} className="btn btn-primary">Entrar</button>
                                <button onClick={(e) => handleResPass(e)} className="btn btn-warning">Recuperar contraseña</button>
                            </>
                        ) : (
                            <button onClick={handleSignUp} className="btn btn-secondary">Registrar</button>
                        )}
                    </div>
                    <div className="card-footer text-muted">
                        <small className="text-muted">
                            {hasAccount ? (
                                <>
                                    <span onClick={() => setHasAccount(!hasAccount)}>
                                        ¿No tienes una cuenta? da clic AQUÍ</span>
                                </>
                            ) : (
                                <>
                                    <span onClick={() => setHasAccount(!hasAccount)}>
                                        ¿Ya tienes una cuenta? da clic AQUÍ</span>
                                </>
                            )}
                        </small>
                    </div>
                </form>
            </div>
            <br />
            <br />
            <br />
        </Container>
    )
}

export default Login;