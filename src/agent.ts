import { 
  TransactionEvent, 
  Finding, 
  HandleTransaction, 
  FindingSeverity, 
  FindingType,
  getJsonRpcUrl

} from 'forta-agent'
import Web3 from 'web3';
import {EVENT,PANCAKESWAP_MAIN_STAKING} from "./consts"

const web3 = new Web3(getJsonRpcUrl())
const handleTransaction: HandleTransaction = async (txEvent: TransactionEvent) => {
  const findings: Finding[] = [];
  const events = txEvent.filterLog(EVENT,PANCAKESWAP_MAIN_STAKING.toLowerCase())
  for (const ev of events){
    findings.push(
      Finding.fromObject({
        name: "Withdraw_Liquidity",
        description: `Withdrawded liquidity`,
        alertId: "FORTA-3000",
        severity: FindingSeverity.Info,
        type: FindingType.Info,
        metadata:{
          tx:txEvent.hash,
          amount: `${ev.args.amount}`
        }
        

      })
     )
  }

  return findings;
}

export default {
  handleTransaction
}