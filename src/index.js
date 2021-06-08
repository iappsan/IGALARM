import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/bootstrap.min.css'

import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Welcome from './Welcome';
import Login from './Login';
import FAQs from './FAQs';
import Team from './Team';
import Alarm from './Alarm';
import Prices from './Prices';
import Contact from './Contact';
import Err404 from './components/Err404';


ReactDOM.render(
  <>
    <BrowserRouter>
      <MyNavbar />
      <Switch>
        <Route path="/" component={Welcome} exact={true} />
        <Route path="/Login" component={Login} />
        <Route path="/FAQs" component={FAQs} />
        <Route path="/Team" component={Team} />
        <Route path="/Alarm" component={Alarm} />
        <Route path="/Prices" component={Prices} />
        <Route path="/Contact" component={Contact} />
        <Route component={Err404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  </>
  ,
  document.getElementById('root')
);