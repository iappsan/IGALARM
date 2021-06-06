import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import MainCarousel from './components/MainCarousel';
import InfoPanel from './components/InfoPanel';
// import Err404 from './components/Err404';

ReactDOM.render(
  <>
    <MyNavbar/>
    <MainCarousel/>
    <InfoPanel tittle="Quienes somos?"/>
    <Footer/>
  </>
  ,
  document.getElementById('root')
);