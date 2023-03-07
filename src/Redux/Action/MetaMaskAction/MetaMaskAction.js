
export const MetaMaskAddHandler = (value) => {
    return {
        type: 'META_MASK_ADD',
        payload: value,
    };
};
export const ChainIdHandler = (value) => {
    return {
        type: 'CHAIN_ID',
        payload: value,
    };
};