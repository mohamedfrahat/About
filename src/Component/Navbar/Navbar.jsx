import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  let [scroll,setscroll] = useState('2rem');
  // console.log( window.scrollY); 
  window.onscroll = function() {change()};
  function change (){
    // console.log('heloooo');
    // console.log( window.scrollY);
    if( window.scrollY !=0)
    {
     setscroll('0rem');
    }
    else{
      setscroll('2rem');
    }
  }
 
 
  return (
    <>
      <nav className ="navbar navbar-expand-lg  fixed-top  "  style={{padding:scroll}} id='Nav'  >
  <div className ="container">
    <a className ="navbar-brand text-white " href="#">START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className ="nav-item">
          <NavLink className ="nav-link acti" aria-current="page" to={''}>ABOUT</NavLink>
        </li>
        <li className ="nav-item">
          <NavLink className ="nav-link " to={'/portfolio'}>PORTFOLIO</NavLink>
        </li>
        <li className ="nav-item">
          <NavLink className ="nav-link " id='contact' to={'/contact'}>CONTACT</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
