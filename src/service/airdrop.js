
import { LAMPORTS_PER_SOL, Transaction } from '@solana/web3.js'
import { getNodeConnection } from './nodeConnection'
import {airDrop} from './util/air-drop'

export async function airDropSOL(publicKey) {
    const connection = await getNodeConnection();
    await airDrop(publicKey, connection)
    let bal = await connection.getBalance(publicKey)
    console.log( "Balance of", publicKey.toString(), "is", bal, "(", bal/LAMPORTS_PER_SOL, ")" )
}
