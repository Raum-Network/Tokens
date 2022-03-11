const sale = artifacts.require("RaumSale");

module.exports = function (deployer) {
  deployer.deploy(sale);
};
