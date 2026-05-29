const GMR = artifacts.require("GMR");
module.exports = function(_deployer, network, accounts) {
  // Use deployer to state migration tasks.
  
  //若沒指定，會預設用account[0], 若truffule-config.js有指定，則會以truffule-config為主
  //_deployer.deploy(GMR)

  //若再migration指定，又會以migration的為主
  _deployer.deploy(GMR, {from: accounts[1]})

  //優先序: migration > truffule-config > 不指定(account[0])
};