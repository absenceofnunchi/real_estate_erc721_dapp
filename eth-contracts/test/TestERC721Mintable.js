var Realty = artifacts.require("Realty");

contract("TestERC721Mintable", (accounts) => {
  const owner = accounts[0];
  const account_two = accounts[1];
  const account_three = accounts[2];

  describe("match erc721 spec", function () {
    beforeEach(async function () {
      this.contract = await Realty.new({ from: owner });

      // TODO: mint multiple tokens
      for (let i = 0; i < 5; i++) {
        await this.contract.mint(accounts[i], i, { from: owner });
      }
    });

    it("should return total supply", async function () {
      const allTokens = await this.contract.totalSupply();
      assert.equal(
        allTokens.toNumber(),
        5,
        "Inaccurate number of token supplies"
      );
    });

    it("should get token balance", async function () {
      const balance = await this.contract.balanceOf(account_two);

      assert.equal(balance.toNumber(), 1, "Inaccurate balance");
    });

    // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
    it("should return token uri", async function () {
      const tokenURI = await this.contract.tokenURI(1);
      const uri =
        "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1";
      assert.equal(tokenURI, uri, "Invalid token URI");
    });

    it("should transfer token from one owner to another", async function () {
      await this.contract.transferFrom(account_two, account_three, 1, {
        from: account_two,
      });
      const tokenOwner = await this.contract.ownerOf(1);

      assert.equal(tokenOwner, account_three, "Token not transferred properly");
    });
  });

  describe("have ownership properties", function () {
    beforeEach(async function () {
      this.contract = await Realty.new({ from: owner });
    });

    it("should fail when minting when address is not contract owner", async function () {
      let isReverted = false;
      try {
        await this.contract.mint(owner, 10, { from: account_three });
      } catch {
        isReverted = true;
      }
      assert.isTrue(isReverted, "The mint() function is not reverted");
    });

    it("should return contract owner", async function () {
      const ownerAccount = await this.contract.getOwner({ from: owner });
      assert.equal(ownerAccount, owner, "Fetches wrong owner");
    });
  });
});
