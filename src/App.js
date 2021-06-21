import React, { useState, useEffect } from 'react'

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.min.css';
import './css/index.css';
import fb from './firebase';

import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Welcome from './Welcome';
import Login from './Login';
import FAQs from './FAQs';
import Team from './Team';
import Alarm from './Alarm';
import Prices from './Prices';
import Contact from './Contact';
import UserPage from './UserPage';
import Err404 from './components/Err404';

const App = () => {

    const [currentUser, setCurrentUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [emailErr, setEmailErr] = useState('');
    const [passErr, setPassErr] = useState('');
    const [passErr2, setPassErr2] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    const [arrayAlarm, setArrayAlarm] = useState([])

    const clearInputs = () => {
        setEmail('');
        setPass('');
        setPass2('');
    }

    const clearErr = () => {
        setEmailErr('');
        setPassErr('');
        setPassErr2('');
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    const handleSignUp = (e) => {

        clearErr();
        e.preventDefault();

        if (pass === pass2 && pass.length >= 6) {
            if (validateEmail(email)) {
                fb
                    .auth()
                    .createUserWithEmailAndPassword(email, pass)
                    .then((userCredential) => {
                        setCurrentUser(userCredential.user);
                    })
                    .catch((error) => {
                        switch (error.code) {
                            default:
                            case "auth/invalid-email":
                                setEmailErr("El correo es invalido");
                                break;
                            case "auth/weak-password":
                                setPassErr("Introduce al menos 6 caracteres");
                                break;
                        }
                    });
            } else {
                setEmailErr("El correo no tiene un formato válido");
            }
        } else {
            setPassErr2("Las contraseñas no coinciden");
        }
    }

    const handleLogOut = () => {
        fb.auth().signOut();
    }

    const handleLogin = (e) => {

        clearErr();
        e.preventDefault();

        fb
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .then((user) => {
            })
            .catch((error) => {
                switch (error.code) {
                    default:
                    case "auth/invalid-email":
                        setEmailErr("Correo invalido");
                        break;
                    case "auth/user-disabled":
                        setEmailErr("Usuario deshabilitado");
                        break;
                    case "auth/user-not-found":
                        setEmailErr("Email no registrado");
                        break;
                    case "auth/wrong-password":
                        setPassErr("Contraseña incorrecta");
                        break;
                }
            });
    }

    const handleResPass = (e) => {
        clearErr();
        e.preventDefault();
        if (!validateEmail(email)) {
            setEmailErr("Para recuperar tu contraseña, por favor" +
                "introduce el email con el que te registraste")
        } else {
            setEmailErr("si " + email + " se encuentra registrado,"
                + "se enviará un correo para reestablecer la contraseña")
            fb
                .auth()
                .sendPasswordResetEmail(email)
                .then(() => {

                })
                .catch((error) => {
                    console.clear()
                })
        }
    }

    const handleCompleteUserData = (e) => {

        e.preventDefault();
        currentUser
            .updateProfile({
                displayName: name + " " + lname
            }).then((user) => {
                setCurrentUser(user)
            }).catch((error) => {
                console.log(error.code)
            })

        e.reload();

    }

    const saveAlarm = async (data) => {
        await fb
            .firestore()
            .collection("alarmas")
            .doc()
            .set(data)
            .then(() => {
                console.log("Datos enviados")
            })
            .catch((error) => {
                console.log("Datos NOOO enviados")
                console.log(error.code)
            })
    }


    const getAlarms = async () => {
        await fb
            .firestore()
            .collection("alarmas")
            .onSnapshot((querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({ ...doc.data(), id: doc.id })
                })
                setArrayAlarm(docs)
            })
    }

    useEffect(() => {
        fb
            .auth()
            .onAuthStateChanged((currentUser) => {
                if (currentUser) {
                    clearInputs()
                    setCurrentUser(currentUser);
                } else {
                    setCurrentUser("");
                }
            });

        getAlarms();

    }, [])

    return (
        <>
            <BrowserRouter>
                <MyNavbar currentUser={currentUser} />
                <Switch>
                    <Route path="/" component={Welcome} exact={true} />
                    <Route path="/FAQs" component={FAQs} />
                    <Route path="/Team" component={Team} />
                    <Route path="/Alarm" component={Alarm} />
                    <Route path="/Prices" component={Prices} />
                    <Route path="/Contact" component={Contact} />
                    {currentUser ? (
                        <Route path="/Login" render={
                            (props) => (
                                <UserPage {...props}
                                    handleLogOut={handleLogOut}
                                    currentUser={currentUser}
                                    handleCompleteUserData={handleCompleteUserData}
                                    name={name}
                                    setName={setName}
                                    lname={lname}
                                    setLname={setLname}
                                    saveAlarm={saveAlarm}
                                    arrayAlarm={arrayAlarm}
                                />
                            )}
                        />
                    ) : (
                        <Route path="/Login" render={
                            (props) => (
                                <Login {...props}
                                    email={email}
                                    setEmail={setEmail}
                                    pass={pass}
                                    pass2={pass2}
                                    setPass={setPass}
                                    setPass2={setPass2}
                                    handleLogin={handleLogin}
                                    handleSignUp={handleSignUp}
                                    hasAccount={hasAccount}
                                    setHasAccount={setHasAccount}
                                    emailErr={emailErr}
                                    passErr={passErr}
                                    passErr2={passErr2}
                                    handleResPass={handleResPass}
                                />
                            )}
                        />

                    )}
                    <Route component={Err404} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;