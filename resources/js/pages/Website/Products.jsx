import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction } from "../../Redux/Actions/Product.Actions";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Brands from "./components/widgets/Home/Brands";
import DetailCardLoader from "./components/widgets/Product/DetailCardLoader";
import DetailsCard from "./components/widgets/Product/DetailsCard";
import Pagination from "react-js-pagination";

const Products = () => {
    const { User } = useSelector((state) => state.USER_LOGIN);

    const [isloaded, setIsloaded] = React.useState(false);

    const dispatch = useDispatch();
    const { Products } = useSelector((state) => state.GET_PRODUCTS);
    const userid = User.user.id;
    const token = User?.token;

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 })),
            });
        }, 1500);
    };
    React.useEffect(() => {
        dispatch(fetchProductAction()).then(() => {
            setIsloaded(true);
        });
    }, [isloaded]);
    return (
        <>
            <Header />
            <Breadcrumbs
                FirstUrl="Home"
                FistName="Home"
                SecondUrl="Products"
                SecondName="Products"
                CurrentName="Product List"
            />

            <div class="product-view">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                {!isloaded ? (
                                    <>
                                        <DetailCardLoader />
                                        <DetailCardLoader />
                                        <DetailCardLoader />
                                        <DetailCardLoader />
                                        <DetailCardLoader />
                                        <DetailCardLoader />
                                    </>
                                ) : (
                                    <>
                                        {Products.data.map((product, index) => (
                                            <>
                                                <DetailsCard
                                                    id={product.id}
                                                    product_image={
                                                        product.product_image
                                                    }
                                                    avgRatings={
                                                        product.AverageRating
                                                    }
                                                    product_name={
                                                        product.product_name
                                                    }
                                                    product_price={
                                                        product.product_price
                                                    }
                                                    token={token}
                                                    user_id={userid}
                                                />
                                            </>
                                        ))}
                                    </>
                                )}
                            </div>

                            <div class="col-md-12 d-flex justify-content-center">
                                <nav aria-label="Page navigation example">
                                    <Pagination
                                        activePage={
                                            Products?.current_page
                                                ? Products?.current_page
                                                : 0
                                        }
                                        itemsCountPerPage={
                                            Products?.per_page
                                                ? Products?.per_page
                                                : 0
                                        }
                                        totalItemsCount={
                                            Products?.total
                                                ? Products?.total
                                                : 0
                                        }
                                        onChange={(pageNumber) => {
                                            dispatch(
                                                fetchProductAction(pageNumber)
                                            );
                                        }}
                                        pageRangeDisplayed={8}
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        firstPageText="First Page"
                                        lastPageText="Last Lage"
                                    />
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Brands />
            <Footer />
        </>
    );
};

export default Products;
