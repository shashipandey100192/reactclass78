import React, { useState } from 'react';
import './components/global.css';


function Featurs() {

const [newtext, updatetext] = useState("type text here...");
const [newsize, updatesize] = useState(15);
const [newcolor, updatecolor] = useState('red');
const [d, dupdate] = useState('none');

const fchan = (e)=>
{
    updatetext(e.target.value);
    // console.log(e);
}
const fsize = (e)=>
{
    updatesize(e.target.value);
}
const fcolor = (e)=>
{
    updatecolor(e.target.value);
}

const mysetting = ()=>
{
    dupdate('block');
}



    return (
        <>  
          <div className='mysetting' style={{display:`${d}`}}>
    <ul>
        <li><label>text</label><input type="text" size="50" onInput={fchan} /></li>
        <li><label>Size</label><input type="number" min="10" max="100" onInput={fsize}/></li>
        <li><label>color</label><input type="color" onInput={fcolor}/></li>
        </ul>
        </div>
        <button onClick={mysetting}>show setting</button>
        <section className='output' style={{fontSize:`${newsize}px`,color:`${newcolor}`}}>
            {newtext}

        </section>
        </>


  )
}

export default Featurs