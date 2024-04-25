import Cookies from 'js-cookie';
import React from 'react'
import CryptoJS from "crypto-js";

import { Navigate, Outlet } from 'react-router-dom';

const Publicroute = () => {
  // const loginData = JSON.parse(localStorage.getItem('loginfile')); // Correct way to get the stored data
  // const isAuthenticated = Boolean(loginData); // Convert to boolean to determine if the user is authenticated


  // return ( isAuthenticated ? <Navigate to={'/dashbord'}/> : <Outlet/> )
  
  
  

    
  const encryptedToken = Cookies.get('logindata') ;
  console.log(encryptedToken,"encryptedToken")
  if (encryptedToken)  {

    const bytes = CryptoJS.AES.decrypt(encryptedToken, 'secret_key');
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);

    const token = JSON.parse(decryptedToken);
    console.log(token,"iamchecked")

      return <Navigate to={'/dashbord'}/>
    } else {
      return <Outlet />;
    }

}

export default Publicroute
 