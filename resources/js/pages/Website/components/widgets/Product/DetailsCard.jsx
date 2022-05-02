import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { AddCart } from "../../../../../Redux/Actions/Cart.Actions";

const DetailsCard = (props) => {
    const dispatch = useDispatch();
    const url = process.env.MIX_APP_URL || "";
    var AverageRating = parseFloat(props.avgRatings).toFixed(2);
    console.log("average rating", AverageRating);
    const secondExample = {
        count: 5,
        value: AverageRating,
        edit: false,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
    };

    const SubmitAddCart = (item) => {
        dispatch(AddCart(item));
    };
    return (
        <>
            <div className="col-md-3">
                <div className="product-item">
                    <div className="product-title">
                        <a href="#">{props.product_name}</a>
                        <div className="ratting d-flex justify-content-center">
                            <ReactStars {...secondExample} />
                        </div>
                    </div>
                    <div className="product-image">
                        <a href="product-detail.html">
                            <img
                                src={
                                    url +
                                    "public/uploads/images/" +
                                    props.product_image
                                }
                                alt="Product Image"
                            />
                        </a>
                        <div className="product-action">
                            <a
                                type="button"
                                onClick={() => SubmitAddCart(props)}
                            >
                                <i className="fa fa-cart-plus"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-heart"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-search"></i>
                            </a>
                        </div>
                    </div>
                    <div className="product-price">
                        <h3>
                            <span>$</span>
                            {props.product_price}
                        </h3>
                        <a className="btn" href="">
                            <i className="fa fa-shopping-cart"></i>Buy Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsCard;
