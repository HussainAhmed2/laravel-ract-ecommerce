import { CartTypes } from "../Types/Cart.Types";

export function GetNumberCart() {
    return {
        type: CartTypes.GET_NUMBER_CART,
    };
}

export function AddCart(payload) {
    return {
        type: CartTypes.ADD_CART,
        payload,
    };
}
export function UpdateCart(payload) {
    return {
        type: CartTypes.UPDATE_CART,
        payload,
    };
}
export function DeleteCart(payload) {
    return {
        type: CartTypes.DELETE_CART,
        payload,
    };
}

export function IncreaseQuantity(payload) {
    return {
        type: CartTypes.INCREASE_QUANTITY,
        payload,
    };
}
export function DecreaseQuantity(payload) {
    return {
        type: CartTypes.DECREASE_QUANTITY,
        payload,
    };
}
