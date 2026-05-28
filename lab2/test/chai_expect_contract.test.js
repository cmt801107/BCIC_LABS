const Chat = artifacts.require("Chat")
//const assert = require("assert")
const expect = require('chai').expect
contract("測試Call", () => {
    let chat
    beforeEach(async () => {
        // 初始化合約object
        chat = await Chat.deployed()
        console.log("chat 合約 address 是:", chat.address)
    })
    it("合約部署了", async () => {
        expect(chat,'合約不該為空').to.not.be.null
    })
    it("合約互動, 取得預設值", async () => {
        expect(await chat.message()).to.equal("this is a formal document regarding...");
    })
    it("合約互動, 設值並且取得新值", async () => {
        const newMessage = "change to something";
        await chat.setMessage(newMessage);
        expect(await chat.getMessage()).to.equal(newMessage)
    })
})