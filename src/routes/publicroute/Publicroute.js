import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Publicroute = () => {
  const loginData = JSON.parse(localStorage.getItem('loginfile')); // Correct way to get the stored data
  const isAuthenticated = Boolean(loginData); // Convert to boolean to determine if the user is authenticated


  return ( isAuthenticated ? <Navigate to={'/dashbord'}/> : <Outlet/> )
  
  
}

export default Publicroute
 