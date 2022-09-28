import React from "react";

import { Link, Route , Routes} from 'react-router-dom';
import Myabout from './About'; 
import Mycontact from "./Contact";
import Notfound from './Notfound';

function Myroute()
{
    return(
<>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
        <Routes>
            <Route path="/" element={<Myabout/>} />
            <Route path="/contact" element={<Mycontact/>} />
            <Route path="*" element={<Notfound/>} />
        </Routes>

      
      

        </>

    )
}

export default Myroute