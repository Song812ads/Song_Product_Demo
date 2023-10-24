import React from 'react'
import '../User/user.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from 'react-oidc-context'
import Loginout from './Loginout'
import { useEffect } from 'react'
const ProductPage = () => {



    const navigate = useNavigate();

    useEffect (() => {
        document.title="San pham"

    });

  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
  
    <div className="container">
   
        <button 
            className="navbar-toggler" 
            type="button" 
            data-mdb-toggle="collapse" 
            data-mdb-target="#navbarSupportedContent1" 
            aria-controls="navbarSupportedContent1" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
        </button>

     
        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
         

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" role="button" onClick = {()=>navigate("/Song_Product_Demo")}>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" role="button" onClick = {()=>navigate("../user")}>User</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" role="button" onClick = {()=>navigate("../supply")}>Service</a>
                </li>
            </ul>
      
        </div>

        <div className="d-flex align-items-center">
           
            <a className="nav-link me-3" role="button" onClick={()=>navigate("../user/pay")}>
            <i className="bi bi-bag"></i>
                <div className="badge rounded-pill badge-notification bg-danger top-0 start-100 ">101</div>
            </a>

             <Loginout />
        </div>
      
    </div>
   
</nav>

<main className="mt-5 pt-4">
    <div className="container mt-5">
       
        <div className="row">
           
            <div className="col-md-6 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg" className="img-fluid" alt="" />
            </div>
         

            <div className="col-md-6 mb-4">
               
                <div className="p-4">
                    <div className="mb-3">
                        <a href="">
                            <div className="badge bg-dark me-1">Category 2</div>
                        </a>
                        <a href="">
                            <div className="badge bg-info me-1">New</div>
                        </a>
                        <a href="">
                            <div className="badge bg-danger me-1">Bestseller</div>
                        </a>
                    </div>

                    <div className="lead">
                        <div className="me-1">
                            <del>$200</del>
                        </div>
                        <div>$100</div>
                    </div>

                    <strong><p className="para">Description</p></strong>

                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor suscipit libero eos atque quia ipsa sint voluptatibus! Beatae sit assumenda asperiores iure at maxime atque repellendus maiores quia sapiente.</div>

                    <form className="d-flex justify-content-left">
                   
                        <div className="form-outline me-1 wid" >
                            <input type="number" value="1" className="form-control" />
                        </div>
                        <button className="btn btn-primary ms-1" type="submit">
                            Add to cart
                            <i className="fas fa-shopping-cart ms-1"></i>
                        </button>
                    </form>
                </div>
            
            </div>
        
        </div>
     

        <hr />

        <div className="row d-flex justify-content-center">
        
            <div className="col-md-6 text-center">
                <h4 className="my-4 h4">Additional information</h4>

                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit voluptates, quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</div>
            </div>
           
        </div>

        <div className="row">
     
            <div className="col-lg-4 col-md-12 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" className="img-fluid" alt="" />
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" className="img-fluid" alt="" />
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" className="img-fluid" alt="" />
            </div>
          
        </div>
  
    </div>
</main>


<footer className="text-center text-white mt-4 back">
    <div className="pt-4 pb-2">
        <a className="btn btn-outline-white footer-cta mx-2 boxsha"  href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank" role="button">
            Download MDB
            <i className="fas fa-download ms-2"></i>
        </a>
        <a className="btn btn-outline-white footer-cta mx-2 boxsha" href="https://mdbootstrap.com/education/bootstrap/" target="_blank" role="button">
            Start free tutorial
            <i className="fas fa-graduation-cap ms-2"></i>
        </a>
    </div>
    <hr className="text-dark" />

    <div className="container">
        <section className="mb-3">
            <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-facebook-f"></i></a>
            <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-twitter"></i></a>
            <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-google"></i></a>
            <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-instagram"></i></a>
            <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-youtube"></i></a>
            <a className="btn-link btn-floating btn-lg text-white" href="#!" role="button" data-mdb-ripple-color="dark"><i className="fab fa-github"></i></a>
        </section>
    </div>
    <div className="text-center p-3 boxsha1" >
        © 2022 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
</footer>
    </div>
  )
}

export default ProductPage