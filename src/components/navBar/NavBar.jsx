import React from 'react'
import { Link } from 'react-router-dom'
// import classNamees from "./Navbar.module.css"

const NavBar = () => {
  return (
    <ul className='nav'>
      <li className='nav-item'>
        <Link id='home' className='nav-link' aria-current='page' to='/'>
          Главная
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/favorite'>
          Избранное
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/connect'>
          Присоединиться
        </Link>
      </li>
    </ul>
  )
}

export default NavBar
