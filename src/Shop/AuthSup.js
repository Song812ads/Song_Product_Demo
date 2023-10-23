import React from 'react'
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';
const AuthSup = () => {
    const auth = useAuth()
    const navigate = useNavigate()
  return (
    <div>
        <a role="button" onClick={() => auth.isAuthenticated ? navigate("../supply"):auth.signinRedirect()} className="nav-link">
                SERVICE
        </a>
    </div>
  )
}

export default AuthSup