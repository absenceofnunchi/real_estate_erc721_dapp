const HDWalletProvider = require("@truffle/hdwallet-provider");
const web3 = require("web3");
const MNEMONIC = process.env.MNEMONIC;
const INFURA_KEY = process.env.INFURA_KEY;
const OWNER_ADDRESS = process.env.OWNER_ADDRESS;
const NETWORK = process.env.NETWORK;
const NETWORK = "rinkeby";
const NUM_CREATURES = 3;

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
  console.error(
    "Please set a mnemonic, infura key, owner, network, and contract address."
  );
  return;
}

const NFT_CONTRACT = require("../build/contracts/SolnSquareVerifier");
const NFT_ABI = NFT_CONTRACT.abi;
const solutionHash = [
  "0x62181FaF133DA4E767Ca7054F549B0B2605DB7FB",
  "0x0749D296C6531405E16a6079069ba36c273fC491",
  "0xc9997136935F233D6C370F4349019C709cA538a6",
  "0x8CbA10455646b4b866804371F730729F0b660696",
];
const to = [
  "0xfD4DA75dc891626b07F3Cb2308683F3B16DA76bc",
  "0x58A0f2d0AEf6b094b66dF38f2367029f44Ef6cF6",
  "0xa8C52B2F5D4bc1e9CA233845F68Ce5e8E2985f13",
  "0x730233FE71ee17b38a615D4Bbd7B642a855E3886",
];
const proofs = [
  {
    proof: {
      a: [
        "0x04a2a6e21be60480803c475ef9495b4f38bc269fcba8f36dd0beb1db96f83771",
        "0x05b27473d37984466a4ca71c7f0138110fb8a6760afe20a2b2c2502ad986913f",
      ],
      b: [
        [
          "0x03606a1ba1351204c5177655271fa757198fa3b29faddd553d07a0bd02e4a273",
          "0x072178ce7e17e09098c3580c4deb7b7ead45cd41203b48ef890dcf7d24542466",
        ],
        [
          "0x249cf527d7ac60d447c74faf505e5014366d7bfb10e85257d6b85d7837f10035",
          "0x231ce26de8685fb436bac26bc9efd6b24dbd583d7494234ccedbd53cb3fe3dc6",
        ],
      ],
      c: [
        "0x021105b1e6d5bdb4ec4d7057a50f2b1493fbf1543e6c024834da24594bc9012c",
        "0x0fa924b1d6cd00ad0de58d217cacf9838d71c8de0e92815ee0b32b423a8822ff",
      ],
    },
    inputs: [
      "0x0000000000000000000000000000000000000000000000000000000000000031",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ],
  },
  {
    proof: {
      a: [
        "0x00f59df5b373e6c051f37af1acad37efb8cb0b95f79a6317f762f013211c4642",
        "0x2a55fdc40078c8ef9c619c2a402f3c0339fc4d0c99055df4dfdfc7622d228180",
      ],
      b: [
        [
          "0x20d4c55809a1c61dbdf8a8c212b15a13052101e7327e7f16f4e27e06d7aee3da",
          "0x124858cade6070d41c8a304537c6f048e9ab3166224818b4a9e775c07f445a83",
        ],
        [
          "0x2a3f2c09bceb8dfe4aab96e92f7b0a5c29f2d1767f1ff16dcb985818d5e9bd06",
          "0x165dcf6b4665605f78f7c8c56869d710bcec2f35dbbc4d10442317ee3fa862e7",
        ],
      ],
      c: [
        "0x13fe29dd22aa68dec30ef3cf7ca20c691f820965da2eb0e5fcf21e780ef1a2f8",
        "0x159c59229a338f8db0c72ff58ff5ff67f26a895e75b5b5b71513776f56f07c95",
      ],
    },
    inputs: [
      "0x0000000000000000000000000000000000000000000000000000000000000019",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    ],
  },
  {
    proof: {
      a: [
        "0x128e71ca8caf6cacbfc6ad0432c216a1bb9e1477eb357cf2ae1dac26045dd38b",
        "0x2df7265ce88f2bce932a952f8108d7908ab698317bb4cc9e4514adb3f7f8463f",
      ],
      b: [
        [
          "0x0be2711f6984844a352ff96fb9bf83bc04b4d48b3d00573781691128c2a51ca8",
          "0x132c525a6da94af3c5741df905c7b790fc6435124089ed45a297550150f8eafc",
        ],
        [
          "0x2f262d9b5c131dd6eed418ffab966b2d02c8f6efc81072e1b1b3350475c8b1df",
          "0x0e22156bfa4b2e87e02d5cc51a5b86fce50090ce84deee15d72953975ff3e74b",
        ],
      ],
      c: [
        "0x11ec975d8cc5084d7086af20c698efec67581c358890da4b9efdf5590bd56497",
        "0x1580876c00bc2ee39da0596522ed64797d3940edbd6312d2d1be0488db809019",
      ],
    },
    inputs: [
      "0x0000000000000000000000000000000000000000000000000000000000000024",
      "0x0000000000000000000000000000000000000000000000000000000000000001",
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
        .mint(
          solutionHash[i],
          to[i],
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
