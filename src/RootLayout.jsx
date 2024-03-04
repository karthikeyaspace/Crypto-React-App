import React from 'react'
import Navbar from './components/Navbar.jsx'


import Footer from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


function RootLayout() {


  return (
    <>
      <Navbar />
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default RootLayout
