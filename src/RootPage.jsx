import React from 'react'
import Hero from './components/Hero.jsx'
import Featured from './components/Featured.jsx'
import Signup from './components/Signup.jsx'
import { BrowserRouter } from 'react-router-dom'

function RootPage() {
  

  return (
    <>
    {/* <BrowserRouter> */}
      <Hero />
      <Featured />
      <Signup />
    {/* </BrowserRouter> */}
    </>
  )
}

export default RootPage
