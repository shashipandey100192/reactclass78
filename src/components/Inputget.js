import React, { useState } from 'react'

function Inputget() {
// const [newinput , updateinput]=useState()

const abc = (e)=>
{
    // console.log(e.target.value);
    console.log(e.type);
}

const [fst,updatfst] =useState(0);
const [sec,updatesec] =useState(0);

const first = (e)=>
{
    updatfst(parseInt(e.target.value));
}

const second = (e)=>
{
    updatesec(parseInt(e.target.value));
}

const [fst1,updatfst1] =useState({
    firstname:'',
    secondnumber:'',
    thirdnumber:''
});



  return (
    <>
        <input type="number" onInput={abc} value={fst+sec} /><br/>
        <input type="number" onInput={first} />
        <input type="number" onInput={second} />
        <h1>number{fst} {sec} and {fst+sec}</h1>
    
    
    </>
  )
}

export default Inputget