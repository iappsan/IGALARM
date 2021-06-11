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

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passErr, setPassErr] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPass('');
    }

    const clearErr = () => {
        setEmailErr('');
        setPassErr('');
    }

    const handleLogin = () => {

        clearErr();
        fb
            .auth()
            .signInWithEmailAndPassword(email, pass)
            .catch((err) => {
                switch (err.code) {
                    default:
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailErr(err.message);
                        break;
                    case "auth/wrong-password":
                        setPassErr(err.message);
                        break;
                }
            });
    };

    const handleSignUp = () => {

        clearErr();
        fb
            .auth()
            .createUserWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
        console.log(email + " " + pass)
        
    };

    const handleLogOut = () => {
        fb.auth().signOut();
    }

    useEffect(() => {
        const authStateListener = () => {
            fb.auth().onAuthStateChanged((user) => {
                if (user) {
                    clearInputs();
                    setUser(user);
                } else {
                    setUser("");
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
                    {user ? (
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
                                    setPass={setPass}
                                    handleLogin={handleLogin}
                                    handleSignUp={handleSignUp}
                                    hasAccount={hasAccount}
                                    setHasAccount={setHasAccount}
                                    emailErr={emailErr}
                                    passErr={passErr}
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