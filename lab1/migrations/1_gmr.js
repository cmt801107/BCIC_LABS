const GMR = artifacts.require("GMR");
module.exports = function(_deployer, network, accounts) {
  // Use deployer to state migration tasks.
  _deployer.deploy(GMR, {from: accounts[1]})
};