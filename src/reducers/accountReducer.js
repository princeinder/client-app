import {
    LOADING,
    ACCOUNT_SIGNIN,
    ACCOUNT_SIGNUP,
    GET_ERRORS,
} from "../types/index";
export const accountState = {
    loading: false,
    success: "",
    error: "",
};

export function accountReducer(state = accountState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
                error: "",
                success: "",
            };
        case ACCOUNT_SIGNIN:
            return {
                ...state,
                loading: false,
                error: "",
                success: "",
            };
        case ACCOUNT_SIGNUP:
            return {
                ...state,
                loading: false,
                error: "",
                success: action.payload,
            };
        case GET_ERRORS:
            return {
                ...state,
                loading: false,
                error: action.payload,
                success: "",
            };

        default:
            return state;
    }
}
