// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Dvote is Ownable {

    uint256 campaignPrice;
    
    struct Candidate {
        address candidateId;
        uint32 campaignId;
        uint8 noVotes;
    }

    struct Campaign {
        uint32 campaignId;
        address  owner;
        uint256 endDate;
        address[] voters;
    }

    struct Voter {
        address voterId;
        address votedTo;
    }
    mapping (uint32 => Campaign) private campaigns;
    mapping (address => Candidate) private candidates;

    event CreateCampaign(uint32 campaignId, uint256 endDate, address[] candidates);
    event Vote(address voterId,address votedTo);

    constructor(uint256 price) Ownable(msg.sender) {
        Dvote.campaignPrice=price;
    }
    modifier isCampaignOwner(uint32 campaignId){
        require(msg.sender==campaigns[campaignId].owner,"Not the campaign owner");
        _;
    }
    function createCampaign(uint32 campaignId, uint256 endDate, address[] memory candidateIds)external {
        Campaign storage campaign=campaigns[campaignId];
        campaign.owner=msg.sender;
        campaign.endDate=block.timestamp+endDate;
        for(uint8 i=0;i<candidateIds.length;i++){

            Candidate memory candidate=Candidate(candidateIds[i],campaignId,0);
            candidates[candidateIds[i]]=candidate; 

        }
        emit CreateCampaign(campaignId, endDate, candidateIds);

    }
     
    function getCampaign(uint32 campaignId)external view returns(Campaign memory){
        return campaigns[campaignId];
    }
    function getCandidate(address candidateId)external view returns(Candidate memory){
        return candidates[candidateId];
    }
    function voteCandidate(uint32 campaignId,address candidateId)external {

        Campaign storage campaign=campaigns[campaignId];
        require(campaign.endDate>block.timestamp,"Voting period is over");
        
        Candidate storage candidate=candidates[candidateId];
        candidate.noVotes+=1;
        campaign.voters.push(msg.sender);

        emit Vote(msg.sender,candidateId);
    }
    function returnTokens(uint32 campaignId)external isCampaignOwner(campaignId){
        Campaign memory campaign=campaigns[campaignId];
        for(uint8 i=0;i<campaign.voters.length;i++){
            _;
        }
    }

}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/access/Ownable.sol";

library calcPrice{
    function getValue(uint256 value)public pure returns(uint256){
        return (value*5/100);
    }
}
contract DvoteTokenSwap is Ownable {
    uint256 tokenPrice;
    constructor(uint256 price)Ownable(msg.sender){
        DvoteTokenSwap.tokenPrice=price;
    }
    function swapToken(uint256 value)external payable{
        assert(msg.value>=calcPrice.getValue(value));
    }
}