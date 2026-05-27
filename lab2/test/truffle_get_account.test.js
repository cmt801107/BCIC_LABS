contract("test Call.sol contract",(accounts)=>{
    it("檢查部署的帳號",()=>{
        console.log("first account=",accounts[0])
    })
    it("async 檢查部署的帳號",async ()=>{
        console.log("first account=",accounts[0])
    })
    it("async 檢查部署的帳號的餘額",async ()=>{
        console.log("first account balance=",await web3.eth.getBalance(accounts[0]))
    })
})