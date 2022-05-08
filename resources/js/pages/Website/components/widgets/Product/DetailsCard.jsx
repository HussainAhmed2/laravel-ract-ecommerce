import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AddCart } from "../../../../../Redux/Actions/Cart.Actions";
import { Link } from "react-router-dom";
import {
    addToWishlistAction,
    fetchUserWishlistAction,
} from "../../../../../Redux/Actions/User.Actions";

const DetailsCard = (props) => {
    const { Wishlist } = useSelector((state) => state.USER_WISHLIST);
    const dispatch = useDispatch();
    const history = useHistory();
    let any_dir = process.env.MIX_SUB_DIR || "";
    const url = process.env.MIX_APP_URL || "";
    const [isloaded, setIsloaded] = React.useState(false);
    const [isFound, setIsFound] = React.useState(false);
    const product_id = props.id;
    var AverageRating = parseFloat(props.avgRatings).toFixed(2);

    const token = props.token;
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
    const SubmitAddtoWishlist = () => {
        const postData = new FormData();
        postData.append("product_id", props.id);
        postData.append("user_id", props.user_id);
        dispatch(addToWishlistAction(token, postData)).then(() => {
            dispatch(fetchUserWishlistAction(token, props.user_id));
            setIsloaded(true);
        });
    };

    const GoToProducts = (productid) => {
        history.push(`ProductDetails/${productid}`);
    };

    React.useEffect(() => {}, [isloaded]);
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
                            {!token ? (
                                <></>
                            ) : (
                                <>
                                    <a
                                        type="button"
                                        onClick={() =>
                                            SubmitAddtoWishlist(props)
                                        }
                                    >
                                        <i className="fa fa-heart"></i>
                                    </a>
                                </>
                            )}

                            <Link
                                to={
                                    "/" + any_dir + `ProductDetails/${props.id}`
                                }
                            >
                                <i className="fa fa-search"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="product-price">
                        <h3>
                            <span>$</span>
                            {props.product_price}
                        </h3>
                        <a
                            className="btn"
                            type="button"
                            onClick={() => SubmitAddCart(props)}
                        >
                            <i className="fa fa-shopping-cart"></i>Add to Cart
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailsCard;
