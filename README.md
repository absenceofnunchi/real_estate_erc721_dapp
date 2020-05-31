# EtherRealty

A real estate listing and sales DApp on Ethereum using ERC721.

## Installing

First, install Truffle globally.  
The NodeLTS version is recommended due to the [known issue](https://github.com/trufflesuite/truffle/issues/2070) that's incompatible with Node.js versions after v10.

```
npm i -g truffle@nodeLTS
```

Install the relevant packages:

```
git clone https://github.com/igibliss00/real_estate_erc721_dapp.git
npm install
```

## Running the tests

To run all tests:

```
cd eth-contracts
truffle develop
compile
migrate --reset
test
```

## Running ZoKrates

First, [install Docker](https://docs.docker.com/get-docker/) for your operating system

Run ZoKrates docker container:

```
docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates /bin/bash
```

Compile the program written in ZoKrates DSL:

```
~/zokrates compile -i square.code
```

Compute the witness:

```
~/zokrates cmopute-witness -a <a> <b> ...<n>
```

Generate proof:

```
~/zokrates generate-proof
```

Export the Verifier contract

```
~/zokrates export-verifier
```

## Testing minting for Open Sea

For each minting process, new proof is required from ZoKrates, which will be output `proof.json` in the ZoKrates folder.
Copy and paste the proof into `mint.js` in the `scripts` folder.

```
/scripts/mint.js
```

## Rinkeby Testnet

- [SolnSquareVerifier Contract](https://rinkeby.etherscan.io/address/0x0aa1c03996f3a15302031c59321b26072492985a)
- [Verifier Contract](https://rinkeby.etherscan.io/address/0x1f85ef83a6693015ff65a354da3a5db07905ea47)
- [Realty Contract](https://rinkeby.etherscan.io/address/0xD75b36582ABDcC457AFDA243B8483F9f5625db18)

## Open Sea

- [Store Front](https://rinkeby.opensea.io/assets/etherrealty-v2)
- [First Listing](https://rinkeby.etherscan.io/tx/0xe888fb7dc73d0710001ff73e3c92085125974cdb01321f79016e10e430de38d1)
- [Second Listing](https://rinkeby.etherscan.io/tx/0x170e96bc7c5037dcfdfc667152078cca3150459ee610fcff7f69e3f8e9fe12eb)
- [Third List](0x9ff6b4b733099d239447ee1c45cd80962fa0a0b8c4773f15c43c19929d67bfd9)
- [WETH converted from ETH](https://rinkeby.etherscan.io/tx/0x12e90768f352734b6bd019cfa12db0911749578142f30f2ea6f228b5178dc02d)
- [Offer Made](https://rinkeby.etherscan.io/tx/0x856e6348f02b9f40544acc751397aaa2586805a483cc5e15c112218cc8e3b2b9)

## Project Resources

- [Remix - Solidity IDE](https://remix.ethereum.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Truffle Framework](https://truffleframework.com/)
- [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
- [Open Zeppelin ](https://openzeppelin.org/)
- [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
- [Docker](https://docs.docker.com/install/)
- [ZoKrates](https://github.com/Zokrates/ZoKrates)
