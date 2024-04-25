import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Layout from '../../layout/Layout';
import Cookies from 'js-cookie';
import CryptoJS from "crypto-js";


const cookies = Cookies;

const Privateroute = () => {

  // const loginData = JSON.parse(localStorage.getItem('loginfile')); 
  // const isAuthenticated = Boolean(loginData); 


  // if (isAuthenticated) {
  //   return <Wrapper />; 
  // } else {
  //   return <Navigate to="/" replace />;
  // } 




      const encryptedToken = Cookies.get('logindata');
  console.log("Encrypted token: " , encryptedToken)
  
  if (encryptedToken) {
   
    const bytes = CryptoJS.AES.decrypt(encryptedToken, 'secret_key');
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);

    console.log("decryptedToken",decryptedToken)
    
    const auth = JSON.parse(decryptedToken);
    console.log(auth,"auth")
    
    if (auth) {
      return <Wrapper/>;
    } else {
     
      return <Navigate to="/" replace />;
    }
  } 








}


const Wrapper = () => (
  <Layout>
    <Outlet />
  </Layout>
);
export default Privateroute
