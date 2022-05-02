import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";

const CartItemsPrices = () => {
    const { User } = useSelector((state) => state.USER_LOGIN);
    const token = User?.token;
    const { Carts } = useSelector((state) => state.CART);
    let ListCart = [];
    let SubTotalCart = 0;
    let GrantTotalCart = 0;
    let shipmentCost = 50;

    Object.keys(Carts).forEach(function (item) {
        SubTotalCart += Carts[item].quantity * Carts[item].product_price;
        console.log("items", Carts[item].price);
    });
    GrantTotalCart = SubTotalCart + shipmentCost;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const CheckoutProsess = () => {
        if (!token) {
            handleShow();
        } else {
        }
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
                            <div className="cart-btn">
                                <button>Update Cart</button>
                                <button onClick={CheckoutProsess}>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>Hi</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CartItemsPrices;
