import React, { useContext } from 'react'
import './components/global.css';
import {mydata} from './components/City';

function List() {
const x = useContext(mydata);
  
const mydata1=[10,20,30,50,40,50,80]
    
  
    return (
    <div className='xyz'>

        {mydata1.map((a)=>{
            <h1>{a} </h1>
        })}

        {mydata1}
        <p>{x}</p>
    </div>
  )
}

export default List