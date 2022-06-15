import { AdminMediaImagesTypes } from "../../Types/Admin/AdminMediaImageTypes";




export const AdminMediaImagesReducer = (
    state = {},
    { type, payload }
) => {
    switch (type) {
        case AdminMediaImagesTypes.FETCH_IMAGES:
            return { ...state, MediaImages: payload };


        default:
            return state;
    }
};
