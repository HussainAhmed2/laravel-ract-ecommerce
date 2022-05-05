import React from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";

const OrderConfirm = () => {
    const { User } = useSelector((state) => state.USER_LOGIN);
    const token = User?.token;
    const order_no = localStorage.getItem("order_no");
    const auth = () => {
        if (!token) {
            history.push("login");
        }
    };

    React.useEffect(() => {
        auth();
    }, [token]);

    return (
        <>
            <Header />
            <Breadcrumbs
                FirstUrl="Home"
                FistName="Home"
                CurrentName="Order Confirm"
            />
            <div className="product-view">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="card mt-50 mb-50">
                                <div className="col d-flex">
                                    <span className="text-muted" id="orderno">
                                        order #{order_no}
                                    </span>
                                </div>
                                <div className="gap">
                                    <div className="col-2 d-flex mx-auto">
                                        {" "}
                                    </div>
                                </div>
                                <div className="title mx-auto">
                                    {" "}
                                    Thank you for your order!{" "}
                                </div>
                                <div className="main">
                                    {" "}
                                    <span id="sub-title">
                                        <p>
                                            <b>Payment Summary</b>
                                        </p>
                                    </span>
                                    <div className="row row-main">
                                        <div className="col-3">
                                            {" "}
                                            <img
                                                className="img-fluid"
                                                src="https://i.imgur.com/qSnCFIS.png"
                                            />{" "}
                                        </div>
                                        <div className="col-6">
                                            <div className="row d-flex">
                                                <p>
                                                    <b>iPhone XR</b>
                                                    <strong className="px-2">
                                                        (2)
                                                    </strong>
                                                </p>
                                            </div>
                                            <div className="row d-flex">
                                                <p className="text-muted">
                                                    128GB White
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-3 d-flex justify-content-end">
                                            <p>
                                                <b>$599</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row row-main">
                                        <div className="col-3">
                                            {" "}
                                            <img
                                                className="img-fluid"
                                                src="https://i.imgur.com/WuJwAJD.jpg"
                                            />{" "}
                                        </div>
                                        <div className="col-6">
                                            <div className="row d-flex">
                                                <p>
                                                    <b>Airpods</b>
                                                </p>
                                            </div>
                                            <div className="row d-flex">
                                                <p className="text-muted">
                                                    With charging case
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-3 d-flex justify-content-end">
                                            <p>
                                                <b>$199</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row row-main">
                                        <div className="col-3 ">
                                            {" "}
                                            <img
                                                className="img-fluid"
                                                src="https://i.imgur.com/hOsIes2.png"
                                            />{" "}
                                        </div>
                                        <div className="col-6">
                                            <div className="row d-flex">
                                                <p>
                                                    <b>Belkin Boost Up</b>
                                                </p>
                                            </div>
                                            <div className="row d-flex">
                                                <p className="text-muted">
                                                    Wireless charging pad
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-3 d-flex justify-content-end">
                                            <p>
                                                <b>$49.95</b>
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="total">
                                        <div className="row">
                                            <div className="col">
                                                {" "}
                                                <b> Total:</b>{" "}
                                            </div>
                                            <div className="col d-flex justify-content-end">
                                                {" "}
                                                <b>$847.95</b>{" "}
                                            </div>
                                        </div>{" "}
                                        <button className="btn d-flex mx-auto mb-4">
                                            {" "}
                                            Continue Shopping
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default OrderConfirm;
