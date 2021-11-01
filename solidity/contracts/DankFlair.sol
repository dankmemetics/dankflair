// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";

contract DankFlair is Initializable, ERC721Upgradeable, ERC721BurnableUpgradeable, OwnableUpgradeable, UUPSUpgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;

    CountersUpgradeable.Counter private _tokenIdCounter;

    address constant private banker = 0xC2dB8e84c45659a9517e9C89c5B8ad0C520Bc9b9;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize() initializer public {
        __ERC721_init("DankFlair", "DANK");
        __ERC721Burnable_init();
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function _baseURI() internal pure override returns (string memory) {
        return "http://dankflair.cloud/nft-metadata/";
    }

    function safeMint(address to) public onlyOwner {
        _safeMint(to, _tokenIdCounter.current());
        _tokenIdCounter.increment();
    }

    function safeMintFlairOwner(address to) public onlyOwner {
        _safeMint(to, _tokenIdCounter.current());
        _tokenIdCounter.increment();
    }

    function safeMintFlair(address to) public payable {
        if (msg.value < 1000000000000000000) {
            revert();
        }

        _safeMint(to, _tokenIdCounter.current());
        _tokenIdCounter.increment();

        banker.transfer(msg.value);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        onlyOwner
        override
    {}
}
