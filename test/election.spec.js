var Election = artifacts.require("../contracts/Election.sol");

contract("Election", function (accounts) {
  it("Initailizes with two candidates", () =>
    Election.deployed()
      .then((instance) => instance.candidatesCount())
      .then((count) => assert.equal(count, 2)));
});
