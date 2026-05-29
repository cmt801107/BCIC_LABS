const GMR = artifacts.require("GMR")
contract("這是部署的情形", (accounts) => {
    let gmr;
    beforeEach(async () => {
        gmr = await GMR.deployed()
    })
    it("取得合約與管理者 ", async () => {
        const manager = await gmr.manager()
        console.log(`合約位置是${gmr.address}, manager是${manager}`)
    })
})