const CAC = artifacts.require("CAC")

module.exports = function (deployer) {
    deployer.deploy(CAC, 1000)
}
