import Wallet from '@project-serum/sol-wallet-adapter';
import { connectToWallet, disconnectToWallet, setUserAddress, clearUserAddress } from '../redux/actions';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

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

export async function getBalance(publicKey) {
  // const url = 'http://localhost:8899';
  const url = 'https://devnet.solana.com';
  const connection = new Connection(url, 'singleGossip');
  const version = await connection.getVersion();
  console.log('Connection to cluster established:', url, version);
  const lamports = await connection.getBalance(publicKey);
  const balance =  (Math.round(lamports / LAMPORTS_PER_SOL * 100) / 100).toFixed(2)
  return balance;
}