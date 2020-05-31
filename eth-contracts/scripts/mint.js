const HDWalletProvider = require("@truffle/hdwallet-provider");
const web3 = require("web3");
const MNEMONIC = process.env.MNEMONIC;
const INFURA_KEY = process.env.INFURA_KEY;
const OWNER_ADDRESS = process.env.OWNER_ADDRESS;
const NETWORK = "rinkeby";
const NUM_CREATURES = 1;

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
  console.error(
    "Please set a mnemonic, infura key, owner, network, and contract address."
  );
  return;
}

const NFT_CONTRACT = require("../build/contracts/SolnSquareVerifier");
const NFT_ABI = NFT_CONTRACT.abi;
// const solutionHash = [
//   "0x62181FaF133DA4E767Ca7054F549B0B2605DB7FB",
//   "0x0749D296C6531405E16a6079069ba36c273fC491",
//   "0xc9997136935F233D6C370F4349019C709cA538a6",
//   "0x8CbA10455646b4b866804371F730729F0b660696",
// ];
const to = "0x718770E834F58F7cb9DCD9BbFD947819e464C350";
const proofs = [
  {
    proof: {
      a: [
        "0x305e8c2d3296a4eb18f7889e2f2a0c58a6c935e5f0ef7deb792e7d903d0d8756",
        "0x112e9f4a46750a911829b4456e0ca7ab3415dbe86f40a14356aabd849c8f9e29",
      ],
      b: [
        [
          "0x10fad570019db653b0feae50ad0f632c68f01c430c58fba52933686c29ce912c",
          "0x18685afd36b79ecc1d4fd6013ee5483f173e3c8ded71cf19545f227b708b734e",
        ],
        [
          "0x2860289ecc063e38670c84ba4774d6ad42311f10b336337ec35df6d233e3b2cd",
          "0x0953b6c122ec7f524127889d2ac6594f5432f89732eb90fac93fd42232201195",
        ],
      ],
      c: [
        "0x0f099a71ab78540488fcef7eb2b753d634f8941febd33cebc9081bf62333889c",
        "0x0db6cd3f5946c5e8877fc913ab29dca409f9152e850478fa1356cec1fb6fdaf0",
      ],
    },
    inputs: [
      "0x0000000000000000000000000000000000000000000000000000000000000018",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
    ],
  },
];

async function main() {
  const provider = new HDWalletProvider(
    MNEMONIC,
    `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`
  );
  const web3Instance = new web3(provider);

  if (NFT_CONTRACT_ADDRESS) {
    const nftContract = new web3Instance.eth.Contract(
      NFT_ABI,
      NFT_CONTRACT_ADDRESS,
      { gasLimit: "4500000" }
      // { gasLimit: "1000000" }
    );

    // Creatures issued directly to the owner.
    for (var i = 0; i < NUM_CREATURES; i++) {
      const result = await nftContract.methods
        .mintToken(
          to,
          i,
          proofs[i].proof.a,
          proofs[i].proof.b,
          proofs[i].proof.c,
          proofs[i].inputs
        )
        .send({ from: OWNER_ADDRESS });
      console.log("Minted creature. Transaction: " + result.transactionHash);
    }
  } else {
    console.error("Add NFT_CONTRACT_ADDRESS to the environment variables");
  }
}

main();
