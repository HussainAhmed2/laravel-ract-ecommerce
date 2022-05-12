

import { AdminProductTypes } from "../../Types/Admin/AdminProduct.Types";
import apiClient from "../../../config/admin_endpoints";
import Swal from "sweetalert2";

export const adminStoreProduct = (postData,history) => async (dispatch) => {
    await apiClient.storeProduct(postData).then((res) => {
        if(res.data.status == 200){
            dispatch({
                type: AdminProductTypes.STORE_PRODUCT,
                payload: res.data,
            });
            Swal.fire({
                icon: "success",
                title: "Login Success",
                text: res.data.message,
                showCancelButton: false,
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                history.push("/" + any_dir + "admin/ProductsList");
            });
        }

    });
};
