import { OrderTypes } from "../Types/Order.Types";

const initState = {
    Validation: {
        message: {
            address: [""],
            country: [""],
            city: [""],
            state: [""],
        },
    },
};

export const createOrderReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case OrderTypes.CREATE_ORDER:
            return { ...state, CREATED_ORDER: payload };
        case OrderTypes.ORDER_FORM_VALIDATION:
            return { ...state, Validation: payload };

        default:
            return state;
    }
};
