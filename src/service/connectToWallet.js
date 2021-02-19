import Wallet from '@project-serum/sol-wallet-adapter';
// import { connectToWallet, disconnectToWallet, setUserAddress, clearUserAddress } from '../redux/actions';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import axios from 'axios';

export async function wallet() {
  let providerUrl = 'https://www.sollet.io';
  let wallet = new Wallet(providerUrl);
  wallet.on('connect', publicKey => {
    console.log('Connected to ' + publicKey.toBase58())
    // (connectToWallet());
    // Dispatch(setUserAddress(publicKey.toBase58()));
  });
  wallet.on('disconnect', () => console.log('Disconnected'));
  await wallet.connect();
}

export async function getSOLBalance(publicKey) {
  // const url = 'http://localhost:8899';
  const url = 'http://api.devnet.solana.com';
  const body = { "jsonrpc": "2.0", "id": 1, "method": "getBalance", "params": [publicKey] }
  const responce = await axios.post(url, body);
  const balance = responce.data.result.value
  return balance/LAMPORTS_PER_SOL;
}

export async function getLOBEEBalance(publicKey) {
  // const url = 'http://localhost:8899';
  const url = 'http://api.devnet.solana.com';
  const body = {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getProgramAccounts",
    "params": [
      "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
      {
        "encoding": "jsonParsed",
        "filters": [
          {
            "dataSize": 165
          },
          {
            "memcmp": {
              "offset": 32,
              "bytes": publicKey
            }
          }
        ]
      }
    ]
  }
  const responce = await axios.post(url, body);
  try{
    const balance = responce.data.result[0].account.data.parsed.info.tokenAmount.amount;
    return balance/LAMPORTS_PER_SOL;
  }catch{
    return 0;
  }
  
  
  // return balance;
}