const CC = artifacts.require("CommitteeCreator")

module.exports = function (deployer) {
    deployer.deploy(CC)
}