import React from 'react'
import "./Navbar.scss"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav >
        <ul className='navbar'>
            {/* <li>Home</li>
            <li>Chuck Norris</li>
            <li>Excuses</li>
            <li>Cat</li> */}
  <Link to="/" style={{ textDecoration: 'none',color:"black" }}>Home</Link>
  <Link to="/cat" style={{ textDecoration: 'none',color:"black" }}>Cat Facts</Link>
  <Link to="/chuck" style={{ textDecoration: 'none',color:"black" }}>Chuck Norris Jokes</Link>
  <Link to="/excuse" style={{ textDecoration: 'none',color:"black" }}>Excuse Generator</Link>
        </ul>
    </nav>
  )
}

export default Navbar