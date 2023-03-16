const initialState = {
    splashLoading: true,
    passCode: null,
    userData: null,
    userToken: null,
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
        case 'PASS_CODE':
            return {
                ...state,
                passCode: action.payload,
            }
        case 'SET_USER_DATA':
            return {
                ...state,
                userData: action.payload,
            }
        case 'USER_TOKEN':
            return {
                ...state,
                userToken: action.payload,
            }


        default:
            return state;
    }
}

