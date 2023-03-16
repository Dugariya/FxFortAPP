export const IsLoginHandler = (value) => {
    return {
        type: 'IS_LOGIN',
        payload: value
    };
};
export const SplashLoadingHandler = (value) => {
    return {
        type: 'SPLASH_LOADING',
        payload: value
    };
};
export const PassCodeHandler = (value) => {
    return {
        type: 'PASS_CODE',
        payload: value
    };
};
export const UserDataHandler = (value) => {
    return {
        type: 'SET_USER_DATA',
        payload: value
    };
};
export const UserTokenHandler = (value) => {
    return {
        type: 'USER_TOKEN',
        payload: value
    };
}; 