// migrating the appropriate contracts
var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
var Realty = artifacts.require("Realty");

module.exports = function (deployer) {
  deployer.deploy(Realty);
  deployer.deploy(Verifier).then(() => {
    return deployer.deploy(SolnSquareVerifier, Verifier.address);
  });
};
