import { CheckOutTypes } from "../Types/Checkout.Types";

export const CheckoutPaymentReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case CheckOutTypes.PAYMENT_PAY:
            return { ...state, Payment: payload };

        default:
            return state;
    }
};
