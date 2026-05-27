const GMR = artifacts.require("GMR");
module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(GMR)
};