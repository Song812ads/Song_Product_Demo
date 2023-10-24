import {  Route, Routes,BrowserRouter} from "react-router-dom";
import Main from './Main';
import SupplierPage from "../Shop/SupplierPage";
import { AuthProvider } from "react-oidc-context";
import User from "../User/User";
import ProductPage from "../User/ProductPage"
import Thanhtoan from "../User/Thanhtoan";
import Product_add from "../Shop/Product_add";
import Product from "../Shop/Product";
import Product_change from "../Shop/Product_change";
import React from "react";

function App() {

  const client_settings = {
    authority: 'http://localhost:8920/auth/realms/Song_control',
    client_secret: 'ueBfrRsvZeCDCKx6MuQAwasF9rSqRGKV',
    response_mode:'query',
    client_id: 'song_client',
    redirect_uri: 'https://song812ads.github.io/Song_Product_Demo/user',
    post_logout_redirect_uri:'https://song812ads.github.io/Song_Product_Demo/user',
    // redirect_uri: 'https://localhost:3000/Song_Product_Demo/user',
    // post_logout_redirect_uri:'https://localhost:3000/Song_Product_Demo/user',
    response_type: 'code',
    resource_access: {
      "song_client": {
        "roles": [
          "client_user"
        ]
      }},

  };

  const supply_settings = {
    authority: 'http://localhost:8920/auth/realms/Song_supply',
    client_secret: 'dgvVF4zg7mIa4NhK57mY7GOoNwxyGjUU',
    response_mode:'query',
    client_id: 'supply_client',
    redirect_uri: 'https://song812ads.github.io/Song_Product_Demo/supply',
    post_logout_redirect_uri:'https://song812ads.github.io/Song_Product_Demo',
    // redirect_uri: 'https://localhost:3000/Song_Product_Demo/supply',
    // post_logout_redirect_uri:'https://localhost:3000/Song_Product_Demo',
    response_type: 'code',
    resource_access: {
        "song_supply": {
          "roles": [
            "supply_client"
          ]
        }},
  }

  return(
    <div className="App">    
        <BrowserRouter basename="/Song_Product_Demo">
          <Routes>
            <Route path="" element={<Main />}/>
            <Route path="/user/*" element = {<AuthProvider {...client_settings}><User /></AuthProvider>}/>
            <Route path="/user/product/*" element = {<AuthProvider {...client_settings}><ProductPage /></AuthProvider>}/>
            <Route path="/user/pay/*" element={<AuthProvider {...client_settings}><Thanhtoan/></AuthProvider>}/>
            <Route path="/supply" element = {<AuthProvider {...supply_settings}><SupplierPage /></AuthProvider>}/>
            <Route path="/supply/product/*" element = {<AuthProvider {...supply_settings}><Product /></AuthProvider>}/>
            <Route path="/supply/product/add/*" element = {<AuthProvider {...supply_settings}><Product_add /></AuthProvider>}/>
            <Route path="/supply/product/change/*" element = {<AuthProvider {...supply_settings}><Product_change /></AuthProvider>}/>
            {/* <Route path="/Song_Product_Demo/*" element={<Main />}/> */}
          </Routes>
        </BrowserRouter>  
    </div>
  )
}

export default App;
