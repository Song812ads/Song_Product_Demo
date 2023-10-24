import React from 'react'
import './shop.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuth } from 'react-oidc-context'
const Product = () => {

  const [data,setdata] = useState(null);
  const [valfetch,setfetch] = useState(true);
  const navigate = useNavigate();
  const auth = useAuth();

  async function handleErase(item){
    const number = parseInt(item, 10)
    const request = {
      method: 'POST',
      statusCode: 200,
      headers: {
          'Access-Control-Allow-Origin' : 'origin',
          'Access-Control-Allow-Headers':'Content-Type, Authorization,X-Api-Key,X-Amz-Security-Token',
          'Access-Control-Allow-Credentials' : true,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + auth.user.access_token
  },
    body:JSON.stringify({
      "id":number,
    })  
  }
  await fetch('http://localhost:8321/product/add',request)
      .then(response => {
        if (response.ok){
          alert("Erase Product Success")
          myFetch()
      }
        else {
          alert("Erase Error ")
        }
    })
      .catch((e)=>{
        console.log(e)
      })    
}

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
  }}
        await fetch('http://localhost:8060/product/all',request)
        .then((response)=>response.json())
        .then((response)=>{
          document.title="Product"
          setdata(response)
        })
        .catch((e)=>{
          alert("Fetch resource fail")
          navigate("../supply")
        })
}
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

if (!auth.isAuthenticated){
  navigate('../Song_Product_Demo')
}

if ((data === null) && (auth.isAuthenticated)){
  setfetch(true)
  return <div>Fetching data ... </div>
}

else {
    const ProductItem = data.map(item =>
      <div className="row justify-content-center mb-3" key={item.id}>
        <div className="col-md-12 col-xl-10">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface">
                    <img src={"https://drive.google.com/uc?export=view&id="+ item.image}
                      className="img-thumbnail float-start" />
                    <a href="#!">
                      <div className="hover-overlay">
                        <div className="mask back" ></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <h5>{item.name}</h5>
                  <div className="d-flex flex-row">
                    <div className="text-danger mb-1 me-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <div>Số lượng: {item.quantity}</div>
                  </div>
                  <p className="text-truncate mb-4 mb-md-0">
                  Thông tin sản phẩm:  {item.description}
                  </p>
                </div>
                <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">{item.discount}</h4>
                    <div className="text-danger"><s>{item.prize}</s></div>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="d-flex flex-column mt-4">
                    <button className="btn btn-primary btn-sm" onClick={()=>{navigate("/supply/product/change?id="+item.id)}}>Thay đổi thông tin</button>
                    <button className="btn btn-outline-primary btn-sm mt-2" onClick ={()=>{handleErase(item.id)}}  type="button">
                      Xóa sản phẩm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  return (
    <div>
<section clas="ground">
<button type="button" className="btn btn-outline-secondary px-5 mx-5" onClick = {()=>navigate("/supply/product/add")}>Add more Product</button>
  <div className="container py-5">
    <div>{ProductItem}</div>
  </div>
</section>
    </div>
  )
}

}

export default Product