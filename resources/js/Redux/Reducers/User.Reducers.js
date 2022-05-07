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
const initialUserState = {
    User: {
        token: "",
        user: {
            id: "",
        },
    },
};

const initialStateWishlist = {
    Wishlist: {
        wishlists: [],
    },
};

export const LoginUserReducer = (
    state = initialUserState,
    { type, payload }
) => {
    switch (type) {
        case UserTypes.USER_LOGIN:
            return { ...state, User: payload };

        case UserTypes.USER_LOGOUT:
            return {};

        default:
            return state;
    }
};

export const fetchUserOrderReducer = (state = [], { type, payload }) => {
    switch (type) {
        case UserTypes.USER_GET_ORDERS:
            return { ...state, UserOrders: payload };

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

export const AddToWishlistReducer = (state = [], { type, payload }) => {
    switch (type) {
        case UserTypes.ADD_TO_WHISHLIST:
            return { ...state, Wishlist: payload };
        case UserTypes.FETCH_WHISHLIST:
            return { ...state, Wishlist: payload };

        default:
            return state;
    }
};

export const fetchUserWishlistReducer = (
    state = initialStateWishlist,
    { type, payload }
) => {
    switch (type) {
        case UserTypes.FETCH_WHISHLIST:
            return { ...state, Wishlist: payload };

        default:
            return state;
    }
};
