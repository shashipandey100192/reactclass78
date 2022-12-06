import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import '../components/style.css';
import Mytravallandingpage from './Mytravallandingpage';

function Navs() {
  return (
    <>
    <div>
        <Link className='cus-nav' to="travalhome" >MYtravalHome</Link>
        <Link className='cus-nav' to="route">route</Link>
        <Link className='cus-nav' to="car">cars</Link>
        <Link className='cus-nav' to="info">information</Link>
    </div>
    <Outlet />
    <Routes>
        <Route path='' element={<Mytravallandingpage />} />


    </Routes>



    </>
  )
}

export default Navs




