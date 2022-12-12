import React, { useState } from 'react'


function Mysalesproject() {
  const a ="kumar";
  const c = [
    {name:'ravi',age:'5'},
    {name:'mohan',age:'5'},
    {name:'singh',age:'5'}
  ];

    // localStorage.setItem('ducat',a);
    // localStorage.setItem('ducat',"{name:'mohan',age:40}");
    localStorage.setItem('ducat',JSON.stringify(c));

    const [x,y] = useState(0);
const abc = ()=>
{
    y(localStorage.getItem('ducat'));
}

const xyz = ()=>
{
    localStorage.removeItem("ducat");
    y(localStorage.getItem('ducat'));

}
  
    return (
    <>
    <div>Mysalesproject</div>
        <button type='button' onClick={abc}>submit</button>
        <button type='button' onClick={xyz}>clear</button>
        <p>{x}</p>
        </>

  )
}

export default Mysalesproject