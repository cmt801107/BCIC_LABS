const assert = require("assert")
const { Web3 } = require("web3")
const ganache = require("ganache-cli")
const web3 = new Web3(ganache.provider())
it("檢查", () => {
    //    console.log("assert=",assert)
    //    console.log("web3=",Web3)
    //    console.log("ganache-cli=",ganache)
    //    console.log("web3=", web3)
})
beforeEach(() => {
    console.log("web3 取得帳號")
    web3.eth.getAccounts().then(result => {
        console.log("result type=", typeof result, Array.isArray(result))
        console.log("result=",result)
    }).catch(ex => {
        console.log(ex)
    })
    console.log("web3 return")

})
describe("檢視合約", () => {
    it("合約是有被部署的", () => {
        console.log("我們要測合約了")
    })
})