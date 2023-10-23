import React from 'react'
import { useNavigate } from 'react-router-dom'
import './component.css'

const SupplierNavigate = () => {

    const navigate = useNavigate();

    const handleCheckOut =() =>{
        navigate("/acitivity");
    }
    
    return (
<div>
    <button className="btn btn-danger badge rounded-pill badge-notification p-3 mx-5" onClick={handleCheckOut}>10</button>
  </div>
    );
}
export default SupplierNavigate