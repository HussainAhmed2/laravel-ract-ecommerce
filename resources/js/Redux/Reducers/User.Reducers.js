import { UserTypes } from "../Types/User.Types";

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
