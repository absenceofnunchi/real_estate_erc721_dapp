pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Mintable.sol";
import "./Verifier.sol";


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is Realty {
    // TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
    Verifier private verifier;

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 index;
        address prover;
        bool exists;
    }

    // TODO define an array of the above struct
    Solution[] private solutionArr;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) submittedSolutions;

    constructor(address verifierAddress) public {
        verifier = Verifier(verifierAddress);
    }

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 index, address prover);

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(uint256 index, address prover) public {
        require(prover != address(0), "Invalid address");
        Solution memory newSolution = Solution(index, prover, true);
        solutionArr.push(newSolution);

        emit SolutionAdded(index, prover);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSupply
    function mint(
        bytes32 solutionHash,
        address to,
        uint256 tokenId,
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input
    ) public {
        require(
            submittedSolutions[solutionHash].exists == false,
            "The solution already exists"
        );
        require(verifier.verifyTx(a, b, c, input), "Not verified");
        addSolution(tokenId, to);
        super.mint(to, tokenId);
    }
}
