import {
    createTransactionEvent,
    HandleBlock,
    HandleTransaction
  } from "forta-agent"
  import agent from "./agent"
  
  describe("pool created agent", () => {
    let handleTransaction: HandleTransaction
  
    const createTxEventWithLog= () => createTransactionEvent({
      transaction:{
        hash:"0xb48ff57326966812864ddfbf57e9a5540d334d9f6e7c42804b44bd1d37b63199",
        to:"0x73feaa1ee314f8c655e354234017be2193c9e24e",
        from:"123",
        nonce:1,
        gas:"",
        gasPrice:"",
        value:"",
        data:"",
        r:"",
        s:"",
        v:""

        
      },
      type:undefined,
      network:undefined,
      receipt: {
        status:true,
        root:"",
        gasUsed:"",
        cumulativeGasUsed:"",
        logsBloom:"",
        logs:[
            {address:"0x73feaa1ee314f8c655e354234017be2193c9e24e",
             topics:[
                 "0xf279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b568",
                 "0x00000000000000000000000092a2a29155b0cc817f35519e5c125480f5df1a02",
                 "0x0000000000000000000000000000000000000000000000000000000000000000"
                
                ],
             data:"0x0000000000000000000000000000000000000000000000000000000000000000",
             blockHash:"",
             blockNumber:1,
             logIndex:1,
             transactionHash:"",
             transactionIndex:1,
             removed:false
            
            
            }
        ],
        contractAddress:"0x5d2BF248A2a31Da2bdC8FD0b0B6c3ceE71f7175A",
        blockHash:"",
        blockNumber:1,
        transactionHash:"",
        transactionIndex:1

      },
      block:{}as any,
      


    })
  
    beforeAll(() => {
      handleTransaction = agent.handleTransaction
    })
  
    describe("token event", () => {
      it("findings length == 1", async () => {
        const txEvent = createTxEventWithLog()
  
        const findings = await handleTransaction(txEvent)
  
        expect(findings.length).toBe(1)
      })
  
    })
  })