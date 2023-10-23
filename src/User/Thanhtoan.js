import React from 'react'
import "../User/user.css"
import Loginout from './Loginout'
import { useNavigate } from 'react-router-dom'

const Thanhtoan = () => {
    const navigate = useNavigate();

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
                    <a className="nav-link" role="button" onClick = {()=>navigate("../app")}>Home</a>
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
        <div className="container">
        
            <h2 className="my-5 text-center">Checkout form</h2>
    
        
            <div className="row">
         
                <div className="col-md-8 mb-4">
                   
                    <div className="card p-4">
                      
                        <div className="row mb-3">
                       
                            <div className="col-md-6 mb-2">
                                
                                <div className="form-outline">
                                    <input type="text" id="typeText" className="form-control" placeholder='First name' />
                                </div>
                            </div>
                            
                            <div className="col-md-6 mb-2">
                                <div className="form-outline">
                                    <input type="text" id="typeText" className="form-control" placeholder='Last name' />
                                </div>
                            </div>
                          
                        </div>
                       
                        <div className="input-group mb-4">
                            <div className="input-group-text" id="basic-addon1">@</div>
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
    
                        <p className="mb-0">
                            Email (optional)
                        </p>
                        <div className="form-outline mb-4">
                             <input type="email" className="form-control" placeholder="youremail@example.com" aria-label="youremail@example.com" aria-describedby="basic-addon1" />
                        </div>
    
                        <p className="mb-0">
                            Address
                        </p>
                        <div className="form-outline mb-4">
                            <input type="email" className="form-control" placeholder="1234 Main St" aria-label="1234 Main St" aria-describedby="basic-addon1" />
                        </div>
    
                        <p className="mb-0">
                            Address 2 (optional)
                        </p>
                        <div className="form-outline mb-4">
                            <input type="email" className="form-control" placeholder="Apartment or suite" aria-label="Apartment or suite" aria-describedby="basic-addon1" />
                        </div>
    
                   
                        <div className="row">
                           
                            <div className="col-lg-4 col-md-12 mb-4">
                                <p className="mb-0">
                                    Country
                                </p>
                                <div className="form-outline mb-4">
                            <input type="email" className="form-control" placeholder="United States" aria-label="United States" aria-describedby="basic-addon1" />
                        </div>
                            </div>
                      
                            <div className="col-lg-4 col-md-12 mb-4">
                                <p className="mb-0">
                                    State
                                </p>
                                <div className="form-outline mb-4">
                            <input type="email" className="form-control" placeholder="California" aria-label="California" aria-describedby="basic-addon1" />
                        </div>
                            </div>
               
                            <div className="col-lg-4 col-md-12 mb-4">
                                <p className="mb-0">
                                    Zip
                                </p>
                                <div className="form-outline">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                           
                        </div>
                       
    
                        <hr />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">Shipping address is the same as my billing address</label>
                        </div>
    
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">Save this information for next time</label>
                        </div>
    
                        <hr />
                        <hr className="mb-4" />                    
                      <button className="btn btn-primary" type="button">Submit Your Bill</button>
                    </div>
                  
                </div>
         
                <div className="col-md-4 mb-4">
                
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <div className="text-muted">Your cart</div>
                        <div className="badge rounded-pill badge-primary badge-notification bg-primary">3</div>
                    </h4>
    
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between">
                            <div>
                                <h6 className="my-0">Product name</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <div className="text-muted">$12</div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <div>
                                <h6 className="my-0">Second product</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <div className="text-muted">$8</div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <div>
                                <h6 className="my-0">Third item</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <div className="text-muted">$5</div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <div className="text-success">-$5</div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <div>Total (USD)</div>
                            <strong>$20</strong>
                        </li>
                    </ul>
                
                    <form className="card p-2">
                        <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Promo code"
        aria-label="Promo code"
        aria-describedby="button-addon2"
      />
      <button className="btn btn-primary" type="button" id="button-addon2" data-mdb-ripple-color="dark">
        redeem
      </button>
    </div>
                    </form>
           
                </div>
              
            </div>
     
        </div>
    </main>

    <footer className="text-center text-white mt-4 foot">
    
        <div className="pt-4 pb-2">
            <a className="btn btn-outline-white footer-cta mx-2 boxsha"  href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="_blank" role="button">
        
                <i className="fas fa-download ms-2"></i>
            </a>
            <a className="btn btn-outline-white footer-cta mx-2 boxsha"  href="https://mdbootstrap.com/education/bootstrap/" target="_blank" role="button">
         
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

export default Thanhtoan