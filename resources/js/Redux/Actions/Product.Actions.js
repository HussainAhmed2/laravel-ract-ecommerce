import { ProductTypes } from "../Types/Product.Types";
import apiClient from "../../config/endpoints";
import Swal from "sweetalert2";
export const fetchProductAction =
    (pageNumber = 1, token) =>
    async (dispatch) => {
        await apiClient
            .fetchProducts(pageNumber, token)
            .then((res) => {
                dispatch({
                    type: ProductTypes.FETCH_PRODUCT,
                    payload: res.data,
                });
            })
            .catch((error) =>
                console.error("fetch product Error", error.response)
            );
    };

export const getProductAction = (products) => {
    return {
        type: ProductTypes.GET_PRODUCTS,
        payload: products,
    };
};

export const storeProductAction =
    (token, postData, history) => async (dispatch) => {
        await apiClient
            .storeProduct(token, postData)
            .then((res) => {
                if (res.data.status == 200) {
                    dispatch({
                        type: ProductTypes.STORE_PRODUCT,
                        payload: res.data,
                    });
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: res.data.message,
                        button: false,
                        timer: 2000,
                    }).then(() => {
                        history.push("/");
                    });
                } else {
                    dispatch({
                        type: ProductTypes.VALIDATION_ERRORS,
                        payload: res.data,
                    });
                }
            })
            .catch((error) => {
                console.log("Store Product Error", error);
            });
    };
export const getSingleProductAction = (product_id) => async (dispatch) => {
    await apiClient
        .getSingleProduct(product_id)
        .then((res) => {
            dispatch({
                type: ProductTypes.GET_SINGLE_PRODUCT,
                payload: res.data,
            });
        })
        .catch((error) => console.error("fetch product Error", error.response));
};
