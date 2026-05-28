const Chat = artifacts.require("../contracts/Chat")
const chaiAsPromised = require('chai-as-promised').default
const chai = require('chai')
chai.use(chaiAsPromised)
const assert = chai.assert
contract("測試Call", () => {
    let chat
    beforeEach(async () => {
        // 初始化合約object
        chat = await Chat.deployed()
        console.log("chat 合約 address 是:", chat.address)
    })
    it("合約部署了", async () => {
        assert.isNotNull(chat, '合約不該為空')
    })
    it("合約互動, 取得預設值", async () => {
        return assert.eventually.equal(chat.message(), "this is a formal document regarding...")
    })
    it("合約互動, 設值並且取得新值", async () => {
        const newMessage = "change to something";
        await chat.setMessage(newMessage);
        return assert.eventually.equal(chat.getMessage(), newMessage)

    })
})