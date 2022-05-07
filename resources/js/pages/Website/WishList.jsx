import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "../../Redux/Actions/Cart.Actions";
import {
    deleteItemFromWishlistAction,
    fetchUserWishlistAction,
} from "../../Redux/Actions/User.Actions";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";

const WishList = (props) => {
    const { User } = useSelector((state) => state.USER_LOGIN);
    const { Wishlist } = useSelector((state) => state.USER_WISHLIST);
    const url = process.env.MIX_APP_URL || "";
    const token = User?.token;
    const userid = User.user.id;
    const [isSubmit, setIsSubmit] = React.useState(false);
    const dispatch = useDispatch();
    const SubmitAddCart = (item) => {
        dispatch(AddCart(item));
    };

    const auth = () => {
        if (!token) {
            history.push("login");
        }
    };

    const deleteWishlistItem = (item_id) => {
        setIsSubmit(true);
        dispatch(deleteItemFromWishlistAction(token, item_id)).then(() => {
            dispatch(fetchUserWishlistAction(token, userid));
            setIsSubmit(false);
        });
    };

    React.useEffect(() => {
        auth();
    }, [token, isSubmit]);

    return (
        <>
            <Header />
            <Breadcrumbs
                FirstUrl="Home"
                FistName="Home"
                SecondUrl="Products"
                SecondName="Products"
                CurrentName="Whistlist"
            />

            <div className="wishlist-page">
                <div className="container-fluid">
                    <div className="wishlist-page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Add to Cart</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody className="align-middle">
                                            {Wishlist[0].wishlists.map(
                                                (item, index) => (
                                                    <>
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="img">
                                                                    <a href="#">
                                                                        <img
                                                                            src={
                                                                                url +
                                                                                "public/uploads/images/" +
                                                                                item
                                                                                    .product
                                                                                    .product_image
                                                                            }
                                                                            alt="Image"
                                                                        />
                                                                    </a>
                                                                    <p>
                                                                        {
                                                                            item
                                                                                .product
                                                                                .product_name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                ${" "}
                                                                {
                                                                    item.product
                                                                        .product_price
                                                                }
                                                            </td>

                                                            <td>
                                                                <button
                                                                    className="btn-cart"
                                                                    onClick={() =>
                                                                        SubmitAddCart(
                                                                            {
                                                                                id: item
                                                                                    .product
                                                                                    .id,
                                                                                product_image:
                                                                                    item
                                                                                        .product
                                                                                        .product_image,

                                                                                product_name:
                                                                                    item
                                                                                        .product
                                                                                        .product_name,
                                                                                product_price:
                                                                                    item
                                                                                        .product
                                                                                        .product_price,
                                                                            }
                                                                        )
                                                                    }
                                                                >
                                                                    Add to Cart
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    onClick={() =>
                                                                        deleteWishlistItem(
                                                                            item.id
                                                                        )
                                                                    }
                                                                >
                                                                    <i className="fa fa-trash"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            )}
                                        </tbody>
                                    </table>
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

export default WishList;
