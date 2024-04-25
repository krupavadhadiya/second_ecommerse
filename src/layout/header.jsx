import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


  const Header = () => {
  const navigate = useNavigate()
  
  
  const productListSearch = () => {

  }
  
  const logout = () => {
    
  }
 
  
  
  return (
    <div className="main-header">
      <div className="web-name">
        <h3>Ecommerse web</h3>
      </div>
      <div className="all-menu">
        <ul>
          <li >All product</li>
          <li>Product</li>
         
          <li>Aboutus</li>
          <li>Contact</li>
          <li >Order</li>
          <li >Recipes</li>
        </ul>
      </div>
    
      <div className="search-menu">
      <input
          type="text"
          placeholder="search"
          value='' 
          onChange={(e) => productListSearch(e.target.value)} 
        />
        <button onClick={logout}>Logout</button>
      </div>

   
    </div>
  )
}
export default Header
