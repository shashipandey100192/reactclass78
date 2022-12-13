import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


function Mylogin() {
    const {loginWithRedirect, isAuthenticated} =useAuth0();
  return (
    !isAuthenticated && (
        <button onClick={()=> loginWithRedirect() }>
            sing in
        </button>
    )
  )
}

export default Mylogin