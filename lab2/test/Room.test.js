const assert = require("assert");
const Room = require("../Room");

describe("Room functionaly",()=> {
    it("測試開門",()=>{
        const r  = new Room();
        assert.strictEqual(r.open(), 'welcome');
    })

    it("測試關門",()=>{
        const r  = new Room();
        assert.strictEqual(r.close(), 'bye');
    })
})