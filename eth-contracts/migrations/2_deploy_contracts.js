// migrating the appropriate contracts
// var SquareVerifier = artifacts.require("./SquareVerifier.sol");
// var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
var Realty = artifacts.require("Realty");

module.exports = function (deployer) {
  // deployer.deploy(SquareVerifier);
  deployer.deploy(Realty);
  // deployer.deploy(SolnSquareVerifier);
};
