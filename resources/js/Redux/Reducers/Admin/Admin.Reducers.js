import { AdminTypes } from "../../Types/Admin/Admin.Types";


const initialAdminState = {
    User: {
        token: "",
        user: {
            id: "",
        },
    },
};

export const LoginAdminReducer = (
    state = initialAdminState,
    { type, payload }
) => {
    switch (type) {
        case AdminTypes.ADMIN_LOGIN:
            return { ...state, Admin: payload };

            case AdminTypes.ADMIN_LOGOUT:
            return {};

        default:
            return state;
    }
};
