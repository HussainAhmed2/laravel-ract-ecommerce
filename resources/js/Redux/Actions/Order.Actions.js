import { OrderTypes } from "../Types/Order.Types";
import apiClient from "../../config/endpoints";
import Swal from "sweetalert2";
import storage from "redux-persist/lib/storage";

let any_dir = process.env.MIX_SUB_DIR || "";

export const createOrderAction =
    (token, postData, history) => async (dispatch) => {
        await apiClient.createOrder(token, postData).then((res) => {
            if (res.data.status != 404) {
                dispatch({
                    type: OrderTypes.CREATE_ORDER,
                    payload: res.data,
                });
                storage.removeItem("persist:cart");
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: res.data.message,
                    button: false,
                    timer: 2000,
                }).then(() => {
                    history.push("OrderConfirm");
                });
            } else {
                dispatch({
                    type: OrderTypes.ORDER_FORM_VALIDATION,
                    payload: res.data,
                });
            }
        });
    };
