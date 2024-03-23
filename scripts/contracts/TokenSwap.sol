// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";

library PriceCalculator {

    uint256 constant PRECISION = 10**18;

    uint256 constant TOKEN_PRICE_CENTS = 100; 

    uint256 constant ADDITIONAL_FACTOR = 50; 

    function calculateValue(uint256 value) internal pure returns (uint256) {
        
        uint256 calculatedValue = value * TOKEN_PRICE_CENTS * (100 + ADDITIONAL_FACTOR) / 100;

        return calculatedValue;
    }
}

contract TokenSwap is Ownable {
    uint256 public tokenPrice;

    constructor(uint256 price)Ownable(msg.sender) {
        tokenPrice = price;
    }

    function swapToken(uint256 value) external payable {
        require(msg.value >= PriceCalculator.calculateValue(value), "Insufficient payment");
    }

    

}
