import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Mydatafatch() {

useEffect(()=>{
   axios
   .get('https://jsonplaceholder.typicode.com/posts')
   .then((res)=>{
    console.log(res.data);
   })

});

const [stvariabl, stfunction] =useState(0);
const abc = ()=>
{
    axios
    .get('https://jsonplaceholder.typicode.com/comments')
    .then((res)=>{
        stfunction(res.data);
     console.log(res.data);
     
    })
    
}


  return (
    <div>
    <div>Mydatafatch</div>
    <button type='button' onClick={abc}> get data</button>
   
  


    </div>
  )
}

export default Mydatafatch