const assert = require("assert");

it("this is test A1", ()=>{
    console.log("Test1");

});
it("this is test A2", ()=>{
     console.log("Test2");
});

beforeEach(()=>{
    console.log("每個測試前都會做一遍");
})

afterEach(()=>{
    console.log("每個測試後都會做一遍(紀錄測試的結果)");
})
before(()=>{
    console.log("整個測試前的前置準備");
})

after(()=>{
    console.log("整個完成測試後的清理");
})