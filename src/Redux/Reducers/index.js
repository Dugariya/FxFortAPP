import { combineReducers } from "redux";
import MetaMaskReducer from './metaMaskReducer/MetaMaskReducer';


const RootReducer = combineReducers({
    MMReducer: MetaMaskReducer,
});

export default RootReducer;