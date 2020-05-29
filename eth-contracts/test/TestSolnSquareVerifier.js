const SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
const Verifier = artifacts.require("Verifier");

contract("SolnSquareVerifier", (accounts) => {
  const owner = accounts[0];
  const account_one = accounts[1];

  beforeEach(async () => {
    const verifierContract = await Verifier.new({ from: owner });
    this.contract = await SolnSquareVerifier(verifierContract.address, {
      from: owner,
    });
  });
  describe("TestSolnSquareVerifier", () => {
    // Test if a new solution can be added for contract - SolnSquareVerifier
    it("can add solution to the contract", async () => {
      await this.contract.addSolution(1, account_one, { from: owner });
      // const result = await this.contract.solutions.call();
      console.log({ result });
    });
  });
});

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
