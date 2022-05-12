
import { AdminProductTypes } from "../../Types/Admin/AdminProduct.Types";



export const AdminStoreReducer = (
    state = {},
    { type, payload }
) => {
    switch (type) {
        case AdminProductTypes.STORE_PRODUCT:
            return { ...state, StoreProduct: payload };


        default:
            return state;
    }
};
