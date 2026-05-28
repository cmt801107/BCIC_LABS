const Chat = artifacts.require("Chat")
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised').default
chai.use(chaiAsPromised)
const should = chai.should()

contract("測試Call", () => {
    let chat
    beforeEach(async () => {
        // 初始化合約object
        chat = await Chat.deployed()
        console.log("chat 合約 address 是:", chat.address)
    })
    it("合約部署了", async () => {
        should.exist(chat,'合約不該為空')
    })
    it("合約互動, 取得預設值", async () => {
        // this will not work
        //chat.message().should.equal("this is a formal document regarding...")

        // this will work, because of await resolve promise
        //(await chat.message()).should.equal("this is a formal document regarding...")

        // this will work, because of chai-as-promised
        return chat.message().should.eventually.equal("this is a formal document regarding...")
    })
    it("合約互動, 設值並且取得新值", async () => {
        const newMessage = "change to something";
        await chat.setMessage(newMessage);
        return chat.getMessage().should.eventually.equal(newMessage)
    })
})