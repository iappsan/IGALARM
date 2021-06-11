import React from 'react'

import Container from 'react-bootstrap/Container';
import Title from './components/Title';

const Login = (props) => {

    const {
        email,
        setEmail,
        pass,
        setPass,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailErr,
        passErr
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
                            <p className="errorMsg">{emailErr}</p>
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
                            <p className="errorMsg">{passErr}</p>
                        </div>
                        {hasAccount ? (
                            <button type="submit" onClick={handleLogin} className="btn btn-primary">Entrar</button>
                        ) : (
                            <button type="submit" onClick={handleSignUp} className="btn btn-primary">Registrar</button>
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