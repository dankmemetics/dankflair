// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";

contract DankFusion is Initializable, ERC721Upgradeable, ERC721BurnableUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    CountersUpgradeable.Counter private _tokenIdCounter;

    address private banker;
    ERC721 private _dankContract;

    // The contract to fuse the NFT with
    mapping(uint256 => ERC721) private _fusionContract;
    // The dank flair token id
    mapping(uint256 => uint256) private _dankId;
    // The token id of the reference NFT
    mapping(uint256 => uint256) private _fusionId;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize(ERC721 dankContract) initializer public {
        __ERC721_init("Dank Fusion NFTs", "DANK");
        __ERC721Burnable_init();
        __Ownable_init();
        __UUPSUpgradeable_init();
        _dankContract = dankContract;
        banker = msg.sender;
    }

    // Dank Fusion specific function to map contract and ids to each other for the mint.
    function _fusion(ERC721 fusionContract, uint256 dankId, uint256 fusionId) internal {
        // Ensure Minter has approval to mint said fused NFT.
        require(msg.sender == fusionContract.ownerOf(fusionId), "Dank Fusion: you do not have minting rights for this fusion nft");
        require(msg.sender == _dankContract.ownerOf(dankId), "Dank Fusion: you do not have minting rights for this dank nft");

        // Map contract and ids to Dank Fusion
        _fusionContract[_tokenIdCounter.current()] = fusionContract;
        _dankId[_tokenIdCounter.current()] = dankId;
        _fusionId[_tokenIdCounter.current()] = fusionId;
    }

    function safeMint(address to, ERC721 fusionContract, uint256 dankId, uint256 fusionId) public onlyOwner {
        _safeMint(to, _tokenIdCounter.current());
        _fusion(fusionContract, dankId, fusionId);
        _tokenIdCounter.increment();
    }

    function safeMintFusion(address to, ERC721 fusionContract, uint256 dankId, uint256 fusionId) public payable {
        if (msg.value < 10000000000000000) {
            revert();
        }

        _safeMint(to, _tokenIdCounter.current());
        _fusion(fusionContract, dankId, fusionId);
        _tokenIdCounter.increment();
    }

    /*
        Get the reference index for a newly minted NFT
    */
    function fusionIndex() public view virtual returns (uint256) {
        return _tokenIdCounter.current();
    }

    /*
        fusionInfo() displays info about the Fusion NFT.
        It will return the following:

        1. Fusion contract address
        2. Dank Flair NFT ID
        3. Fusion NFT ID
    */
    function fusionInfo(uint256 tokenId) public view virtual returns (ERC721, uint256, uint256) {
        ERC721 fusionContract = _fusionContract[tokenId];
        uint256 dankId = _dankId[tokenId];
        uint256 fusionId = _fusionId[tokenId];

        return (fusionContract, dankId, fusionId);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}
}
