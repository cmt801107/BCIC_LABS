// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract Chat {
    string public message;
    constructor(string memory initMessage) public {
        message = initMessage;
    }
    function setMessage(string memory m) public {
        message = m;
    }
    function getMessage() public view returns (string memory) {
        return message;
    }
}