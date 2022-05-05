import { CartTypes } from "../Types/Cart.Types";
import Swal from "sweetalert2";
import toast from "./../../config/toast";

export function GetNumberCart() {
    return {
        type: CartTypes.GET_NUMBER_CART,
    };
}

export function AddCart(payload) {
    if (payload) {
        Swal.fire({
            icon: "success",
            title: "Success",
            text: " This Item Added in Cart",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 1500,
        });
    }
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

export const emptyCartAction = () => {
    return {
        type: CartTypes.EMPTY_CART,
    };
};
