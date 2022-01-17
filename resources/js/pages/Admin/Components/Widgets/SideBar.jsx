import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("admin/");

    return (
        <>
            <nav className="sidebar sidebar-offcanvas mt-4 pt-4" id="sidebar">
                <ul className="nav">
                    <li
                        className={
                            splitLocation[1] === "Dashboard"
                                ? "nav-item active"
                                : "nav-item"
                        }
                    >
                        <Link to="Dashboard">
                            <a className="nav-link">
                                <i className="icon-grid menu-icon"></i>
                                <span className="menu-title">Dashboard</span>
                            </a>
                        </Link>
                    </li>
                    <li
                        className={
                            splitLocation[1] === "ProductsList"
                                ? "nav-item active"
                                : "nav-item"
                        }
                    >
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
    );
};

export default SideBar;
