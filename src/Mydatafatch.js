import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Mydatafatch() {

// useEffect(()=>{
//    axios
//    .get('https://jsonplaceholder.typicode.com/posts')
//    .then((res)=>{
//     console.log(res.data);
//    })

// });

const [stvariabl, stfunction] =useState([]);
const abc = ()=>
{
    axios
    .get('https://jsonplaceholder.typicode.com/comments')
    .then((res)=>{
        stfunction(res.data);
    })
    
}


  return (
    <div>
    <div>Mydatafatch</div>
    <button type='button' onClick={abc}> get data</button>
   {/* {JSON.stringify(stvariabl)} */}



   {stvariabl.map((x)=>{
      return <h1>{x.email}</h1>
})}

  


    </div>
  )
}

export default Mydatafatch