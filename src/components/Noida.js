import React, { useContext } from 'react';
import {mydata} from './City';



function Noida() {

    const data = useContext(mydata);
    return (
    <div>
        <h1>Noida: {data}</h1>
        </div>
  )
}

export default Noida