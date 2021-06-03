import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import MyNavbar from './components/MyNavbar';
import MainCarousel from './components/MainCarousel';

ReactDOM.render(
  <>
    <MyNavbar/>
    <MainCarousel/>
  </>
  ,
  document.getElementById('root')
);