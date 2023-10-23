import React, { useEffect } from 'react'
import { useAuth } from 'react-oidc-context'
import MainNavigate from './component/MainNavigate'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import { AuthProvider } from "react-oidc-context";


const Main = () => {

    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Song Demo"
        if (window.location.href !== "http://localhost:8000/app") {
            window.location.replace("http://localhost:8000/app")
        }
    })


    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-success py-2">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        SONG SERVICES DEMO
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <div className="navbar-toggler-icon"></div>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                        
                                <a onClick={()=>navigate('../user')} type ="button"className="nav-link" >
                                    USER
                                </a>
                           
                           
                                <a onClick={()=>navigate('../supply')} type="button" className="nav-link" >
                                    SERVICE
                                </a>
                          
                    
                                <a href="#contact" className="nav-link">
                                    CONTACT
                                </a>
                          
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="bg-dark text-light p-5 p-lg-4 text-sm-start">
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <div className="w-75">
                            <h1 className="text-warning">About The Service</h1>
                            <div className="lead my-4">
                                <div className="blue"><div>This page is created by React, Bootstrap for Frontend and some API for Backend:</div></div>
                                <div>REST API with Relative Database (Postgresql) and Non-SQL (MongodB)</div>
                                <div>Use OAUth2.0 Server to authorize and implement Log in with SSL using</div>
                                <div>Build microservice with API gateway, use Kafka to handle the message between services</div>
                                <div>Trace with Zipkin, build cache with NGINX</div>
                                You can try the Client-Supplier Service with the button below and watch how server control
                            </div>

                            <MainNavigate />

                        </div>
                        <img className="img-fluid w-25 d-none d-sm-block" src="https://drive.google.com/uc?export=view&id=1-9XWuKcPncZ_KqUH2WLwFjYMoHNPe852" alt="Microservice Image"></img>
                    </div>
                </div>
            </section>
            <section className="bg-secondary text-light p-3">
                <div className="container">
                    <div className="d-md-flex  justify-content-between align-items-center">
                        <h3 className="mb-3 mb-md-0">
                            Watch Client Service Control:
                        </h3>
                    </div>
                </div>
            </section>

            <section className="p-5">
                <div className="container">
                    <div className="row text-center" >
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-door-open"></i>
                                    </div>
                                    <div className="card-text">
                                        Portgresql, OAuth2, SSL-JWT
                                    </div>
                                    <button className="btn btn-secondary">
                                        User Register Database
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-bar-chart-fill"></i>
                                    </div>
                                    <div className="card-text">
                                        Portgresql
                                    </div>
                                    <button className="btn btn-secondary">
                                        Client Request Tracking
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-eyeglasses"></i>
                                    </div>
                                    <div className="card-text">
                                        Zipkin
                                    </div>
                                    <button className="btn btn-secondary">
                                        Client Tracing
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-secondary text-light p-3">
                <div className="container">
                    <div className="d-md-flex  justify-content-between align-items-center">
                        <h3 className="mb-3 mb-md-0">
                            Watch Supplier Control Service
                        </h3>
                    </div>
                </div>
            </section>

            <section className="p-5">
                <div className="container">
                    <div className="row text-center" >
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-door-open"></i>
                                    </div>
                                    <div className="card-text">
                                        MongoDB, OAuth2, SSL-JWT
                                    </div>
                                    <button className="btn btn-secondary">
                                        Supplier Register Database
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-bar-chart-fill"></i>
                                    </div>
                                    <div className="card-text">
                                        MongoDB
                                    </div>
                                    <button className="btn btn-secondary">
                                        Client Request Tracking from Supplier
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-eyeglasses"></i>
                                    </div>
                                    <div className="card-text">
                                        Zipkin
                                    </div>
                                    <button className="btn btn-secondary">
                                        Supplier Tracing
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-secondary text-light p-3">
                <div className="container">
                    <div className="d-md-flex  justify-content-between align-items-center">
                        <h3 className="mb-3 mb-md-0">
                            Another Service
                        </h3>
                    </div>
                </div>
            </section>

            <section className="p-5">
                <div className="container">
                    <div className="row text-center" >
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-bar-chart-line-fill"></i>
                                    </div>
                                    <div className="card-text">
                                        Postgresql, OAuth2, SSL-JWT
                                    </div>
                                    <button className="btn btn-secondary">
                                        Supplier Ready Database
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-door-open"></i>
                                    </div>
                                    <div className="card-text">
                                        NGINX cache
                                    </div>
                                    <button className="btn btn-secondary">
                                        NGINX Control
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-door-open"></i>
                                    </div>
                                    <div className="card-text">
                                        Kafka Microservice
                                    </div>
                                    <button className="btn btn-secondary">
                                        Kafka Control
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="bg-dark text-light p-5 p-lg-4 text-sm-start">
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
        </div>)
}

export default Main