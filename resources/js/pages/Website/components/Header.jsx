import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
    fetchUserWishlistAction,
    logOutAction,
} from "../../../Redux/Actions/User.Actions";
import Swal from "sweetalert2";

const Header = () => {
    const { User } = useSelector((state) => state.USER_LOGIN);
    const { Wishlist } = useSelector((state) => state.USER_WISHLIST);
    const { numberCart } = useSelector((state) => state.CART);
    const [isWishlistloaded, setIsWishlistloaded] = React.useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const token = User?.token;
    const userid = User.user.id;
    const url = process.env.MIX_APP_URL || "";
    let any_dir = process.env.MIX_SUB_DIR || "";
    const startScript = () => {
        const script = document.createElement("script");
        script.src = url + "public/WebsiteAssets/js/main.js";
        document.body.appendChild(script);
        console.log(script);
    };

    const logOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be Log out from this Webiste!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(logOutAction(history));
            }
        });
    };

    useEffect(() => {
        startScript();
        dispatch(fetchUserWishlistAction(token, userid)).then(() => {
            setIsWishlistloaded(true);
        });
    }, [isWishlistloaded]);
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
                                    to={"/" + any_dir + "Home"}
                                    className="nav-item nav-link active"
                                >
                                    <a className="nav-item nav-link">Home</a>
                                </Link>
                                <Link
                                    to={"/" + any_dir + "Products"}
                                    className="nav-item nav-link active"
                                >
                                    <a className="nav-item nav-link">
                                        Products
                                    </a>
                                </Link>
                                {token ? (
                                    <>
                                        <Link
                                            to={"/" + any_dir + "MyAccount"}
                                            className="nav-item nav-link active"
                                        >
                                            <a className="nav-item nav-link">
                                                My Account
                                            </a>
                                        </Link>
                                    </>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="navbar-nav ml-auto">
                                {token ? (
                                    <>
                                        <Link
                                            onClick={() => {
                                                if (
                                                    window.confirm(
                                                        "Do You Want To Logout?"
                                                    )
                                                ) {
                                                    dispatch(
                                                        logOutAction(history)
                                                    );
                                                }
                                            }}
                                        >
                                            <a
                                                href="#"
                                                className="btn btn-danger"
                                            >
                                                Log Out
                                            </a>
                                        </Link>
                                    </>
                                ) : (
                                    <>
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
                                    </>
                                )}
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
                                {!isWishlistloaded ? (
                                    <></>
                                ) : (
                                    <>
                                        <Link
                                            to={"/" + any_dir + "Wishlist"}
                                            href="wishlist.html"
                                            className="btn wishlist"
                                        >
                                            <i className="fa fa-heart"></i>
                                            <span>
                                                ({Wishlist[0].wishlists.length})
                                            </span>
                                        </Link>
                                    </>
                                )}

                                <Link
                                to={"/" + any_dir + "Cart"}
                                className="btn cart">
                                    <i className="fa fa-shopping-cart"></i>
                                    <span>({numberCart})</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
