import React from "react";
import { useSelector } from "react-redux";

const CheckoutMethods = () => {
    const { Carts } = useSelector((state) => state.CART);

    let SubTotalCart = 0;
    let GrantTotalCart = 0;
    let shipmentCost = 50;

    Object.keys(Carts).forEach(function (item) {
        SubTotalCart += Carts[item].quantity * Carts[item].product_price;
    });
    GrantTotalCart = SubTotalCart + shipmentCost;

    return (
        <>
            <div className="checkout-inner">
                <div className="checkout-summary">
                    <h1>Cart Total</h1>
                    {Carts.map((item, index) => (
                        <>
                            <hr />
                            <p key={index}>
                                {item.product_name} = QTY({item.quantity})
                                <span>${item.product_price}</span>
                            </p>
                        </>
                    ))}

                    <p className="sub-total fw-bolder">
                        Sub Total
                        <span>
                            $ {Number(SubTotalCart).toLocaleString("en-US")}
                        </span>
                    </p>
                    <p className="ship-cost fw-bolder">
                        Shipping Cost<span>$50</span>
                    </p>
                    <h2>
                        Grand Total
                        <span>
                            ${Number(GrantTotalCart).toLocaleString("en-US")}
                        </span>
                    </h2>
                </div>
            </div>
        </>
    );
};

export default CheckoutMethods;
