import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainNavigate = () => {

    const navigate = useNavigate();

    const gotoclient =() =>{
        navigate("./user");
    }
    
    const gotosupplier = () => {
        navigate("./supplier");
    }

    return (
        <div className="d-md-inline justify-content-between ">
        <button className="right btn btn-primary btn-lg ">
            Explain Service Supply
        </button>
        <button onClick = {gotoclient}  className=" right btn btn-primary btn-lg" id="client">
            Try User Service
        </button>
        <button  onClick = {gotosupplier} className="right btn btn-primary btn-lg" id ="service">
            Try Supplier Service
        </button>
    </div>
    );
}

export default MainNavigate;