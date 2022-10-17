import React from 'react'
import './components/global.css';

function List() {
  
const mydata=[10,20,30,50,40,50,80]
    
  
    return (
    <div className='xyz'>

        {mydata.map((a)=>{
            <h1>{a} </h1>
        })}

        {mydata}

    </div>
  )
}

export default List