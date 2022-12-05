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
import Myprops from './Myprops';
import Gallery from './components/Gallery';
import List from './List';
import City from './components/City';
import Condi from './components/Condi';
import Mycard from './components/Mycard';
import Mydatafatch from './Mydatafatch';
import Pagina from './Pagina';
import Welcome from './Welcome';
import Mytraval from './Traval/Mytraval';
import Landing from './Education/Landing';

// import Myproduct from './redux/Product';


const Mylogin = lazy(()=> import('./components/Login'));
const Mylandingpage = lazy(()=> import('./components/Landing'));
const Mycontact = lazy(()=> import('./components/Contact'));
const root = ReactDOM.createRoot(document.getElementById('root'));
const Mynew =lazy(()=>import('./components/Inputget'));



root.render(
  <React.StrictMode>
 
    <Abc>
        <Routes>
          <Route path='/' element={<Welcome/>} />
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
          <Route path='/myprops' element={<Myprops/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/loop' element={<List/>} />
          <Route path='/city' element={<City/>} />
          <Route path='/cond' element={<Condi/>} />
          <Route path='/card' element={<Mycard/>} />
          <Route path='/mydata' element={<Mydatafatch />} />
          <Route path='/pagi' element={<Pagina />} />
          {/* <Route path='/redux' element={<Myproduct />} /> */}
          <Route path='/traval' element={<Mytraval />} />
          <Route path='/education' element={<Landing/>} />
          
        </Routes>
        

  </Abc>

  </React.StrictMode>
);

