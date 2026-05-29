const GMR = artifacts.require("GMR")
const chai = require("chai")
const chaiAsPromised = require('chai-as-promised').default
chai.use(chaiAsPromised)
const assert = chai.assert
const should = chai.should()

let gmr;

contract("測試GMR合約", (accounts) => {
    const MANAGER_ID = 9;
    const NON_MANAGER_ID = 3;
    beforeEach(async () => {
        //gmr = await GMR.deployed()
        gmr = await GMR.new({from: accounts[MANAGER_ID]})
    })

    it("取得鏈的帳戶", () => {
        console.log(`共 ${accounts.length} 個帳戶`,)
        console.log("第一個帳戶是:",accounts[0])
        console.log("第二個帳戶是:",accounts[1])
    })
    it("有部署", () => {
        console.log("gmr 有被部署", gmr.address)
    })

    it("查詢合約餘額", async ()=> {
        let balance = await gmr.getBalance();
        let numBalance = balance.toNumber();
        console.log(`gmr contract balance = ${numBalance}`)
    })

    it("用web3查詢合約餘額", async ()=> {
        let balance = await web3.eth.getBalance(gmr.address);
        console.log(`by web3, gmr balance = ${balance}`)
    })

    it("不轉帳加入遊戲", async () => {
         try {
            await gmr.enterGame() // this test should fail
            assert(false);
        } catch(error) {
            console.log("error caught, error=",error.message)
            const messageIndex = error.message.search("processing transaction")
            assert.isAbove(messageIndex, -1, "vm should throw error and rollback")
        }
    })

    it("使用者1轉帳加入遊戲", async () => {
        const value = await gmr.getBalance()
        const numberValue = value.toNumber()
        console.log("before join, gmr contract balance=", numberValue)
        const a0BalanceBefore = await web3.eth.getBalance(accounts[0])
        console.log("before join, balance=", a0BalanceBefore)
        await gmr.enterGame({ value: web3.utils.toWei("0.02","ether") })
        const a0BalanceAfter = await web3.eth.getBalance(accounts[0])
        console.log("after join, balance=", a0BalanceAfter)
        const diff = a0BalanceBefore - a0BalanceAfter
        console.log("diff=", diff)
        console.log("after join, gmr contract balance=", (await gmr.getBalance()).toString())
    })

    it("使用者1轉帳加入遊戲, 使用者陣列應改變", async()=>{
        let players = await gmr.getCurrentPlayers()
        console.log("before players=", players)
        await gmr.enterGame({value: web3.utils.toWei("0.02", "ether")})
        players = await gmr.getCurrentPlayers()
        console.log("after players=", players)
        assert.equal(players[0], accounts[0])
        assert.equal(players.length, 1)
    })

    it("多使用者加入, 使用者陣列對應改變", async()=>{
        const users = [accounts[1], accounts[2], accounts[3]]
        for(let u of users) {
            await gmr.enterGame({
                from: u,
                value: web3.utils.toWei("0.02", "ether")
            })
        } 
        const players = await gmr.getCurrentPlayers()
        assert.equal(players[0], users[0])
        assert.equal(players[1], users[1])
        assert.equal(players[2], users[2])
        assert.equal(accounts[1], players[0])
    })

       it("管理者可付款", async () => {
        const users = [accounts[1], accounts[0], accounts[3]]
        for (let u of users) {
            await gmr.enterGame({
                from: u,
                value: web3.utils.toWei("2", "ether")
            })
        }
        const account1Before = await web3.eth.getBalance(accounts[1])
        const account0Before = await web3.eth.getBalance(accounts[0])
        const account3Before = await web3.eth.getBalance(accounts[3])
        console.log("account 1 before=", account1Before)
        console.log("account 0 before=", account0Before)
        console.log("account 3 before=", account3Before)
        let value = await gmr.getBalance()
        let numberValue = value.toString()
        console.log("before payment gmr contract balance=", numberValue)
        await gmr.payMoneyToPlayer({from: accounts[MANAGER_ID]})
        value = await gmr.getBalance()
        numberValue = value.toString()
        console.log("after payment gmr contract balance=", numberValue)
        const account1After = await web3.eth.getBalance(accounts[1])
        const account0After = await web3.eth.getBalance(accounts[0])
        const account3After = await web3.eth.getBalance(accounts[3])
        console.log("account 1 after=", account1After)
        console.log("account 0 after=", account0After)
        console.log("account 3 after=", account3After)
    })

    it("非合約創建管理者應該會出錯", async()=> {
        await gmr.enterGame({
            from: accounts[3],
            value: web3.utils.toWei("0.02", "ether")
        })
        try {
            await gmr.payMoneyToPlayer({ from: accounts[NON_MANAGER_ID] })
            assert.fail("should not run till here...")
        } catch (e) {
            assert.isAbove(e.message.search("processing transaction")
                , -1, "not manager to pay to customers should cause vm error")
        }
    })
})