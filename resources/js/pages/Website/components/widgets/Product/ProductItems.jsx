import React from "react";

const ProductItems = (props) => {
    const url = process.env.MIX_APP_URL || "";
    return (
        <>
            <div class="product-item">
                <div class="product-title">
                    <a href={props.ProductUrl}>{props.ProductName}</a>
                    <div class="ratting">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
                <div class="product-image">
                    <a href="product-detail.html">
                        <img
                            src={
                                url +
                                "public/WebsiteAssets/img/" +
                                props.ProductImage
                            }
                            alt="Product Image"
                        />
                    </a>
                    <div class="product-action">
                        <a href="#">
                            <i class="fa fa-cart-plus"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-heart"></i>
                        </a>
                        <a href="#">
                            <i class="fa fa-search"></i>
                        </a>
                    </div>
                </div>
                <div class="product-price">
                    <h3>
                        <span>$</span>
                        {props.ProductPrice}
                    </h3>
                    <a class="btn" href="">
                        <i class="fa fa-shopping-cart"></i>Buy Now
                    </a>
                </div>
            </div>
        </>
    );
};

export default ProductItems;
