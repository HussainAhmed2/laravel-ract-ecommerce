import { UserTypes } from "../Types/User.Types";

const initialState = {
    REGISTERED_VALIDATION: {
        first_name: "",
        last_name: "",
        mobile_no: "",
        email: "",
        password: "",
    },
};

export const LoginUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case UserTypes.USER_LOGIN:
            return { ...state, User: payload };

        case UserTypes.USER_LOGOUT:
            return {};

        default:
            return state;
    }
};

export const RegisterUserRducers = (
    state = initialState,
    { type, payload }
) => {
    switch (type) {
        case UserTypes.REGISTERED_VALIDATION:
            return { ...state, REGISTERED_VALIDATION: payload };

        case UserTypes.USER_LOGOUT:
            return {};

        default:
            return state;
    }
};
