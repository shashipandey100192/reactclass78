import React from 'react'
import { Link } from 'react-router-dom';
import Ducat from './Ducat'

function Myprops() {
  return (
    <div>
        <Ducat location="delhi">
            <p>this is paragraph</p>
            <button type='button'>hello</button>
        </Ducat>
        <Ducat location="noida">
            <input type="text" value="enter name"></input>
        </Ducat>
        <Ducat location="faridabad">
            <Link to="/http">Home</Link>
            <a href='http://google.com'>Home to</a>
        </Ducat>


    </div>
  )
}

export default Myprops