// migrating the appropriate contracts
var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
var Realty = artifacts.require("./Realty.sol");

module.exports = function (deployer) {
  deployer.deploy(Realty);
  deployer.deploy(Verifier).then(() => {
    return deployer.deploy(SolnSquareVerifier, Verifier.address);
  });
};
