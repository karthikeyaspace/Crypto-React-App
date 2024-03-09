import React, { useState } from "react";
import Bars from '../assets/bars.png'

import './Navbar.css'
import { HashLink as Link } from "react-router-hash-link";


function Navbar() {
  const [menu, showMenu] = useState(false)
  const handleClick = () => showMenu(!menu)

  return (

    <div className="header" >
      <div className="container">
        <h1 >Crypt0<span className="primary">Know</span></h1>
        <ul className={menu ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to='/#hero' onClick={handleClick} smooth>Home</Link>
          </li>
          <li>
            <Link to='/#featured' onClick={handleClick} smooth>About</Link>
          </li>
          <li>
            <Link to='/#signup' onClick={handleClick} smooth>Services</Link>
          </li>
          <li>
            <Link to='/#footer' onClick={handleClick}  smooth>Contact</Link>
          </li>
          <li>
            <Link to='/coins' onClick={handleClick}  smooth>All Coins</Link>
          </li>
        </ul>
        

        <div className="bars" onClick={handleClick}> <img src={Bars} alt="" /> </div>

      </div>
    </div>

  )
}

export default Navbar