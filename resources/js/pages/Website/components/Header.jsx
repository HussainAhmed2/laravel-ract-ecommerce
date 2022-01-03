import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const url = process.env.MIX_APP_URL || "";
    const startScript = () => {
        const script = document.createElement("script");
        script.src = url + "public/WebsiteAssets/js/main.js";
        document.body.appendChild(script);
        console.log(script);
    };

    useEffect(() => {
        startScript();
    }, [url]);
    return (
        <>
            <div className="top-bar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <i className="fa fa-envelope"></i>
                            support@email.com
                        </div>
                        <div className="col-sm-6">
                            <i className="fa fa-phone-alt"></i>
                            +012-345-6789
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                        <a href="#" className="navbar-brand">
                            MENU
                        </a>
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse justify-content-between"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav mr-auto">
                                <Link
                                    to="Home"
                                    className="nav-item nav-link active"
                                >
                                    <a className="nav-item nav-link">Home</a>
                                </Link>
                                <Link
                                    to="Products"
                                    className="nav-item nav-link active"
                                >
                                    <a className="nav-item nav-link">
                                        Products
                                    </a>
                                </Link>
                            </div>
                            <div className="navbar-nav ml-auto">
                                <div className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        User Account
                                    </a>
                                    <div className="dropdown-menu">
                                        <Link
                                            to="Login"
                                            className="nav-item nav-link "
                                        >
                                            <a className="nav-item nav-link">
                                                Login & Register
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="logo">
                                <a href="index.html">
                                    <img
                                        src={
                                            url +
                                            "public/WebsiteAssets/img/logo.png"
                                        }
                                        alt="Logo"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <button>
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="user">
                                <a
                                    href="wishlist.html"
                                    className="btn wishlist"
                                >
                                    <i className="fa fa-heart"></i>
                                    <span>(0)</span>
                                </a>
                                <a href="cart.html" className="btn cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>(0)</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
