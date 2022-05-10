import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { user_login_model } from "../../../../../Redux/Actions/User.Actions";

const CartItemsPrices = () => {
    const { User } = useSelector((state) => state.USER_LOGIN);
    const token = User?.token;

    const dispatch = useDispatch();
    const [isSubmit, setIsSubmit] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [LoginEmail, setLoginEmail] = React.useState();
    const [LoginPassword, setLoginPassword] = React.useState();

    const history = useHistory();

    const { Carts } = useSelector((state) => state.CART);
    let SubTotalCart = 0;
    let GrantTotalCart = 0;
    let shipmentCost = 50;

    Object.keys(Carts).forEach(function (item) {
        SubTotalCart += Carts[item].quantity * Carts[item].product_price;
    });
    GrantTotalCart = SubTotalCart + shipmentCost;

    const CheckOutProcess = (e) => {
        e.preventDefault();
        if (!token) {
            handleShow(true);
        } else {
            history.push("checkout");
        }
    };

    const SubmitLogin = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        const postData = new FormData();
        postData.append("email", LoginEmail);
        postData.append("password", LoginPassword);
        dispatch(user_login_model(postData, history)).then(() => {
            setIsSubmit(false);
        });
    };

    return (
        <>
            <div className="cart-page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <div className="cart-summary">
                            <div className="cart-content">
                                <h1>Cart Summary</h1>
                                <p>
                                    Sub Total
                                    <span>
                                        ${" "}
                                        {Number(SubTotalCart).toLocaleString(
                                            "en-US"
                                        )}
                                    </span>
                                </p>
                                <p>
                                    Shipping Cost<span>${shipmentCost}</span>
                                </p>
                                <h2>
                                    Grand Total
                                    <span>
                                        ${" "}
                                        {Number(GrantTotalCart).toLocaleString(
                                            "en-US"
                                        )}
                                    </span>
                                </h2>
                            </div>
                            <div className="cart-btn d-flex">
                                <button>Clear Cart</button>
                                <button>
                                    <Link
                                        className="btn btn-block"
                                        onClick={CheckOutProcess}
                                    >
                                        CheckOut
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        For CheckOut Process you need to login with your account
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="login-form">
                        <div className="row">
                            <div className="col-md-6">
                                <label>E-mail / Username</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="E-mail / Username"
                                    onChange={(e) =>
                                        setLoginEmail(e.target.value)
                                    }
                                />
                            </div>
                            <div className="col-md-6">
                                <label>Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setLoginPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={SubmitLogin}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CartItemsPrices;
