import React from "react";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartItems from "./components/widgets/Cart/CartItems";
import CartItemsPrices from "./components/widgets/Cart/CartItemsPrices";

const Cart = () => {
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
                    <div class="row">
                        <div class="col-lg-8">
                            <CartItems />
                        </div>
                        <div class="col-lg-4">
                            <CartItemsPrices />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
