
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