import { ProductTypes } from "../Types/Product.Types";

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
