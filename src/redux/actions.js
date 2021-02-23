
export const connectToWallet = () =>({
    type: 'CONNECT_WALLET',
    payload: true,
});

export const disconnectToWallet = () =>({
    type: 'DISCONNECT_WALLET',
    payload: false,
});

export const setUserAddress = (address) =>({
    type: 'SET_USER_ADDRESS',
    payload: address,
});

export const clearUserAddress = () =>({
    type: 'CLEAR_USER_ADDRESS',
    payload: null,
});

export const setLOBEEBalance = (balance) =>({
    type: 'SET_LOBEE_BALANCE',
    payload: balance,
});

export const clearLOBEEBalance = () =>({
    type: 'CLEAR_LOBEE_BALANCE',
    payload: 0.00,
});

export const setSOLBalance = (balance) =>({
    type: 'SET_SOL_BALANCE',
    payload: balance,
});

export const clearSOLBalance = () =>({
    type: 'CLEAR_SOL_BALANCE',
    payload: 0.00,
});