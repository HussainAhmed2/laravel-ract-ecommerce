import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProductAction, RatingremoveValidationErrors, storeProductRatingAction } from "../../Redux/Actions/Product.Actions";
import ReactStars from "react-rating-stars-component";
import moment from "moment";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AddCart } from "../../Redux/Actions/Cart.Actions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import apiClient from "../../config/endpoints";
import AppLoader from "react-loader-spinner";


const ProductDetails = () => {
    const { Product } = useSelector((state) => state.SINGLE_PRODUCT);
    const [AppLoading, setAppLoading] = React.useState(false)
   // const [Product,SetProduct] = React.useState();
   const [StateProductID,setStateProductID] =   React.useState();
    const { message } = useSelector((state) => state.PRODUCT_RATING.Validation);
    const { productID } = useParams();
    const appUrl = process.env.MIX_APP_URL || "";
    let any_dir = process.env.MIX_SUB_DIR || "";
    const startScript = () => {
        const script = document.createElement("script");
        script.src = appUrl + "public/WebsiteAssets/js/main.js";
        document.body.appendChild(script);
    };

    const [isloaded, setIsloaded] = React.useState(false);
    const [isSubmitRating, setisSubmitRating] = React.useState(false);
    const dispatch = useDispatch();
    const history = useHistory()
    const url = process.env.MIX_APP_URL || "";
    const [Name,SetName] = React.useState("")
    const [Email,SetEmail] = React.useState("")
    const [Rating,SetRating] = React.useState("")
    const [Review,SetReview] = React.useState("")

    const SubmitAddCart = (item) => {
        dispatch(AddCart(item));
    };
    const SubmitRating = (e) =>{
        e.preventDefault()


        const postData = new FormData();
        postData.append("product_id",productID)
        postData.append("name",Name)
        postData.append("email",Email)
        postData.append("review",Review)
        postData.append("rating",Rating)



        dispatch(storeProductRatingAction(postData)).then(()=>{
            setisSubmitRating(true)
            window.location.href = "/" + any_dir + "ProductDetails/" + productID
        })

    }

     const fetchProductFromApi = async () => {

          await apiClient.getSingleProduct(productID).then((res)=>{
                SetProduct(res.data)
                setIsloaded(true)
                startScript();
          }).catch((error)=>{

          })
     }
  const fetchProductFromDisptach = () => {

    try {

        dispatch(getSingleProductAction(productID)).then(()=>{
            setIsloaded(true)

       startScript();
        }).catch((error)=>{
            console.log("Error in Single Product Dispatch",error)
        })


       //fetchProductFromApi();

    } catch (error) {
        console.log("Error in Single Product Dispatch",error)
    }

  }


    React.useEffect(() => {


 fetchProductFromDisptach()


    }, [isloaded]);

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
                            {!Product ? <><h4>Product Not Found</h4></> :
                                                <>
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
                                                  type="button"
                                                      className="btn"

                                                      onClick={() =>
                                                          SubmitAddCart(
                                                              {
                                                                  id: Product[0]
                                                                      .id,
                                                                  product_image:
                                                                  Product[0]
                                                                          .product_image,

                                                                  product_name:
                                                                  Product[0]
                                                                          .product_name,
                                                                  product_price:
                                                                  Product[0]
                                                                          .product_price,
                                                              }
                                                          )
                                                      }
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

                                                      <ReactStars
                                                                  count={
                                                                      5
                                                                  }
                                                                  value={
                                                                      0
                                                                  }
                                                                  edit={
                                                                      true
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
                                                                  onChange={(newRating)=>{SetRating(newRating)}}
                                                              />

                                                  </div>
                                                  <span className="text-danger">{message.rating[0]}</span>
                                                  <div className="row form">
                                                      <div className="col-sm-6">
                                                          <input
                                                              type="text"
                                                              placeholder="Name"
                                                              onChange={(e)=>{SetName(e.target.value)}}
                                                          />
                                                          <span className="text-danger">{message.name[0]}</span>
                                                      </div>
                                                      <div className="col-sm-6">
                                                          <input
                                                              type="email"
                                                              placeholder="Email"
                                                              onChange={(e)=>{SetEmail(e.target.value)}}
                                                          />
                                                          <span className="text-danger">{message.email[0]}</span>
                                                      </div>
                                                      <div className="col-sm-12">
                                                          <textarea placeholder="Review"  onChange={(e)=>{SetReview(e.target.value)}}></textarea>
                                                          <span className="text-danger">{message.review[0]}</span>
                                                      </div>
                                                      <div className="col-sm-12">
                                                          <button type="button" onClick={SubmitRating}>

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
                                                </>}

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
