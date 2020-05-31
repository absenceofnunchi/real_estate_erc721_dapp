# EtherRealty

A real estate listing and sales DApp on Ethereum using ERC721.

## Open Sea Storefront

Listing and bidding panel

![open sea storefront1](https://github.com/igibliss00/real_estate_erc721_dapp/blob/master/assets/1.png)

Details of the listing

![open sea storefront1](https://github.com/igibliss00/real_estate_erc721_dapp/blob/master/assets/3.png)

Transaction history on Ethereum blockchain

![open sea storefront1](https://github.com/igibliss00/real_estate_erc721_dapp/blob/master/assets/3.png)

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

- [SolnSquareVerifier Contract](https://rinkeby.etherscan.io/address/0x0B2DB4c6f36534538c247F3A93D8c10Cbd436d23)
- [Verifier Contract](https://rinkeby.etherscan.io/address/0xF11f7d18B4f99e192f84006f8e29eD9C0d2a188f)
- [Realty Contract](https://rinkeby.etherscan.io/address/0x26225442900c960e46f57f9d0546Cc58856064ea)

## Open Sea

- [Store Front](https://rinkeby.opensea.io/assets/etherrealty-v3)
- [Listing on Open Sea](https://rinkeby.opensea.io/assets/0x0b2db4c6f36534538c247f3a93d8c10cbd436d23/0)
- [Listing on Etherscan](https://rinkeby.etherscan.io/tx/0x4cfb03e86b10b29ca9dd152fed01e32abb43f407a5e211b8ea3c99282e50124b)
- [Sell](https://rinkeby.etherscan.io/tx/0x18f27bc67e20fd6e3960fc8a817640526cb1db4b51391132a412ccba55411c30)
- [Approve](https://rinkeby.etherscan.io/tx/0x1ca6fcaaa3ad3469c03c10d9f86f8aef202f7aeffd4b077e06db859ec3406872)
- [WEH Conversion](https://rinkeby.etherscan.io/tx/0x2b9fb75d36125ebd70f1da1a0ed33c169907d09a3bdb64fb661af4495c094f66)
- [Bid Accepted](https://rinkeby.etherscan.io/tx/0x9deaaf58e923aaf20cd57c50609dbfcf184cbbd22d7f4ff8190e764ef2deec17)

## Project Resources

- [Remix - Solidity IDE](https://remix.ethereum.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Truffle Framework](https://truffleframework.com/)
- [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
- [Open Zeppelin ](https://openzeppelin.org/)
- [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
- [Docker](https://docs.docker.com/install/)
- [ZoKrates](https://github.com/Zokrates/ZoKrates)
