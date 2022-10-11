import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import Myhome from './components/Home';
// import Myabout from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter as Abc , Route, Routes } from 'react-router-dom';
import './components/global.css';
import Notfound from './components/Notfound';
import Featurs from './Featurs';
import Mynewform from './Mynewform';

const Mylogin = lazy(()=> import('./components/Login'));
const Mylandingpage = lazy(()=> import('./components/Landing'));
const Mycontact = lazy(()=> import('./components/Contact'));
const root = ReactDOM.createRoot(document.getElementById('root'));
const Mynew =lazy(()=>import('./components/Inputget'));
root.render(
  <React.StrictMode>
    <Abc>
        <Routes>
          <Route path='/' element={<Mylogin />} />
          <Route path='/landing' element={
            <Suspense fallback={<div className="mylodar">Welcome</div>}>
            <Mylandingpage />
          </Suspense>
          } />
          <Route path='/contact' element={
            <Suspense fallback={<div className="mylodar">Welcome</div>}>
            <Mycontact />
          </Suspense>
          } />
          <Route path='*' element={<Notfound/>} />
          <Route path='/feature' element={<Featurs/>} />
          <Route path='/new' element={<Mynew/>} />
          <Route path='/newform' element={<Mynewform/>} />

        </Routes>
        

  </Abc>

  </React.StrictMode>
);

