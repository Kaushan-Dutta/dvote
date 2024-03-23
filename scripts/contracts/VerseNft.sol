// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract VerseNft is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;

    struct NFT{
        category nftCategory;    
        uint32 nftId;
        string nftName;
        string tokenURI;
    }

    enum category { VOTER, CANDIDATE }


    mapping(category => NFT) private nfts; 
    event CreateNft(uint32 nftId, string nftName,category categoryType);

    constructor()
        ERC721("VerseNft", "VN")
        Ownable(msg.sender)
    {}

    function createNft(string memory uri, category categoryType, string memory nftName) external {
        uint32 nftId = uint32(_nextTokenId++);
        nfts[categoryType] = NFT(categoryType, nftId, nftName, uri);
        emit CreateNft(nftId, nftName, categoryType);
    }

   function safeMint(address to, category categorytype) external {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, nfts[categorytype].tokenURI);
    }


    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
