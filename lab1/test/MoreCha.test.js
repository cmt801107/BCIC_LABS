const chai = require('chai')
const chaiAsPromised = require('chai-as-promised').default
chai.use(chaiAsPromised)
const assert = chai.assert
const should = chai.should()

const MESSAGE = "VM Exception while processing transaction: revert"
const MESSAGE2 = "HAHA"
it("explain string matching:", () => {
    const result = MESSAGE.search("processing transaction")
    console.log("result=",result)
})
it("explain more about assert,isAbove 1", () => {
    const x = 5
    const y = 7
    assert.isAbove(x, y)
    //failed
})
it("explain more about assert, isAbove 2", () => {
    const x = 15
    const y = 7
    assert.isAbove(x, y)
    //passed
})
it("explain more about assert",()=>{
    const x1 = [1,2,3]
    assert.isArray(x1) //passed
    const x2 = []
    assert.isArray(x2) //passed
    const x3 = null
    assert.isArray(x3) //failed
})