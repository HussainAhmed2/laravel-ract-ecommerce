
import { AdminMediaImagesTypes } from "../../Types/Admin/AdminMediaImageTypes";
import apiClient from "../../../config/admin_endpoints";

export const AdminfetchMediaImagesAction = (token, user_id) => async (dispatch) => {
    await apiClient.fetchMediaImages(token, user_id).then((res) => {
        dispatch({
            type: AdminMediaImagesTypes.FETCH_IMAGES,
            payload: res.data,
        });
    });
};
