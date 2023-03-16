const initialState = {
    metaMaskAddress: '',
    chainId: ''
};


const MetaMaskReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'META_MASK_ADD':
            return {
                ...state,
                metaMaskAddress: action.payload,
            };
        case 'CHAIN_ID':
            return {
                ...state,
                chainId: action.payload,
            };
        default:
            return state;
    }
};

export default MetaMaskReducer;