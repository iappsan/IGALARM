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
import Register from './Register';
import UserPage from './UserPage';
import Err404 from './components/Err404';

const App = () => {

    const [currentUser, setCurrentUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passErr, setPassErr] = useState('');
    const [passErr2, setPassErr2] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

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

    const handleLogin = () => {
        clearErr();
        fb
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {

            })
            .catch((error) => {
                switch (error.code) {
                    default:
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailErr(error.message);
                        break;
                    case "auth/wrong-password":
                        setPassErr(error.message);
                        break;
                }
            });
    };

    const handleSignUp = () => {
        clearErr();
        console.log(pass === pass2)
        if (pass === pass2) {
            if (validateEmail(email)) {
                fb
                    .auth()
                    .createUserWithEmailAndPassword(email, pass)
                    .then((userCredential) => {
                        setCurrentUser(userCredential.user);
                        console.log("Registro exitoso");
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
        console.log(pass)
        console.log(pass2)
    };

    const handleLogOut = () => {
        fb.auth().signOut();
    }

    useEffect(() => {
        const authStateListener = () => {
            fb.auth().onAuthStateChanged((currentUser) => {
                if (currentUser) {
                    clearInputs();
                    setCurrentUser(currentUser);
                } else {
                    setCurrentUser("");
                }
            });
        }
        authStateListener();
    }, []);

    return (
        <>
            <BrowserRouter>
                <MyNavbar />
                <Switch>
                    <Route path="/" component={Welcome} exact={true} />
                    <Route path="/FAQs" component={FAQs} />
                    <Route path="/Team" component={Team} />
                    <Route path="/Alarm" component={Alarm} />
                    <Route path="/Prices" component={Prices} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Register" component={Register} />
                    {currentUser ? (
                        <Route path="/Login" render={
                            (props) => (
                                <UserPage {...props}
                                    handleLogOut={handleLogOut}
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