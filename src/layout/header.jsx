import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


  const Header = () => {
  const navigate = useNavigate()
  
  
  
  
 
  
  
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
    

   
    </div>
  )
}
export default Header
