import { OrderTypes } from "../Types/Order.Types";
import apiClient from "../../config/endpoints";
import Swal from "sweetalert2";
import storage from "redux-persist/lib/storage";
import { CartTypes } from "../Types/Cart.Types";

let any_dir = process.env.MIX_SUB_DIR || "";

export const createOrderAction =
    (token, postData, history) => async (dispatch) => {
        await apiClient.createOrder(token, postData).then((res) => {
            if (res.data.status != 404) {
                dispatch({
                    type: OrderTypes.CREATE_ORDER,
                    payload: res.data,
                });

                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: res.data.message,
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 2000,
                }).then(() => {
                    storage.removeItem("persist:cart").then(() => {
                        dispatch({
                            type: CartTypes.EMPTY_CART,
                        });
                        history.push("OrderConfirm");
                    });
                });
            } else {
                dispatch({
                    type: OrderTypes.ORDER_FORM_VALIDATION,
                    payload: res.data,
                });
            }
        });
    };

export const fetchSingleOrderAction = (token, order_no) => async (dispatch) => {
    await apiClient.fetchSingleOrder(token, order_no).then((res) => {
        dispatch({
            type: OrderTypes.SINGLE_ORDER,
            payload: res.data,
        });
    });
};
