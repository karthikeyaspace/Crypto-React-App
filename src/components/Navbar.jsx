import React, { useState } from "react";
import Bars from '../assets/bars.png'

import './Navbar.css'
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


function Navbar() {
  const [menu, showMenu] = useState(false)
  const handleClick = () => showMenu(!menu)

  return (

    <div className="header" >
      <div className="container">
        <h1 >C<span className="primary">rypto</span></h1>
        <ul className={menu ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to='#hero' smooth>Home</Link>
          </li>
          <li>
            <Link to='#featured' smooth>About</Link>
          </li>
          <li>
            <Link to='#signup' smooth>Services</Link>
          </li>
          <li>
            <Link to='#footer' smooth>Contact</Link>
          </li>
        </ul>
        

        <div className="bars" onClick={handleClick}> <img src={Bars} alt="" /> </div>

      </div>
    </div>

  )
}

export default Navbar