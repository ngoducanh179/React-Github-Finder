import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <ul className="nav nav-tabs bg-success">
        <li className="nav-item">
          <Link className="nav-link text-light" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">My Facebook</a>

        </li>
      </ul>
    </div>
  )
}

export default Navbar
