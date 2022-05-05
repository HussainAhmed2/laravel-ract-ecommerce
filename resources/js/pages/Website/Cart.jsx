import React from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartItems from "./components/widgets/Cart/CartItems";
import CartItemsPrices from "./components/widgets/Cart/CartItemsPrices";

const Cart = () => {
    const { numberCart } = useSelector((state) => state.CART);
    return (
        <>
            <Header />
            <Breadcrumbs
                FirstUrl="Home"
                FistName="Home"
                SecondUrl="Products"
                SecondName="Products"
                CurrentName="Cart"
            />
            <div class="cart-page">
                <div class="container-fluid">
                    {numberCart == 0 ? (
                        <>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h4>Your Cart is Empty</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div class="row">
                                <div class="col-lg-8">
                                    <CartItems />
                                </div>
                                <div class="col-lg-4">
                                    <CartItemsPrices />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
