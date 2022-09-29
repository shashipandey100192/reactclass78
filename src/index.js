import React from 'react';
import ReactDOM from 'react-dom/client';
// import Myhome from './components/Home';
// import Myabout from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.css';
// import Mynav from './components/Navbar';
// import Myreactnav from './components/Navbar1';
import { BrowserRouter as Abc } from 'react-router-dom';
import Myroute from './components/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Abc>
  {/* <Myhome />
  <Myabout />
  <Mynav />
  <Myreactnav /> */}
  <Myroute />
  </Abc>

  </React.StrictMode>
);

