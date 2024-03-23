// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import './VerseToken.sol';
import './VerseNft.sol'; 

contract VoteVerse is  Ownable {

    uint256 campaignPrice;
    uint256 votePrice;

    uint256 voterCredits=20;
    uint256 candidateCredits=100;
    uint256 organizerCredits=150;
    uint256 winnerCredits=200;

    struct Candidate {
        bytes32 candidateId;
        bytes32 campaignId;
        uint8 noVotes;
    }

    struct Campaign {
        bytes32 campaignId;
        uint256 endDate;
        bytes32[] candidateIds;
        bytes32 owner;
    }

    // struct Voter {
    //     bytes32 candidateId;
    //     bytes32 voterId;
    //     bytes32 campaignId;
    // }

    struct User{
        bytes32 userId;

    }
    struct Voting{
        bytes32 campaignId;
        bytes32 candidateId;
    }
    struct Voter{
        Voting[] voting;
    }
    
    
    mapping (bytes32 => Campaign) private campaigns;
    mapping (bytes32 => Candidate) private candidates;
    mapping (bytes32 => Voter) private voters;
    mapping (bytes32 => uint256) private user_credits;
    mapping (bytes32=>bytes32) private campaignWinner;

    event CreateCampaign(bytes32 campaignId, uint256 endDate);
    event Vote(bytes32 voterId,bytes32 votedTo);
    event TransferToken(bytes32 voterId,bytes32 campaignId);

    VerseToken verseToken;
    VerseNft verseNft;

    constructor(uint256 _campaignPrice,uint256 _votePrice,address tokenaddr , address nftaddr) Ownable(msg.sender) {
        VoteVerse.campaignPrice=_campaignPrice;
        VoteVerse.votePrice=_votePrice;

        verseToken=VerseToken(tokenaddr);
        verseNft=VerseNft(nftaddr);
    }
    
    modifier checkEndDate(bytes32 campaignId) {
        require(campaigns[campaignId].endDate<block.timestamp,"Voting period is not over");
        _;
    }
    function createCampaign(bytes32 campaignId, uint256 endDate, bytes32[] memory candidateIds)external {

        require(verseToken.balanceOf(msg.sender) >= campaignPrice, "Pay the minimum price");
        verseToken.transfer(address(this), campaignPrice);
        
        Campaign storage campaign=campaigns[campaignId];
        campaign.endDate=block.timestamp+endDate;
        for(uint8 i=0;i<candidateIds.length;i++){

            Candidate memory candidate=Candidate(candidateIds[i],campaignId,0);
            candidates[candidateIds[i]]=candidate; 

        }   
        campaign.candidateIds=candidateIds;
        emit CreateCampaign(campaignId, endDate);

    }
     
    function getCampaign(bytes32 campaignId)external view returns(Campaign memory){
        return campaigns[campaignId];
    }
    function getCandidate(bytes32 candidateId)external view returns(Candidate memory){
        return candidates[candidateId];
    }
     function getCampaignWinner(bytes32 campaignId)external view returns(bytes32){
        return campaignWinner[campaignId];
    }

    function voteCandidate(bytes32 campaignId,bytes32 candidateId,bytes32 voterId)external  {
        require(campaigns[campaignId].endDate>block.timestamp,"Voting period is over");

        require(verseToken.balanceOf(msg.sender) >= votePrice, "Pay the minimum price");
    
        Voter memory voter=Voter(candidateId,voterId,campaignId);
        
        Candidate storage candidate=candidates[candidateId];
        candidate.noVotes+=1;

        voters[voterId]=(voter);
        voters_credits[voterId]+=100;
                  
        emit Vote(voterId,candidateId);
    }
    function claimToken(bytes32 campaignId,bytes32 voterId)external checkEndDate(campaignId){
        Voter memory voter=voters[voterId];
        
        require(voter.campaignId==campaignId,"Not the campaign voter");

        //verseToken.transferFrom(address(this),msg.sender, votePrice);
        delete voters[voterId];

        emit TransferToken(voterId,campaignId); 
    }
    
    function checkWinner(bytes32 campaignId) public checkEndDate(campaignId){
        assert(campaignWinner[campaignId]==bytes32(0));
        uint8 maxVotes=0;
        bytes32 winner;
        for(uint8 i=0;i<campaigns[campaignId].candidateIds.length;i++){
            Candidate memory candidate=candidates[campaignId];
            if(candidate.noVotes>maxVotes){
                maxVotes=candidate.noVotes;
                winner=candidate.candidateId;
            }
        }
        campaignWinner[campaignId]=winner;
    }
    
}
