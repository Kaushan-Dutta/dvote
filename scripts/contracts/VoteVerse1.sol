// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import './VerseToken.sol';
import './VerseNft.sol'; 

contract VoteVerse1 is  Ownable {

    uint256 campaignPrice;
    uint256 votePrice;

    uint256 voterCredits=20;
    uint256 candidateCredits=100;
    uint256 organizerCredits=150;
    uint256 winnerCredits=200;

   

    struct Campaign {
        bytes32 owner;
        uint256 endDate;
        bytes32[] candidateIds;
    }
    struct Candidate {
        bytes32 campaignId;
        uint8 noVotes;
    }
    
    struct Voter{
        bytes32 campaignId;
        bytes32 candidateId;
    }
    
    struct User{
        uint256 credits;
        mapping(verseNft.category);
        mapping(bytes32=>uint256) asCandidate;
        mapping(bytes32=>bytes32) asVoter;
    }
    
    
    mapping (bytes32 => Campaign) private campaigns;
    mapping (bytes32 => User) private users;
    mapping (bytes32=>bytes32) private campaignWinner;

    event CreateCampaign(bytes32 campaignId, uint256 endDate);
    event Vote(bytes32 voterId,bytes32 votedTo);
    event TransferToken(bytes32 voterId,bytes32 campaignId);

    VerseToken verseToken;
    VerseNft verseNft;

    constructor(uint256 _campaignPrice,uint256 _votePrice,address tokenaddr , address nftaddr) Ownable(msg.sender) {
        VoteVerse1.campaignPrice=_campaignPrice;
        VoteVerse1.votePrice=_votePrice;

        verseToken=VerseToken(tokenaddr);
        verseNft=VerseNft(nftaddr);
    }
    
    modifier checkEndDate(bytes32 campaignId) {
        require(campaigns[campaignId].endDate<block.timestamp,"Voting period is not over");
        _;
    }
    function createCampaign(bytes32 campaignId,bytes32 ownerId, uint256 endDate, bytes32[] memory candidateIds)external {

        require(verseToken.balanceOf(msg.sender) >= campaignPrice, "Pay the minimum price");
        verseToken.transfer(address(this), campaignPrice);
        
        User storage user = users[ownerId];
        user.credits+=organizerCredits;

        Campaign memory campaign=Campaign(ownerId,block.timestamp+endDate,candidateIds);
        campaigns[campaignId]=campaign;

        for(uint8 i=0;i<candidateIds.length;i++){

            User storage candidate=users[candidateIds[i]];
            candidate.credits+=candidateCredits;
            candidate.asCandidate[campaignId]=0;

        }   
        //emit CreateCampaign(campaignId, endDate);

    }
     
    function getCampaign(bytes32 campaignId)external view returns(Campaign memory){
        return campaigns[campaignId];
    }
    function getUserCredits(bytes32 userId) external view returns(uint256) {
        return users[userId].credits;
    }
    function getUserVotings(bytes32 userId,bytes32 campaignId) external view returns(bytes32) {
        return users[userId][campaignId];
    }
    function getCampaignWinner(bytes32 campaignId)external view returns(bytes32){
        return campaignWinner[campaignId];
    }

    function voteCandidate(bytes32 campaignId,bytes32 candidateId,bytes32 voterId)external  {
        
        require(campaigns[campaignId].endDate>block.timestamp,"Voting period is over");

        require(verseToken.balanceOf(msg.sender) >= votePrice, "Pay the minimum price");
    
        User storage voter=users[voterId];
        User storage candidate=users[candidateId];

        voter.asVoter[campaignId]=candidateId;
        candidate.asCandidate[campaignId]+=1;
        voter.credits+=voterCredits;
  
                  
       // emit Vote(voterId,candidateId);
    }

    function claimCredits(bytes32 userId)external{
        
        
        users[userId].credits=0;
        //emit TransferToken(voterId,campaignId); 
    }
     
    function checkWinner(bytes32 campaignId) public checkEndDate(campaignId){
        assert(campaignWinner[campaignId]==bytes32(0));
        uint256 maxVotes=0;
        bytes32 winner;
        for(uint8 i=0;i<campaigns[campaignId].candidateIds.length;i++){
           
            User storage candidate=users[campaigns[campaignId].candidateIds[i] ];

            if(candidate.asCandidate[campaignId]>maxVotes){
                maxVotes=candidate.asCandidate[campaignId];
                winner=campaigns[campaignId].candidateIds[i];
            }
        }
        campaignWinner[campaignId]=winner;
        users[winner].credits=winnerCredits;
    }
    
}
