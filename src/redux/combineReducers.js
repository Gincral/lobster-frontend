import { combineReducers } from 'redux';

const walletConnectedReducer = (state=false, action) =>{
    switch(action.type){
        case 'CONNECT_WALLET':
            return action.payload;
        case 'DISCONNECT_WALLET':
            return action.payload;
        default:
            return state;
    }
};

const userAddressReducer = (state=null, action) =>{
    switch(action.type){
        case 'SET_USER_ADDRESS':
            return action.payload;
        case 'CLEAR_USER_ADDRESS':
            return action.payload;
        default:
            return state;
    }
}

const LOBEEbalanceReducer = (state=null, action) =>{
    switch(action.type){
        case 'SET_LOBEE_BALANCE':
            return action.payload;
        case 'CLEAR_LOBEE_BALANCE':
            return action.payload;
        default:
            return state;
    }
}

const SOLbalanceReducer = (state=null, action) =>{
    switch(action.type){
        case 'SET_SOL_BALANCE':
            return action.payload;
        case 'CLEAR_SOL_BALANCE':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    walletConnected: walletConnectedReducer,
    userAddress: userAddressReducer,
    LOBEEbalance: LOBEEbalanceReducer,
    SOLbalance: SOLbalanceReducer,
});