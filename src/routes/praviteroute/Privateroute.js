import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Layout from '../../layout/Layout';

const Privateroute = () => {

  const loginData = JSON.parse(localStorage.getItem('loginfile')); // Correct way to get the stored data
  const isAuthenticated = Boolean(loginData); // Convert to boolean to determine if the user is authenticated


  if (isAuthenticated) {
    return <Wrapper />; 
  } else {
    return <Navigate to="/" replace />;
  } 
}


const Wrapper = () => (
  <Layout>
    <Outlet />
  </Layout>
);
export default Privateroute
