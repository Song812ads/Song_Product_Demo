import React from 'react'
import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { useAuth } from 'react-oidc-context'
import '../User/user.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import Loginout from './Loginout'
import { useState } from 'react'

const User = () => {
  const [data,setdata] = useState(null);
  const [valfetch,setfetch] = useState(true);
  const navigate = useNavigate();
  const auth = useAuth();
  async function myFetch (){
    const request = {
      method: 'GET',
      statusCode: 200,
      headers: {
          'Access-Control-Allow-Origin' : 'origin',
          'Access-Control-Allow-Headers':'Content-Type, Authorization,X-Api-Key,X-Amz-Security-Token',
          'Access-Control-Allow-Credentials' : true,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + auth.user.access_token
  }
  }
        await fetch('http://localhost:8060/app/user/fetch',request)
        .then((response)=>response.json())
        .then((response)=>{
          document.title="User: Service"
          setdata(response)
        })
        .catch((e)=>{
          alert("Fetch resource fail")
          navigate("../user")
        })}
  
  useEffect(()=> {

    if (auth.isAuthenticated && valfetch===true){
        myFetch()
        setfetch(false)
        }
  }
,[auth,data])

if (auth.isLoading){
  return <div>Loading....</div>
}
  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }
if ((data === null) && (auth.isAuthenticated)){
  return <div>Fetching data ... </div>
}
  else {

    // const ProductItem = data.map(item=>
    //   )

    return (
<div>
<header>
  <div className="p-3 text-center bg-white border-bottom">
    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-2 col-sm-4 col-4">
          <h4 role="button" onClick = {()=>navigate("../app")}>
            SONG DEMO
          </h4>
        </div>
        <div className="order-lg-last col-lg-5 col-sm-8 col-8">
          <div className="d-flex float-end">
          <Loginout />
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-2  border rounded px-2 nav-link d-flex align-items-center" target="_blank"> 
            <i className="bi bi-chat me-md-2"></i><div className="d-none d-md-block mb-0">Chatbox</div>
            </a>
            <a href="https://github.com/mdbootstrap/bootstrap-material-design" className="me-2  border rounded px-2 nav-link d-flex align-items-center" target="_blank"> <i className="fas fa-shopping-cart m-1 me-md-2"></i>
            <i className="bi bi-person me-md-2 mb-1"></i>  <div className="d-none d-md-block mb-0">My cart</div>
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-1 col-5">
        <div className="input-group rounded">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button type="button" className="btn btn-primary">
            <i className="bi bi-search"></i>
        </button>
        </div>
        </div>
      </div>
    </div>
  </div>

  <nav className="navbar navbar-expand-lg navbar-light bg-white">
  
    <div className="container justify-content-center justify-content-md-between">

      <button className="navbar-toggler border py-2 text-dark" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarLeftAlignExample" aria-controls="navbarLeftAlignExample" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
      </button>

     
      <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
        
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link text-dark" >  {(auth.isAuthenticated)?"Hello "+auth.user.profile.name:""}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Categories</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Hot offers</a>
          </li>
    
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              Others
            </a>
        
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">Action</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Another action</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
        </ul>
     
      </div>
    </div>

  </nav>

  <div className="bg-primary text-white py-5">
    <div className="container py-5">
      <h1>
        Best products & <br />
        brands in our store
      </h1>
      <div>
        Trendy Products, Factory Prices, Excellent Service
      </div>
      <button type="button" className="btn btn-outline-light">
        Learn more
      </button>
      <button type="button" className="btn btn-light shadow-0 text-primary px-2 border border-white">
        <div className="px-2">Purchase now</div>
      </button>
    </div>
  </div>
 
</header>

<section>
  <div className="container my-5">
    <header className="mb-4">
      <h3>New products</h3>
    </header>
    <div className="row" >
      <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
        <div className="card w-100 my-2 shadow-2-strong">
          <img  type="button" className="card-img-top image" onClick={()=>{navigate("/user/product")}} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title"></h5>
            <div className="card-text"></div>
            <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
              <a href="#!" className="btn btn-primary shadow-0 me-1">Add to cart</a>
              <a href="#!" className="btn btn-light border px-2 pt-2 icon-hover"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="mt-5 background">
  <div className="container text-dark pt-3">
    <header className="pt-4 pb-3">
      <h3>Why choose us</h3>
    </header>

    <div className="row mb-4">
      <div className="col-lg-4 col-md-6">
        <figure className="d-flex align-items-center mb-4">
          <div className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
            <i className="fas fa-camera-retro fa-2x fa-fw text-primary floating"></i>
          </div>
          <figcaption className="info">
            <h6 className="title">Reasonable prices</h6>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</div>
          </figcaption>
        </figure>
      
      </div>
     
      <div className="col-lg-4 col-md-6">
        <figure className="d-flex align-items-center mb-4">
          <div className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
            <i className="fas fa-star fa-2x fa-fw text-primary floating"></i>
          </div>
          <figcaption className="info">
            <h6 className="title">Best quality</h6>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</div>
          </figcaption>
        </figure>
       
      </div>

      <div className="col-lg-4 col-md-6">
        <figure className="d-flex align-items-center mb-4">
          <div className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
            <i className="fas fa-plane fa-2x fa-fw text-primary floating"></i>
          </div>
          <figcaption className="info">
            <h6 className="title">Worldwide shipping</h6>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</div>
          </figcaption>
        </figure>
     
      </div>
 
      <div className="col-lg-4 col-md-6">
        <figure className="d-flex align-items-center mb-4">
          <div className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
            <i className="fas fa-users fa-2x fa-fw text-primary floating"></i>
          </div>
          <figcaption className="info">
            <h6 className="title">Customer satisfaction</h6>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</div>
          </figcaption>
        </figure>
      
      </div>
    
      <div className="col-lg-4 col-md-6">
        <figure className="d-flex align-items-center mb-4">
          <div className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
            <i className="fas fa-thumbs-up fa-2x fa-fw text-primary floating"></i>
          </div>
          <figcaption className="info">
            <h6 className="title">Happy customers</h6>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</div>
          </figcaption>
        </figure>
      
      </div>

      <div className="col-lg-4 col-md-6">
        <figure className="d-flex align-items-center mb-4">
          <div className="rounded-circle bg-white p-3 d-flex me-2 mb-2">
            <i className="fas fa-box fa-2x fa-fw text-primary floating"></i>
          </div>
          <figcaption className="info">
            <h6 className="title">Thousand items</h6>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</div>
          </figcaption>
        </figure>
       
      </div>
    
    </div>
  </div>

</section>

<section className="mt-5 mb-4">
  <div className="container text-dark">
    <header className="mb-4">
      <h3>Blog posts</h3>
    </header>

    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <article>
          <a href="#" className="img-fluid">
            <img className="rounded w-100 fit" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/1.webp"  height="160" />
          </a>
          <div className="mt-2 text-muted small d-block mb-1">
            <div>
              <i className="fa fa-calendar-alt fa-sm"></i>
              23.12.2022
            </div>
            <a href="#">
              <h6 className="text-dark">How to promote brands</h6>
            </a>
            <div>When you enter into any new area of science, you almost reach</div>
          </div>
        </article>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <article>
          <a href="#" className="img-fluid">
            <img className="rounded w-100 fit " src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/2.webp"  height="160" />
          </a>
          <div className="mt-2 text-muted small d-block mb-1">
            <div>
              <i className="fa fa-calendar-alt fa-sm"></i>
              13.12.2022
            </div>
            <a href="#">
              <h6 className="text-dark">How we handle shipping</h6>
            </a>
            <div>When you enter into any new area of science, you almost reach</div>
          </div>
        </article>
      </div>
    
      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <article>
          <a href="#" className="img-fluid">
            <img className="rounded w-100 fit" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/3.webp"  height="160" />
          </a>
          <div className="mt-2 text-muted small d-block mb-1">
            <div>
              <i className="fa fa-calendar-alt fa-sm"></i>
              25.11.2022
            </div>
            <a href="#">
              <h6 className="text-dark">How to promote brands</h6>
            </a>
            <div>When you enter into any new area of science, you almost reach</div>
          </div>
        </article>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-6 col-12">
        <article>
          <a href="#" className="img-fluid">
            <img className="rounded w-100 fit" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/4.webp"  height="160" />
          </a>
          <div className="mt-2 text-muted small d-block mb-1">
            <div>
              <i className="fa fa-calendar-alt fa-sm"></i>
              03.09.2022
            </div>
            <a href="#">
              <h6 className="text-dark">Success story of sellers</h6>
            </a>
            <div>When you enter into any new area of science, you almost reach</div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<footer className="text-center text-lg-start text-muted mt-3 background" >

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
</footer>
</div>
    )
}
}

export default User