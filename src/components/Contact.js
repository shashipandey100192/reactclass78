import React, { useState } from "react";

function Mycontact()
{

const [first, second] =useState('this is text')
const [inputtext, uptexttext] =useState('text')
const xyz = ()=>
{
    second('this is computer education');
    uptexttext('color');
}


return(
    <>
        <h1>contact page {first}</h1>
        <input type={inputtext} value={first} onClick={xyz} />
    </>
)

}

export default Mycontact