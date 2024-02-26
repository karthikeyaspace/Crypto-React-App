import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Featured from './components/Featured.jsx'
import Signup from './components/Signup.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </BrowserRouter>
  )
}

export default App
