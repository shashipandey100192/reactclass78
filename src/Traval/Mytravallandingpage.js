import React from 'react';
import { Mycustraval, Mytravalcustom } from './Mytravalnesting';


function Mytravallandingpage() {
  return (
    <div>Mytravallandingpage
        <h1> 
            <Mytravalcustom />
           
        </h1>
        <Mycustraval />
    </div>
  )
}

export default Mytravallandingpage