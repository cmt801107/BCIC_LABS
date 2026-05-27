const assert = require("assert")
const { Web3 } = require("web3")
const ganache = require("ganache-cli")
const web3 = new Web3(ganache.provider())

let accounts;
beforeEach(async () => {
    console.log("web3 取得帳號")
    accounts = await web3.eth.getAccounts();
})
describe("檢視合約", () => {
    it("合約是有被部署的, 可以取得帳號", () => {
        console.log("accounts=", accounts)
    })
    it("另一個smart contract的測試, 也可以取得帳號", () => {
        console.log("accounts=", accounts)
    })
})