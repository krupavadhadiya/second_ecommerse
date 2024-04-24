import React from 'react'
import Header from './header'


function Layout({ children,title }) {
  console.log("a haloooooooooooooooo")
  return (
    <>
      <div className="main-admin">
        <div className="inner-div">
            <div className='buutton-cls' style={{width:'100%'}}>
            <Header/>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
