import React from 'react';
import { Mycustraval, Mymemo, Mytravalcustom } from './Mytravalnesting';


function Mytravallandingpage() {
  return (
    <div>Mytravallandingpage
        <h1> 
            <Mytravalcustom />
           
        </h1>
        <Mycustraval />
        <Mymemo />
    </div>
  )
}

export default Mytravallandingpage