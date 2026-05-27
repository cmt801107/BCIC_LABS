const Chat = artifacts.require("Chat")
module.exports = function(_deployer) {
  _deployer.deploy(Chat,"this is a formal document regarding...")
};