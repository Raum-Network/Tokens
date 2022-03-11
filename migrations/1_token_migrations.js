const tokens = artifacts.require("RaumNetwork");

module.exports = function (deployer) {
  deployer.deploy(tokens);
};
