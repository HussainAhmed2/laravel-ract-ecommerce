import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOrdersAction } from "../../Redux/Actions/User.Actions";
import moment from "moment";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Modal, Button } from "react-bootstrap";
import { fetchSingleOrderAction } from "../../Redux/Actions/Order.Actions";

const MyAccount = () => {
    const { User } = useSelector((state) => state.USER_LOGIN);
    const { UserOrders } = useSelector((state) => state.USER_ORDERS);
    const { Order } = useSelector((state) => state.SINGLE_ORDER);
    const userid = User.user.id;
    const token = User?.token;
    const url = process.env.MIX_APP_URL || "";
    const [isloaded, setIsloaded] = React.useState(false);
    const [isSingleOrderloaded, setSingleOrderloaded] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const ViewOrder = (order_no) => {

        dispatch(fetchSingleOrderAction(token, order_no)).then(() => {
            setSingleOrderloaded(true);
            handleShow();
        });
    };

    const auth = () => {
        if (!token) {
            history.push("login");
        }
    };

    React.useEffect(
        () => {
            auth();
            dispatch(fetchUserOrdersAction(token,userid)).then(()=>{
                setIsloaded(true)
            })

        },
       [isloaded,isSingleOrderloaded]
    );
    return (
        <>
            <Header />

            <div className="my-account">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div
                                className="nav flex-column nav-pills"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <a
                                    className="nav-link active"
                                    id="dashboard-nav"
                                    data-toggle="pill"
                                    href="#dashboard-tab"
                                    role="tab"
                                >
                                    <i className="fa fa-tachometer-alt"></i>
                                    Dashboard
                                </a>
                                <a
                                    className="nav-link"
                                    id="orders-nav"
                                    data-toggle="pill"
                                    href="#orders-tab"
                                    role="tab"
                                >
                                    <i className="fa fa-shopping-bag"></i>Orders
                                </a>

                                <a
                                    className="nav-link"
                                    id="account-nav"
                                    data-toggle="pill"
                                    href="#account-tab"
                                    role="tab"
                                >
                                    <i className="fa fa-user"></i>Account
                                    Details
                                </a>
                                <a className="nav-link" href="index.html">
                                    <i className="fa fa-sign-out-alt"></i>Logout
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="dashboard-tab"
                                    role="tabpanel"
                                    aria-labelledby="dashboard-nav"
                                >
                                    <h4>Dashboard</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. In condimentum quam ac
                                        mi viverra dictum. In efficitur ipsum
                                        diam, at dignissim lorem tempor in.
                                        Vivamus tempor hendrerit finibus. Nulla
                                        tristique viverra nisl, sit amet
                                        bibendum ante suscipit non. Praesent in
                                        faucibus tellus, sed gravida lacus.
                                        Vivamus eu diam eros. Aliquam et sapien
                                        eget arcu rhoncus scelerisque.
                                    </p>
                                </div>

                                <div
                                    className="tab-pane fade"
                                    id="orders-tab"
                                    role="tabpanel"
                                    aria-labelledby="orders-nav"
                                >
                                    {!isloaded ? (
                                        <>
                                            <span className="placeholder"></span>
                                        </>
                                    ) : (
                                        <>
                                            {UserOrders[0].orders.length ==
                                            0 ? (
                                                <>
                                                    <h4>
                                                        Currently You dont have
                                                        any order !
                                                    </h4>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="table-responsive">
                                                        <table className="table table-bordered">
                                                            <thead className="thead-dark">
                                                                <tr>
                                                                    <th>
                                                                        Order No
                                                                    </th>
                                                                    <th>
                                                                        Products
                                                                    </th>
                                                                    <th>
                                                                        Date
                                                                    </th>
                                                                    <th>
                                                                        Price
                                                                    </th>
                                                                    <th>
                                                                        Status
                                                                    </th>
                                                                    <th>
                                                                        Action
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {UserOrders[0].orders.map(
                                                                    (
                                                                        order,
                                                                        index
                                                                    ) => (
                                                                        <>
                                                                            <tr
                                                                                key={
                                                                                    index
                                                                                }
                                                                            >
                                                                                <td>
                                                                                    {
                                                                                        order.order_no
                                                                                    }
                                                                                </td>

                                                                                <td>
                                                                                    {order.products.map(
                                                                                        (
                                                                                            product,
                                                                                            index
                                                                                        ) => (
                                                                                            <>
                                                                                                {
                                                                                                    product.product_name
                                                                                                }

                                                                                                =
                                                                                                (
                                                                                                {
                                                                                                    product
                                                                                                        .pivot
                                                                                                        .quantity
                                                                                                }
                                                                                                )
                                                                                                <br />
                                                                                            </>
                                                                                        )
                                                                                    )}
                                                                                </td>
                                                                                <td>
                                                                                    {moment(
                                                                                        order.created_at
                                                                                    ).format(
                                                                                        "MMMM Do YYYY"
                                                                                    )}
                                                                                </td>
                                                                                <td>
                                                                                    $
                                                                                    {Number(
                                                                                        order.order_amount
                                                                                    ).toLocaleString(
                                                                                        "en-US"
                                                                                    )}
                                                                                </td>
                                                                                {order.order_status ==
                                                                                    0 && (
                                                                                    <>
                                                                                        <td>
                                                                                            Cencaled
                                                                                        </td>
                                                                                    </>
                                                                                )}
                                                                                {order.order_status ==
                                                                                    1 && (
                                                                                    <>
                                                                                        <td>
                                                                                            Pending
                                                                                        </td>
                                                                                    </>
                                                                                )}
                                                                                {order.order_status ==
                                                                                    2 && (
                                                                                    <>
                                                                                        <td>
                                                                                            Aproved
                                                                                        </td>
                                                                                    </>
                                                                                )}
                                                                                {order.order_status ==
                                                                                    3 && (
                                                                                    <>
                                                                                        <td>
                                                                                            dispatch
                                                                                        </td>
                                                                                    </>
                                                                                )}
                                                                                {order.order_status ==
                                                                                    4 && (
                                                                                    <>
                                                                                        <td>
                                                                                            Delivered
                                                                                        </td>
                                                                                    </>
                                                                                )}

                                                                                <td>
                                                                                    <Button
                                                                                        variant="btn"
                                                                                        onClick={() =>
                                                                                            ViewOrder(
                                                                                                order.order_no
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        View
                                                                                    </Button>
                                                                                </td>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                )}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="payment-tab"
                                    role="tabpanel"
                                    aria-labelledby="payment-nav"
                                >
                                    <h4>Payment Method</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. In condimentum quam ac
                                        mi viverra dictum. In efficitur ipsum
                                        diam, at dignissim lorem tempor in.
                                        Vivamus tempor hendrerit finibus. Nulla
                                        tristique viverra nisl, sit amet
                                        bibendum ante suscipit non. Praesent in
                                        faucibus tellus, sed gravida lacus.
                                        Vivamus eu diam eros. Aliquam et sapien
                                        eget arcu rhoncus scelerisque.
                                    </p>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="address-tab"
                                    role="tabpanel"
                                    aria-labelledby="address-nav"
                                >
                                    <h4>Address</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5>Payment Address</h5>
                                            <p>
                                                123 Payment Street, Los Angeles,
                                                CA
                                            </p>
                                            <p>Mobile: 012-345-6789</p>
                                            <button className="btn">
                                                Edit Address
                                            </button>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Shipping Address</h5>
                                            <p>
                                                123 Shipping Street, Los
                                                Angeles, CA
                                            </p>
                                            <p>Mobile: 012-345-6789</p>
                                            <button className="btn">
                                                Edit Address
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="account-tab"
                                    role="tabpanel"
                                    aria-labelledby="account-nav"
                                >
                                    <h4>Account Details</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Mobile"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Address"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn">
                                                Update Account
                                            </button>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                    <h4>Password change</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input
                                                className="form-control"
                                                type="password"
                                                placeholder="Current Password"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="New Password"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Confirm Password"
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn">
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            {!isSingleOrderloaded ? (
                <></>
            ) : (
                <>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                Order# : {Order[0].order_no}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="card mt-50 mb-50">
                                <div className="main">
                                    {Order[0].products.map((product, index) => (
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
                                                    width="100"
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
                                                        {product.pivot.quantity}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-3 d-flex justify-content-end">
                                                <p>
                                                    <b>
                                                        ${product.pivot.amount}
                                                    </b>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    <hr />
                                    <div className="total">
                                        <div className="row">
                                            <div className="col">
                                                {" "}
                                                <b> Shipment Cost :</b>{" "}
                                            </div>
                                            <div className="col d-flex justify-content-end">
                                                {" "}
                                                <b>
                                                    ${Order[0].shipment_cost}
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
                                                        Order[0].order_amount
                                                    ).toLocaleString("en-US")}
                                                </b>{" "}
                                            </div>
                                        </div>{" "}
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </>
    );
};

export default MyAccount;
