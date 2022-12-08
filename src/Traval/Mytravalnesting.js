import { useMemo, useState } from 'react';
import '../components/style.css';


export const Mytravalcustom = ()=>{
const a = 60;
    return <div className="divrot"> ${a}</div> ;
}



export const Mycustraval = ()=>{
    const a = 'this is second number';
        return`this is first number ${a}`
    }


export const Mymemo = ()=>{

const [a,b]=useState(0);
const [x,y]=useState(0);

const firstcount =()=> {
    b(a+1);
}
const Secondcount =()=> {
    y(x+1);
}
// const Mycounts = ()=>{
//     let b =1;
//     while(b<2000000000) b++
// }

const Mycounts = useMemo(()=>{
    let i =1;
   while (i < 2000000000) i++
},[a])

    return(
        <>
        <h1>use of r</h1>
            <button type="button" onClick={firstcount}> first  {a}</button>
            <h1>{ Mycounts }</h1>
            <button type="button" onClick={Secondcount}> second  {x}</button>
        </>
    )

}


