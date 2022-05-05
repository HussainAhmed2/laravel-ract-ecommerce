import { CheckOutTypes } from "../Types/Checkout.Types";
import apiClient from "../../config/endpoints";

export const checkoutPaymenyAction = (postData) => async (dispatch) => {
    await apiClient.paymenyPay(postData).then((res) => {
        dispatch({
            type: CheckOutTypes.PAYMENT_PAY,
            payload: res.data,
        });
    });
};
