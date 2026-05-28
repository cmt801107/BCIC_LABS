const Chat = artifacts.require("../contracts/Chat")
const assert = require("assert")
contract("測試Call", () => {
    let chat
    const defaultVaule = "A234567890";
    beforeEach(async () => {
        // 初始化合約object
        //chat = await Chat.deployed()
        chat = await Chat.new(defaultVaule)

        console.log("chat 合約 address 是:", chat.address)
    })
    it("合約部署了", async () => {
        //assert.ok(chat !== null, '合約不該為空')
        assert(chat, '合約不該為空')
    })
    it("合約互動, 取得預設值", async () => {
        const r1 = await chat.message();
        assert.strictEqual(await chat.message(), defaultVaule);
    })
    it("合約互動, 設值並且取得新值", async () => {
        const newMessage = "change to something";
        await chat.setMessage(newMessage);
        const newReturn = await chat.getMessage()
        assert.strictEqual(newReturn, newMessage)
    })
    it("合約互動, 重新取得預設計值", async () => {
        const r1 = await chat.message();
        assert.strictEqual(await chat.message(), defaultVaule);

    })
})