var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
var Verifier = artifacts.require("Verifier");

contract("SolnSquareVerifier", (accounts) => {
  const owner = accounts[0];
  const account_one = accounts[1];
  const account_two = accounts[2];

  describe("TestSolnSquareVerifier", () => {
    beforeEach(async () => {
      const verifierContract = await Verifier.new({ from: owner });
      this.contract = await SolnSquareVerifier.new(verifierContract.address, {
        from: owner,
      });
    });

    it("Test if a new solution can be added for contract - SolnSquareVerifier", async () => {
      await this.contract.deleteSolutions({ from: owner });
      await this.contract.addSolution(1, account_one, {
        from: owner,
      });
      const tokenCount = await this.contract.solutionCount({ from: owner });

      assert.equal(tokenCount, 1, "Solution not added correctly");
    });

    it("Test if an ERC721 token can be minted for contract - SolnSquareVerifier", async () => {
      await this.contract.mintToken(
        accounts[1],
        accounts[2],
        1,
        [
          "0x1917c8ae0e0e292a67a42f6749de814d92f57dbd10b176b780aad7ca8b92e7fc",
          "0x14ef8274fe1ab83097de4b24ab5fdfd8e3f2c96a2e43c2d016741ef1ea533140",
        ],
        [
          [
            "0x2dc2bd77213bcf78d6ac10eeeb62b9adfd72fd913979bc0102c19dbd6f8cf934",
            "0x148bf59be7d85c034abb6c50dc6638701a4fbcbbec1d49c8270bbc48108f5bf9",
          ],
          [
            "0x189f152f2073ee9bcc3fa38e603fc7e17eb303e72d12f822bf66310701444ff5",
            "0x0fe645f2ee1305ea7040c0c570a4dbce148acdb3b6886a0a9db1141eff6bbb9b",
          ],
        ],
        [
          "0x1662c78968e375badec295c918612473ce3240ba95dd8590452838b3061f9c9d",
          "0x24bf8d7ba26341751067982c3f80e469326e49612b05d7629ec4fae58fe324fb",
        ],
        [
          "0x0000000000000000000000000000000000000000000000000000000000000014",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
        ],
        { from: owner }
      );
    });
  });
});
