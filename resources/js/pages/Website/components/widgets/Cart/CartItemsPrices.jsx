import React from "react";
import { useSelector } from "react-redux";

const CartItemsPrices = () => {
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
                                <button>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItemsPrices;
