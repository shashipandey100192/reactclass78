import React from 'react';
import ReactDOM from 'react-dom/client';
import Myhome from './components/Home';
import Myabout from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.css';
import Mynav from './components/Navbar';
import Myreactnav from './components/Navbar1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  <Myhome />
  <Myabout />
  <Mynav />
  <Myreactnav />

  </React.StrictMode>
);

