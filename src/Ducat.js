import React from 'react'

function Ducat(props) {
  return (
    <>
    <h1>this is proper property {props.location}</h1>
        {props.children}
    </>
  )
}

export default Ducat