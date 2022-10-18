import React from 'react'
import City from './City'
import Gallery from './Gallery'





function Condi() {
const y = "no"
const x = true;
    if(x===true)
    

    if(y==='yes')
    {
        return(
            <>
                <h1>this is first component</h1>
                <City />
            </>
        )
    }


    return (
    <div>
        <h1 style={{display:`${x}`}}>Condi </h1>
        {<Gallery />}
    </div>
  )
}

export default Condi
