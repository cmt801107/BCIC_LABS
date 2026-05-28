const GMR = artifacts.require("GMR")
let gmr;
beforeEach(async () => {
    gmr = await GMR.deployed()
})
contract("測試GMR合約", (accounts) => {
    it("取得鏈的帳戶", () => {
        console.log(`共 ${accounts.length} 個帳戶`,)
        console.log("第一個帳戶是:",accounts[0])
        console.log("第二個帳戶是:",accounts[1])
    })
    it("有部署", () => {
        console.log("gmr 有被部署", gmr.address)
    })
})