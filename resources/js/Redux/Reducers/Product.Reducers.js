import { ProductTypes } from "../Types/Product.Types";


const initStateRating = {
    Validation: {
        message: {
            name: [""],
            email: [""],
            review: [""],
            rating: [""],
        },
    },
};

export const GetProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ProductTypes.FETCH_PRODUCT:
            return { ...state, Products: payload };
        case ProductTypes.GET_PRODUCTS:
            return { ...state, Products: payload };
        case ProductTypes.GET_SINGLE_PRODUCT:
            return { ...state, Product: payload };

        default:
            return state;
    }
};

export const ProductStoreReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ProductTypes.STORE_PRODUCT:
            return { ...state, Product: payload };
        case ProductTypes.VALIDATION_ERRORS:
            return { ...state, ProductValidation: payload };

        default:
            return state;
    }
};

export const GetSingleProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ProductTypes.GET_SINGLE_PRODUCT:
            return { ...state, Product: payload };

        default:
            return state;
    }
};

export const ProductRatingReducer = (state = initStateRating, { type, payload }) => {
    switch (type) {
        case ProductTypes.PRODUCT_RATING:
            return { ...state, Product: payload };
        case ProductTypes.PRODUCT_RATING_VALIDATION_ERRORS:
            return { ...state, Validation: payload };
            case ProductTypes.REMOVE_PRODUCT_RATING_VALIDATION_ERRORS:
            return  state = initStateRating ;

        default:
            return state;
    }
};
