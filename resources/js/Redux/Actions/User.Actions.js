import storage from "redux-persist/lib/storage";
import Swal from "sweetalert2";
import apiClient from "../../config/endpoints";
import { UserTypes } from "../Types/User.Types";

export const user_login = (postData, history) => async (dispatch) => {
  await apiClient
    .login(postData)
    .then((res) => {
      dispatch({
        type: UserTypes.USER_LOGIN,
        payload: res.data,
      });
      Swal.fire({
        icon: "success",
        title: "Login Success",
        text: "Wellcome !",
        button: false,
        timer: 2000,
      }).then(() => {
        history.push("/");
      });
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response.data.message,
        button: false,
        timer: 2000,
      });
    });
};

export const logOutAction = (history) => {
  storage.removeItem("persist:auth");
  window.location.href = "/login";
  return {
    type: UserTypes.USER_LOGOUT,
  };
};

export const registerAction = (postData, history) => async () => {
  await apiClient
    .register(postData)
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: res.response,
        button: false,
        timer: 2000,
      }).then(() => {
        window.location.href = "/login";
      });
    })
    .catch((error) => {
      console.log("register error", error.response.data.message);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response.data.message,
        button: false,
        timer: 2000,
      });
    });
};
