import { CartTypes } from "../Types/Cart.Types";
const initProduct = {
    numberCart: 0,
    Carts: [],
};

export const CartReducers = (state = initProduct, action) => {
    switch (action.type) {
        case CartTypes.GET_NUMBER_CART:
            return {
                ...state,
            };
        case CartTypes.ADD_CART:
            if (state.numberCart == 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    product_name: action.payload.product_name,
                    product_image: action.payload.product_image,
                    product_price: action.payload.product_price,
                };
                state.Carts.push(cart);
            } else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.id == action.payload.id) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        product_name: action.payload.product_name,
                        product_image: action.payload.product_image,
                        product_price: action.payload.product_price,
                    };
                    state.Carts.push(_cart);
                }
            }
            return {
                ...state,
                numberCart: state.numberCart + 1,
            };
        case CartTypes.INCREASE_QUANTITY:
            state.numberCart++;
            state.Carts[action.payload].quantity++;

            return {
                ...state,
            };
        case CartTypes.DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }

            return {
                ...state,
            };
        case CartTypes.DELETE_CART:
            let quantity_ = state.Carts[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                Carts: state.Carts.filter((item) => {
                    return item.id != state.Carts[action.payload].id;
                }),
            };
        case CartTypes.EMPTY_CART:
            return (state = initProduct);
        default:
            return state;
    }
};
