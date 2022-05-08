import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductAction } from "../../Redux/Actions/Product.Actions";
import ReactStars from "react-rating-stars-component";
import moment from "moment";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";

const ProductDetails = () => {
    const { Product } = useSelector((state) => state.SINGLE_PRODUCT);
    const [isloaded, setIsloaded] = React.useState(false);
    const dispatch = useDispatch();
    const { productID } = useParams();
    const url = process.env.MIX_APP_URL || "";
    React.useEffect(() => {
        dispatch(getSingleProductAction(productID)).then(() => {
            setIsloaded(true);
        });
    }, [productID, isloaded]);
    return (
        <>
            <Header />
            <Breadcrumbs
                FirstUrl="Home"
                FistName="Home"
                SecondUrl="Products"
                SecondName="Products"
                CurrentName="Product Details"
            />

            <div className="product-detail">
                <div className="container-fluid">
                    {!isloaded ? (
                        <>Loading...</>
                    ) : (
                        <>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="product-detail-top">
                                        <div className="row align-items-center">
                                            <div className="col-md-5">
                                                <div className="product-slider-single normal-slider">
                                                    {Product[0].priduct_images.map(
                                                        (product, index) => (
                                                            <div
                                                                className="slider-nav-img"
                                                                key={index}
                                                            >
                                                                <img
                                                                    src={
                                                                        url +
                                                                        "public/uploads/images/" +
                                                                        product.image
                                                                    }
                                                                    alt="Product Image"
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>

                                                <div className="product-slider-single-nav normal-slider">
                                                    {Product[0].priduct_images.map(
                                                        (product, index) => (
                                                            <div
                                                                className="slider-nav-img"
                                                                key={index}
                                                            >
                                                                <img
                                                                    src={
                                                                        url +
                                                                        "public/uploads/images/" +
                                                                        product.image
                                                                    }
                                                                    alt="Product Image"
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="product-content">
                                                    <div className="title">
                                                        <h2>
                                                            {
                                                                Product[0]
                                                                    .product_name
                                                            }
                                                        </h2>
                                                    </div>
                                                    <div>
                                                        Category :
                                                        {
                                                            Product[0].category
                                                                .name
                                                        }
                                                    </div>
                                                    <div>
                                                        Brand :
                                                        {Product[0].brand.name}
                                                    </div>
                                                    <div className="ratting">
                                                        <ReactStars
                                                            count={5}
                                                            value={
                                                                Product[0]
                                                                    .AverageRating
                                                            }
                                                            edit={false}
                                                            a11y={true}
                                                            isHalf={true}
                                                            emptyIcon={
                                                                <i className="far fa-star" />
                                                            }
                                                            halfIcon={
                                                                <i className="fa fa-star-half-alt" />
                                                            }
                                                            filledIcon={
                                                                <i className="fa fa-star" />
                                                            }
                                                        />
                                                    </div>
                                                    <div className="price">
                                                        <h4>Price:</h4>
                                                        <p>
                                                            ${" "}
                                                            {
                                                                Product[0]
                                                                    .product_price
                                                            }
                                                        </p>
                                                    </div>

                                                    <div className="action">
                                                        <a
                                                            className="btn"
                                                            href="#"
                                                        >
                                                            <i className="fa fa-shopping-cart"></i>
                                                            Add to Cart
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row product-detail-bottom">
                                        <div className="col-lg-12">
                                            <ul className="nav nav-pills nav-justified">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link active"
                                                        data-toggle="pill"
                                                        href="#description"
                                                    >
                                                        Description
                                                    </a>
                                                </li>

                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        data-toggle="pill"
                                                        href="#reviews"
                                                    >
                                                        Reviews (
                                                        {
                                                            Product[0]
                                                                .product_rating
                                                                .length
                                                        }
                                                        )
                                                    </a>
                                                </li>
                                            </ul>

                                            <div className="tab-content">
                                                <div
                                                    id="description"
                                                    className="container tab-pane active"
                                                >
                                                    <h4>Product description</h4>
                                                    <p>
                                                        {Product[0].description}
                                                    </p>
                                                </div>
                                                <div
                                                    id="reviews"
                                                    className="container tab-pane fade"
                                                >
                                                    {Product[0].product_rating.map(
                                                        (rating, index) => (
                                                            <div
                                                                className="reviews-submitted"
                                                                key={index}
                                                            >
                                                                <div className="reviewer">
                                                                    {
                                                                        rating.name
                                                                    }{" "}
                                                                    -{" "}
                                                                    <span>
                                                                        {moment(
                                                                            rating.created_at
                                                                        ).format(
                                                                            "Do MMMM YYYY"
                                                                        )}
                                                                    </span>
                                                                </div>
                                                                <div className="ratting">
                                                                    <ReactStars
                                                                        count={
                                                                            5
                                                                        }
                                                                        value={
                                                                            rating.rating
                                                                        }
                                                                        edit={
                                                                            false
                                                                        }
                                                                        a11y={
                                                                            true
                                                                        }
                                                                        isHalf={
                                                                            true
                                                                        }
                                                                        emptyIcon={
                                                                            <i className="far fa-star" />
                                                                        }
                                                                        halfIcon={
                                                                            <i className="fa fa-star-half-alt" />
                                                                        }
                                                                        filledIcon={
                                                                            <i className="fa fa-star" />
                                                                        }
                                                                    />
                                                                </div>
                                                                <p>
                                                                    {
                                                                        rating.review
                                                                    }
                                                                </p>
                                                            </div>
                                                        )
                                                    )}

                                                    <div className="reviews-submit">
                                                        <h4>
                                                            Give your Review:
                                                        </h4>
                                                        <div className="ratting">
                                                            <i className="far fa-star"></i>
                                                            <i className="far fa-star"></i>
                                                            <i className="far fa-star"></i>
                                                            <i className="far fa-star"></i>
                                                            <i className="far fa-star"></i>
                                                        </div>
                                                        <div className="row form">
                                                            <div className="col-sm-6">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Name"
                                                                />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input
                                                                    type="email"
                                                                    placeholder="Email"
                                                                />
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <textarea placeholder="Review"></textarea>
                                                            </div>
                                                            <div className="col-sm-12">
                                                                <button>
                                                                    Submit
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default ProductDetails;
