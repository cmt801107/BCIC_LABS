const assert = require("assert");
const Room = require("../Room");

describe("模組A", () => {
    describe("模組1", () => {
        it("this is test1", () => { })
        it("this is test2", () => { })
        it("this is test3", () => { })
    })
     describe("模組2", () => {
        it("this is test1", () => { })
        it("this is test2", () => { })
        it("this is test3", () => { })
    })
})

describe("模組B", () => {
    describe("模組1", () => {
        it("this is test1", () => { })
        it("this is test2", () => { })
        it("this is test3", () => { })
    })
     describe("模組2", () => {
        it("this is test1", () => { 
            assert.fail("HAHAHA");
        })
        it("this is test2", () => { })
        it("this is test3", () => { })
    })
})

describe("模組C", () => {
    describe("模組1", () => {
        it("this is test1", () => { })
        it("this is test2", () => { })
        it("this is test3", () => { })
    })
     describe("模組2", () => {
        it("this is test1", () => { })
        it("this is test2", () => { })
        it("this is test3", () => { })
    })
})
