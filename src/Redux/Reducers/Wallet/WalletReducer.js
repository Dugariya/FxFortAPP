const initialState = {
    isWalletConnected: '',
    walletAddress: '',
};

const WalletReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'IS_WALLET_CONNECT':
            return {
                ...state,
                isWalletConnected: action.payload,
            };
        case 'WALLET_ADDRESS':
            return {
                ...state,
                walletAddress: action.payload,
            };
        default:
            return state;
    }
}
export default WalletReducer;