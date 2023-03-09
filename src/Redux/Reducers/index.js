import { combineReducers } from "redux";
import MetaMaskReducer from './metaMaskReducer/MetaMaskReducer';
import { AuthReducer } from './AuthReducer/AuthReducer';


const RootReducer = combineReducers({
    MMReducer: MetaMaskReducer,
    AuthReducer: AuthReducer,
});

export default RootReducer;