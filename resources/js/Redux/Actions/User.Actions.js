import storage from "redux-persist/lib/storage";
import Swal from "sweetalert2";
import apiClient from "../../config/endpoints";
import { UserTypes } from "../Types/User.Types";

let any_dir = process.env.MIX_SUB_DIR || "";

export const user_login = (postData, history) => async (dispatch) => {
    await apiClient
        .login(postData)
        .then((res) => {
            dispatch({
                type: UserTypes.USER_LOGIN,
                payload: res.data,
            });

            Swal.fire({
                icon: "success",
                title: "Login Success",
                text: "Wellcome !",
                showCancelButton: false,
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                history.push("/" + any_dir);
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.response.data.message,
                showCancelButton: false,
                showCloseButton: false,
                showConfirmButton: false,
                timer: 2000,
            });
        });
};

export const user_login_model = (postData, history) => async (dispatch) => {
    await apiClient
        .login(postData)
        .then((res) => {
            dispatch({
                type: UserTypes.USER_LOGIN,
                payload: res.data,
            });

            Swal.fire({
                icon: "success",
                title: "Login Success",
                text: "Now you process checkout",
                showCancelButton: false,
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                history.push("checkout");
            });
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.response.data.message,
                showCancelButton: false,
                showCloseButton: false,
                showConfirmButton: false,
                timer: 2000,
            });
        });
};

export const logOutAction = (history) => {
    storage.removeItem("persist:auth");
    history.push("login");
    return {
        type: UserTypes.USER_LOGOUT,
    };
};

export const registerAction = (postData) => async (dispatch) => {
    await apiClient
        .register(postData)
        .then((res) => {
            if (res.data.status != 404) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: res.response,
                    showCancelButton: false,
                    showConfirmButton: false,
                    button: false,
                    timer: 2000,
                });
            } else {
                dispatch({
                    type: UserTypes.REGISTERED_VALIDATION,
                    payload: res.data.message,
                });
            }
        })
        .catch((error) => {
            console.log("register error", error.response.data.message);
        });
};

export const fetchUserOrdersAction = (token, user_id) => async (dispatch) => {
    await apiClient.fetchUserOrders(token, user_id).then((res) => {
        dispatch({
            type: UserTypes.USER_GET_ORDERS,
            payload: res.data,
        });
    });
};

export const addToWishlistAction = (token, postData) => async (dispatch) => {
    await apiClient
        .addToWishlist(token, postData)
        .then((res) => {
            dispatch({
                type: UserTypes.ADD_TO_WHISHLIST,
                payload: res,
            });
            if (res.data.status == 2001) {
                Swal.fire({
                    icon: "warning",
                    title: "Warning",
                    text: res.data.message,
                    showCancelButton: false,
                    showConfirmButton: false,
                    button: false,
                    timer: 2000,
                });
            } else {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: res.data.message,
                    showCancelButton: false,
                    showConfirmButton: false,
                    button: false,
                    timer: 2000,
                });
            }
        })
        .catch((error) => {
            console.log("register error", error.response.data.message);
        });
};

export const fetchUserWishlistAction = (token, user_id) => async (dispatch) => {
    await apiClient.fetchUserWishlist(token, user_id).then((res) => {
        dispatch({
            type: UserTypes.FETCH_WHISHLIST,
            payload: res.data,
        });
    });
};
