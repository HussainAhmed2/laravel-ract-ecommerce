import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    DecreaseQuantity,
    DeleteCart,
    IncreaseQuantity,
} from "../../../../../Redux/Actions/Cart.Actions";

const CartItems = () => {
    const { Carts } = useSelector((state) => state.CART);
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(Carts).forEach(function (item) {
        TotalCart += Carts[item].quantity * Carts[item].price;
        ListCart.push(Carts[item]);
    });

    function TotalPrice(price, quantity) {
        return Number(price * quantity).toLocaleString("en-US");
    }

    const dispatch = useDispatch();
    const url = process.env.MIX_APP_URL || "";
    console.log("Cart items", Carts);

    return (
        <>
            <div className="cart-page-inner">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">
                            {Carts.map((item, index) => (
                                <>
                                    <tr key={index}>
                                        <td>
                                            <div className="img">
                                                <a href="#">
                                                    <img
                                                        src={
                                                            url +
                                                            "public/uploads/images/" +
                                                            item.product_image
                                                        }
                                                        alt="Product Image"
                                                    />
                                                </a>
                                                <p>{item.product_name}</p>
                                            </div>
                                        </td>
                                        <td>$ {item.product_price} </td>
                                        <td>
                                            <div className="qty">
                                                <button
                                                    className="btn-minus"
                                                    onClick={() =>
                                                        dispatch(
                                                            DecreaseQuantity(
                                                                index
                                                            )
                                                        )
                                                    }
                                                >
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                                <input
                                                    type="text"
                                                    value={item.quantity}
                                                />
                                                <button
                                                    className="btn-plus"
                                                    onClick={() =>
                                                        dispatch(
                                                            IncreaseQuantity(
                                                                index
                                                            )
                                                        )
                                                    }
                                                >
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            ${" "}
                                            {TotalPrice(
                                                item.product_price,
                                                item.quantity
                                            )}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    dispatch(DeleteCart(index))
                                                }
                                            >
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CartItems;
