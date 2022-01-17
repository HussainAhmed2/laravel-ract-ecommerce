import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <>

     <nav className="sidebar sidebar-offcanvas mt-4 pt-4" id="sidebar">
        <ul className="nav">
        <li className="nav-item">
          <Link to="Dashboard">
              <a className="nav-link">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </a>
              </Link>
            </li>
          <li className="nav-item">
              <Link to="ProductsList">
              <a className="nav-link">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Products</span>
            </a>
              </Link>

          </li>

        </ul>
      </nav>

        </>
    )
}

export default SideBar
