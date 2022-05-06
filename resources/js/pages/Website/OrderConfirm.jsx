import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchSingleOrderAction } from "../../Redux/Actions/Order.Actions";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";

const OrderConfirm = () => {
    const { User } = useSelector((state) => state.USER_LOGIN);
    const { Order } = useSelector((state) => state.SINGLE_ORDER);
    const CreateOrder = useSelector(
        (state) => state.CREATE_ORDER.CREATED_ORDER
    );
    const order_no = CreateOrder.order.order_no;
    const [isloaded, setIsloaded] = React.useState(false);
    const token = User?.token;
    const dispatch = useDispatch();
    const history = useHistory();
    const url = process.env.MIX_APP_URL || "";
    const auth = () => {
        if (!token) {
            history.push("login");
        }
    };

    React.useEffect(() => {
        auth();
        dispatch(fetchSingleOrderAction(token, order_no)).then(() => {
            setIsloaded(true);
        }, [isloaded]);
    }, [token, isloaded]);

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
                        {!isloaded ? (
                            <>Loading...</>
                        ) : (
                            <>
                                <div className="col-lg-6">
                                    <div className="card mt-50 mb-50">
                                        <div className="col d-flex">
                                            <span
                                                className="text-muted"
                                                id="orderno"
                                            >
                                                order # {Order[0].order_no}
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
                                            {Order[0].products.map(
                                                (product, index) => (
                                                    <div
                                                        className="row row-main"
                                                        key={index}
                                                    >
                                                        <div className="col-3">
                                                            {" "}
                                                            <img
                                                                className="img-fluid"
                                                                src={
                                                                    url +
                                                                    "public/uploads/images/" +
                                                                    product.product_image
                                                                }
                                                            />{" "}
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="row d-flex">
                                                                <p>
                                                                    <b>
                                                                        {
                                                                            product.product_name
                                                                        }
                                                                    </b>
                                                                </p>
                                                            </div>
                                                            <div className="row d-flex">
                                                                <p className="text-muted">
                                                                    Quantity ={" "}
                                                                    {
                                                                        product
                                                                            .pivot
                                                                            .quantity
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="col-3 d-flex justify-content-end">
                                                            <p>
                                                                <b>
                                                                    $
                                                                    {
                                                                        product
                                                                            .pivot
                                                                            .amount
                                                                    }
                                                                </b>
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                            <hr />
                                            <div className="total">
                                                <div className="row">
                                                    <div className="col">
                                                        {" "}
                                                        <b>
                                                            {" "}
                                                            Shipment Cost :
                                                        </b>{" "}
                                                    </div>
                                                    <div className="col d-flex justify-content-end">
                                                        {" "}
                                                        <b>
                                                            $
                                                            {
                                                                Order[0]
                                                                    .shipment_cost
                                                            }
                                                        </b>{" "}
                                                    </div>
                                                </div>{" "}
                                                <div className="row">
                                                    <div className="col">
                                                        {" "}
                                                        <b> Total:</b>{" "}
                                                    </div>
                                                    <div className="col d-flex justify-content-end">
                                                        {" "}
                                                        <b>
                                                            $
                                                            {Number(
                                                                Order[0]
                                                                    .order_amount
                                                            ).toLocaleString(
                                                                "en-US"
                                                            )}
                                                        </b>{" "}
                                                    </div>
                                                </div>{" "}
                                                <button
                                                    className="btn d-flex mx-auto mb-4"
                                                    onClick={() =>
                                                        history.push("Products")
                                                    }
                                                >
                                                    {" "}
                                                    Continue Shopping
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default OrderConfirm;
