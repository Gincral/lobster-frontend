
import {Connection, PublicKey} from '@solana/web3.js'

import {sleep} from './sleep'

export async function airDrop(
  publicKey: PublicKey,
  connection: Connection,
  lamports: number = 10000000000, 
): Promise<PublicKey> {

  const initial = await connection.getBalance(publicKey)
  const expected = initial + lamports

  let retries = 10
  await connection.requestAirdrop(publicKey, lamports)
  for (;;) {
    await sleep(500)
    if (expected === (await connection.getBalance(publicKey))) {
      return publicKey
    }
    if (--retries <= 0) {
      break
    }
    console.log('Airdrop retry ' + retries)
  }
  throw new Error(`Airdrop of ${lamports} failed`)
}
