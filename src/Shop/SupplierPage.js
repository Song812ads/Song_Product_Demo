import React, { useEffect } from 'react'
import SupplierNavigate from '../MainPage/component/SupplierNavigate';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useAuth } from 'react-oidc-context';
import { useNavigate } from 'react-router-dom';
import AuthSup from './AuthSup';
import jwtDecode from 'jwt-decode';
  const SupplierPage = () => {

    const auth  = useAuth();

    const navigate = useNavigate();

    useEffect (() => {
      document.title = "Supply: Service";
    //   console.log(jwtDecode(auth.user.access_token).resource_access.supply_client.roles)
    })
    if (!auth.isAuthenticated || (auth.isAuthenticated && jwtDecode(auth.user.access_token).resource_access.supply_client.roles.toString()!=='supply_client')){
        return <button onClick = {()=>auth.signinRedirect()}>Log in supply service</button>
    }
    switch (auth.activeNavigator) {
        case "signinSilent":
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            return <div>Signing you out...</div>;
    }
    if (auth.isLoading) {
      return <div>Loading...</div>;
  }
  if (auth.error) {
      return <div>Oops... {auth.error.message}</div>;
  }

  else {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-success py-2"> 
        <div className = "container"> 
            <a onClick={()=>navigate("/app")} type="button" className="navbar-brand">
              SONG-SERVICE DEMO
            </a>
            
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <div className="nav-item">
                        <a onClick={()=>navigate('/user')} type="button" className="nav-link">
                            CLIENT
                        </a>
                    </div>
                    <div className="nav-item">
                    <AuthSup /> 
                    </div>
                    <div className="nav-item">
                        <a href="#contact" className="nav-link">
                            CONTACT
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    </nav>   

    <div className="container-fluid">
        
        <div className="d-sm-flex align-items-center justify-content-between mt-3 mb-4">
            <h1 className="h3 mb-0 text-gray-800 mx-3">Dashboard</h1>
            <button type="button" className="btn btn-outline-secondary px-5 mx-5" onClick = {()=>navigate("/supply/product")}>Check Product</button>
        </div>
        <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Earnings (Monthly)</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Earnings (Annual)</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                </div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                    </div>
                                    <div className="col">
                                        <div className="progress progress-sm mr-2">
                                            <div className="progress-bar bg-info task" role="progressbar"
                                                 aria-valuenow="50" aria-valuemin="100"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4 ">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="no-gutters align-items-center d-inline-flex py-3">
                            {/* <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1"> */}
                                    <h5 >Pending Requests</h5>
                                    {/* </div> */}
                                  <SupplierNavigate />
                            {/* </div> */}

              
                        </div>
                    </div>
                </div>
            </div>
        </div>                
        <div className="row">                    
            <div className="col-xl-6 col-lg-6">
                <div className="card shadow mb-4">                              
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Dropdown Header:</div>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                
                    <div className="card-body">
                        <div className="chart-area">
                            <canvas id="myAreaChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                    </div>
                    <div className="card-body">
                        <h4 className="small font-weight-bold">Server Migration <div
                                className="float-right">20%</div></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-danger pt-1" role="progressbar" 
                            
                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Sales Tracking <div
                                className="float-right">40%</div></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-warning pt-2" role="progressbar" 
                            // style="width: 40%"
                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Customer Database <div
                                className="float-right">60%</div></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar pt-3" role="progressbar" 
                            // style="width: 60%"
                                aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Payout Details <div
                                className="float-right">80%</div></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar pt-4 bg-info" role="progressbar" 
                            // style="width: 80%"
                                aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Account Setup <div
                                className="float-right">Complete!</div></h4>
                        <div className="progress"> 
                            <div className="progress-bar pt-5 bg-success" role="progressbar"
                            // style="width: 100%"
                                aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section id="contact" className="bg-dark text-light p-1 p-lg-1 text-sm-start">
      <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
              <img className="img-fluid w-25 d-none d-sm-block" src="https://drive.google.com/uc?export=view&id=1-C15KiR7dizJuCPqukVOYVgkMRL3u9V2" alt=""></img>
              <div className="w-50">
                  <h1 >CONTACT:</h1>
                  <div>
                      <div>This project is created after learning the concept of <a href="https://www.youtube.com/watch?v=4sosXZsdy-s" target="_blank" rel="noopener noreferrer">Bootstrap</a>,   
                          <a href="https://www.youtube.com/@DailyCodeBuffer" target="_blank" rel="noopener noreferrer">Spring Framework</a>. </div> <div>If you enjoy this app, contact me: </div>
                      <div>Name: Tran Ngoc Minh Song</div>
                      <div>SDT: 0934995090</div>
                      <div>Email: songtran91105712@gmail.com</div>
                      <div>LinkedIn: </div>
                  </div>
              </div> 
              
          </div>
      </div>
  </section>
  </div>




)
  }}

export default SupplierPage