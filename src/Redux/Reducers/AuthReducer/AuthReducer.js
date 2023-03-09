const initialState = {
    splashLoading: true,
    isLogin: false,
};

export const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'IS_LOGIN':
            return {
                ...state,
                isLogin: action.payload,
            }
        case 'SPLASH_LOADING':
            return {
                ...state,
                splashLoading: action.payload,
            }

        default:
            return state;
    }
}

