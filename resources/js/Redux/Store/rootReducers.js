import { combineReducers } from "redux";
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { adminStoreProduct } from "../Actions/Admin/AdminProductActions";
import { LoginAdminReducer } from "../Reducers/Admin/Admin.Reducers";
import { AdminMediaImagesReducer } from "../Reducers/Admin/AdminMediaImages.Reducers";
import { CartReducers } from "../Reducers/Cart.Reducers";
import { CheckoutPaymentReducer } from "../Reducers/Checkout.Reducers";
import {
    createOrderReducer,
    fetchOrderReducer,
} from "../Reducers/Order.Reducers";
import {
    GetProductbyNameReducer,
    GetProductReducer,
    GetSingleProductReducer,
    ProductRatingReducer,
    ProductStoreReducer,
} from "../Reducers/Product.Reducers";
import {
    LoginUserReducer,
    RegisterUserRducers,
    fetchUserOrderReducer,
    fetchUserWishlistReducer,
} from "../Reducers/User.Reducers";

const persistCartConfig = {
    key: "cart",
    storage: storage,
    whitelist: ["CART"],
};

const persistWishlistConfig = {
    key: "whistelist",
    storage: storage,
};

const persistSingleProductConfig = {
    key: "SINGLE_PRODUCT",
    storage: storage,
};

const persistAuthConfig = {
    key: "auth",
    storage: storage,
    transforms: [
        encryptTransform({
            secretKey: "my-super-secret-key",
            onError: function (error) {
                console.log("Error in auth config", error);
            },
        }),
    ],
};


const persistAdminAuthConfig = {
    key: "adminAuth",
    storage: storage,
    transforms: [
        encryptTransform({
            secretKey: "my-super-secret-key",
            onError: function (error) {
                console.log("Error in auth config", error);
            },
        }),
    ],
};

const rootReducers = combineReducers({
    USER_LOGIN: persistReducer(persistAuthConfig, LoginUserReducer),
    GET_PRODUCTS: GetProductReducer,
    REGISTER_USER: RegisterUserRducers,
    PRODUCT_STORE: ProductStoreReducer,
    CART: CartReducers,
    CHECKOUT_PAYMENT: CheckoutPaymentReducer,
    CREATE_ORDER: createOrderReducer,
    SINGLE_ORDER: fetchOrderReducer,
    USER_ORDERS: fetchUserOrderReducer,
    USER_WISHLIST: persistReducer(persistWishlistConfig, fetchUserWishlistReducer),
    SINGLE_PRODUCT:   GetSingleProductReducer ,
    PRODUCT_RATING: ProductRatingReducer,
    SEARCHED_PRODUCT: GetProductbyNameReducer,

    //ADMIN
    ADMIN_LOGIN: persistReducer(persistAdminAuthConfig, LoginAdminReducer),
    CREATE_PRODUCT : adminStoreProduct,
    MEDIA_IMAGES : AdminMediaImagesReducer

});

export default persistReducer(persistCartConfig, rootReducers);
