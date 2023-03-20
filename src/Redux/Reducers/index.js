import { combineReducers } from "redux";
import MetaMaskReducer from './metaMaskReducer/MetaMaskReducer';
import { AuthReducer } from './AuthReducer/AuthReducer';
import WalletReducer from './Wallet/WalletReducer';


const RootReducer = combineReducers({
    MMReducer: MetaMaskReducer,
    AuthReducer: AuthReducer,
    WalletReducer: WalletReducer,
});

export default RootReducer;