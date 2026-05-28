const Chat = artifacts.require("Chat")
//const assert = require("assert")
const should = require('chai').should()
contract("測試Call", () => {
    let chat
    beforeEach(async () => {
        // 初始化合約object
        chat = await Chat.deployed()
        console.log("chat 合約 address 是:", chat.address)
    })
    it("合約部署了", async () => {
        // should explain1
        // const xyz = 'abc null'
        // should.not.exist(xyz)
        //
        // should explain2
        //const xyz = 'abc'
        //const xyz = null
        //should.exist(xyz)
        should.exist(chat,'合約不該為空')
        //expect(chat, '合約不該為空').to.not.be.null
    })
    it("合約互動, 取得預設值", async () => {
        // this will not work
        //chat.message().should.equal("this is a formal document regarding...")

        // this will work, because of await resolve promise
        (await chat.message()).should.equal("this is a formal document regarding...")
    })
    it("合約互動, 設值並且取得新值", async () => {
        const newMessage = "change to something";
        await chat.setMessage(newMessage);
        (await chat.getMessage()).should.equal(newMessage)
    })
})