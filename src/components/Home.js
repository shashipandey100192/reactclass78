import React from "react";
import Mycontact from "./Contact";

function Myhome()
{
    const a = 50;
    const c = <Mycontact />

const b = ()=>
{
    console.log("helow");
}

    return(
        <div>
            <h1>welcome to home page</h1>
            {/* <Mycontact /> */}
            {c}
            <p onClick={b}>this is paragraph {a}</p>

        </div>
    )
}

export default Myhome