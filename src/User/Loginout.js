import React from 'react'
import { useAuth } from 'react-oidc-context'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Loginout(){

    const auth = useAuth();
    if ((auth.isAuthenticated) ){
        return (
        <div>
            <a role = "button" onClick={()=>auth.signoutRedirect()} className="me-2  border rounded px-2 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-user-alt m-1 me-md-2"></i>
            <i className="bi bi-person me-md-2 mb-1"></i>  <p className="d-none d-md-block mb-0" >Sign Out</p>
            </a>
        </div>
          )
      }
    
else {
    return (
    
    <div>
        <a role="button" onClick={()=>auth.signinRedirect()}  className="me-2  border rounded px-2 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-user-alt m-1 me-md-2"></i>
        <i className="bi bi-person me-md-2 mb-1"></i>  <p className="d-none d-md-block mb-0" >Sign In</p>
        </a>
    </div>
    )
}
}

export default Loginout