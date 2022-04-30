import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction } from "../../Redux/Actions/Product.Actions";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Brands from "./components/widgets/Home/Brands";
import DetailCardLoader from "./components/widgets/Product/DetailCardLoader";
import DetailsCard from "./components/widgets/Product/DetailsCard";
import ProductItems from "./components/widgets/Product/ProductItems";

const Products = () => {
    const [isloaded, setIsloaded] = React.useState(false);
    const dispatch = useDispatch();
    const { Products } = useSelector((state) => state.GET_PRODUCTS);
    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 })),
            });
        }, 1500);
    };
    console.log("Products =", Products);
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
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="product-view-top">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="product-search">
                                                    <input
                                                        type="email"
                                                        value="Search"
                                                    />
                                                    <button>
                                                        <i class="fa fa-search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="product-short">
                                                    <div class="dropdown">
                                                        <div
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown"
                                                        >
                                                            Product short by
                                                        </div>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                Newest
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                Popular
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                Most sale
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="product-price-range">
                                                    <div class="dropdown">
                                                        <div
                                                            class="dropdown-toggle"
                                                            data-toggle="dropdown"
                                                        >
                                                            Product price range
                                                        </div>
                                                        <div class="dropdown-menu dropdown-menu-right">
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $0 to $50
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $51 to $100
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $101 to $150
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $151 to $200
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $201 to $250
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $251 to $300
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $301 to $350
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $351 to $400
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $401 to $450
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="dropdown-item"
                                                            >
                                                                $451 to $500
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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
                                        {Products.map((product, index) => (
                                            <>
                                                <DetailsCard
                                                    ProductImage={
                                                        product.product_image
                                                    }
                                                    ProductName={
                                                        product.product_name
                                                    }
                                                    ProductPrice={
                                                        product.product_price
                                                    }
                                                />
                                            </>
                                        ))}
                                    </>
                                )}
                            </div>

                            <div class="col-md-12">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item disabled">
                                            <a
                                                class="page-link"
                                                href="#"
                                                tabindex="-1"
                                            >
                                                Previous
                                            </a>
                                        </li>
                                        <li class="page-item active">
                                            <a class="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div class="col-lg-4 sidebar">
                            <div class="sidebar-widget category">
                                <h2 class="title">Category</h2>
                                <nav class="navbar bg-light">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <i class="fa fa-female"></i>
                                                Fashion & Beauty
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <i class="fa fa-child"></i>Kids
                                                & Babies Clothes
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <i class="fa fa-tshirt"></i>Men
                                                & Women Clothes
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <i class="fa fa-mobile-alt"></i>
                                                Gadgets & Accessories
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <i class="fa fa-microchip"></i>
                                                Electronics & Accessories
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                            <div class="sidebar-widget widget-slider">
                                <div class="sidebar-slider normal-slider">
                                    <ProductItems
                                        ProductImage="product-1.jpg"
                                        ProductName="Products Name"
                                        ProductPrice="20"
                                    />
                                    <ProductItems
                                        ProductImage="product-4.jpg"
                                        ProductName="Products Name"
                                        ProductPrice="20"
                                    />
                                    <ProductItems
                                        ProductImage="product-5.jpg"
                                        ProductName="Products Name"
                                        ProductPrice="20"
                                    />
                                    <ProductItems
                                        ProductImage="product-7.jpg"
                                        ProductName="Products Name"
                                        ProductPrice="20"
                                    />
                                </div>
                            </div>

                            <div class="sidebar-widget brands">
                                <h2 class="title">Our Brands</h2>
                                <ul>
                                    <li>
                                        <a href="#">Nulla </a>
                                        <span>(45)</span>
                                    </li>
                                    <li>
                                        <a href="#">Curabitur </a>
                                        <span>(34)</span>
                                    </li>
                                    <li>
                                        <a href="#">Nunc </a>
                                        <span>(67)</span>
                                    </li>
                                    <li>
                                        <a href="#">Ullamcorper</a>
                                        <span>(74)</span>
                                    </li>
                                    <li>
                                        <a href="#">Fusce </a>
                                        <span>(89)</span>
                                    </li>
                                    <li>
                                        <a href="#">Sagittis</a>
                                        <span>(28)</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="sidebar-widget tag">
                                <h2 class="title">Tags Cloud</h2>
                                <a href="#">Lorem ipsum</a>
                                <a href="#">Vivamus</a>
                                <a href="#">Phasellus</a>
                                <a href="#">pulvinar</a>
                                <a href="#">Curabitur</a>
                                <a href="#">Fusce</a>
                                <a href="#">Sem quis</a>
                                <a href="#">Mollis metus</a>
                                <a href="#">Sit amet</a>
                                <a href="#">Vel posuere</a>
                                <a href="#">orci luctus</a>
                                <a href="#">Nam lorem</a>
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
