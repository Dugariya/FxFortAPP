export const IsWalletConnectedHandler = (value) => {
    return {
        type: 'IS_WALLET_CONNECT',
        payload: value,
    }
}
export const WalletAddressHandler = (value) => {
    return {
        type: 'WALLET_ADDRESS',
        payload: value,
    };
};