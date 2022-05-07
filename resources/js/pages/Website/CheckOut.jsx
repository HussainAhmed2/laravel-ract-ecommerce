import React from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CheckoutForm from "./components/widgets/Checkout/CheckoutForm";
import CheckoutMethods from "./components/widgets/Checkout/CheckoutMethods";

const CheckOut = () => {
    return (
        <>
            <Header />
            <Breadcrumbs
                FirstUrl="Home"
                FistName="Home"
                SecondUrl="Cart"
                SecondName="Cart"
                CurrentName="Checkout"
            />
            <div className="checkout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <CheckoutForm />
                        </div>
                        <div className="col-lg-4">
                            <CheckoutMethods />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CheckOut;
