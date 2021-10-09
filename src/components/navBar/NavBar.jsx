import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from "./Navbar.module.css"

const NavBar = () => {
  return (
    <ul className={`nav container pt-5`}>
      <li className={`${classes.navLink}`}>
        <NavLink className={`${classes.navLinkItem}`} activeClassName={`${classes.active}`} exact aria-current='page' to='/'>
          Главная
        </NavLink>
      </li>
      <li className={`${classes.navLink}`}>
        <NavLink className={`${classes.navLinkItem}`} activeClassName={`${classes.active}`} to='/favorite'>
          Избранное
        </NavLink>
      </li>
      <li className={`${classes.navLink}`}>
        <NavLink className={`${classes.navLinkItem}`} activeClassName={`${classes.active}`} to='/connect'>
          Присоединиться
        </NavLink>
      </li>
    </ul>
  )
}

export default NavBar
