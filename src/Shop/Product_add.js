import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from 'react-oidc-context';
import useDrivePicker from 'react-google-drive-picker'
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Product = () => {

  const navigate = useNavigate()
    const auth = useAuth();
    const [imageName,setimageName] = useState({
      nam: ""
    })
    const [product,setProduct] = useState({
        name: "",
        quantity: "",
        prize: "",
        discount: "",
        description: "",
        image: ""
    })

    const HandleChange = (e) => {
        setProduct({
            ...product, [e.target.name] : e.target.value
        })
    }


  const Upimagename = (na) => {
    setimageName({...imageName,nam : na})
  }

  const Upimage = (url) => {
    setProduct({
      ...product, image : url
  })
  }

  const [openPicker, data, authResponse] = useDrivePicker();  
  const HandleOpenPicker = (e) => {
    openPicker({
      clientId: "118745910392-29cu8mtdg8tpdur0fk3d6b8nfi5hk9tb.apps.googleusercontent.com",
      developerKey: "AIzaSyBwy3bEK-LfzOwltGdk8uti9yz0aD9cNAU",
      viewId: "DOCS_IMAGES",
      // token: "ya29.a0AfB_byBXAdZVfgJ8Pv1YjKOV3clk6lcrwX1UBRNV6NIx_bvilyLWjjIVCSujitMn4XwIJcsagkorWGV5G9NKWzg3C93oVJiGIpfDuVC60xNPm_AQv14719OlgEk9-pw_uNVLsHNHbEfhHc4v92e3EsHdiArei1-FRmTOaCgYKAVMSARESFQGOcNnCs0jKKooDndtpJIqAo0uXzA0171",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        if (data.action === 'picked') {
          console.log(data.docs[0])
          Upimage(data.docs[0].id)
          Upimagename(data.docs[0].name)
        }
      },
    })

  }

    const SendProduct = () => {
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
            "name":product.name,
            "quantity": product.quantity,
            "prize" : product.prize,
            "discount": product.discount,
            "description": product.description,
            "image": product.image
          })  
        }
        fetch('http://localhost:8321/product/add',request)
            .then(response => response.json())
            .then(data => {
              if (data.confirm){
                setProduct({
                  name: "",
                  quantity: "",
                  prize: "",
                  discount: "",
                  description: "",
                  image: ""
                })
                setimageName({
                  nam:""
                })
                
                alert("Save Product Success")
            }
              else {
                alert("Product Exist ")
              }
          })
            .catch((e)=>{
              console.log(e)
            })
          
    }
    useEffect  (()=> {
      document.title="Product: Add"
    },[])

  

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }
  switch (auth.activeNavigator) {
      case "signinSilent":
          return <div>Signing you in...</div>;
      case "signoutRedirect":
          return <div>Signing you out...</div>;
  }
  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }
  if (!auth.isAuthenticated || (auth.isAuthenticated && jwtDecode(auth.user.access_token).resource_access.supply_client.roles.toString()!=='supply_client')){
    navigate("../app")
    alert("Not In Supply Account")
}

  else {
  return (
    <div>


<legend>PRODUCTS</legend>

<form>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Product Name</label>
    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Product Name"
     value = {product.name} onChange = {HandleChange} name = "name"/>
    <label htmlFor="formGroupExampleInput2">Product Quantity</label>
    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Product Quantity" 
    value = {product.quantity} onChange = {HandleChange} name = "quantity"/>

    <label htmlFor="formGroupExampleInput3">Product Prize</label>
    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Product Prize" 
    value = {product.prize} onChange = {HandleChange} name = "prize"/>

    <label htmlFor="formGroupExampleInput4">Product Discount</label>
    <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Product Discount" 
    value = {product.discount} onChange = {HandleChange} name = "discount"/>

    <label htmlFor="formGroupExampleInput5">Product Description</label>
    <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="Product Description" 
    value = {product.description} onChange = {HandleChange} name = "description"/>
  </div>
</form>

  <div className="col-md-4">
    <button name="image" value={product.image} onClick = {HandleOpenPicker} >Add image </button>
    <a>  {imageName.nam}</a>
  </div>
    <a>Submit</a>
  <div className="col-md-4 ">
    <button type="button" onClick = {SendProduct}>Submit</button>
  </div>
    </div>
  )
}}

export default Product