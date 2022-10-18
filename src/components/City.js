import React, { createContext } from 'react'
import List from '../List';
import Noida from './Noida';

const mydata = createContext();


function City() {

const first = "this is parent variable";
  return (
    <div>
        <h1>City:{first}</h1>
        <mydata.Provider value={first}>
            <Noida/>
            <List/>
        </mydata.Provider>

    </div>
  )
}

export default City
export {mydata}