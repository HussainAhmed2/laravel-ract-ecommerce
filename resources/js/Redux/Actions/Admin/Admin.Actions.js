import { AdminTypes } from "../../Types/Admin/Admin.Types";
import storage from "redux-persist/lib/storage";
import apiClient from "../../../config/admin_endpoints";


export const admin_login = (postData, history) => async (dispatch) => {
    await apiClient
        .login(postData)
        .then((res) => {
            if(res.data.user.userType == '0'){
                dispatch({
                    type: AdminTypes.ADMIN_LOGIN,
                    payload: res.data,
                });

                Swal.fire({
                    icon: "success",
                    title: "Login Success",
                    text: "Wellcome !",
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 2000,
                }).then(() => {
                    history.push("/" + any_dir + "admin/Dashboard");
                });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Login Faild",
                    text: "Your are not admin !",
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 2000,
                })
            }

        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.response.data.message,
                showCancelButton: false,
                showCloseButton: false,
                showConfirmButton: false,
                timer: 2000,
            });
        });
};

export const AdminlogOutAction = (history) => {
    storage.removeItem("persist:adminAuth");
    history.push("/" + any_dir + "admin/login");
    return {
        type: AdminTypes.ADMIN_LOGOUT,
    };
};
