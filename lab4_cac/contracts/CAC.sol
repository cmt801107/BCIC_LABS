// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.5.16;

contract CAC {
    struct SpendingRequest {
        string description;
        uint256 value;
        address vendorAccount;
        bool complete;
    }
    SpendingRequest[] public requests;
    address public manager;
    uint256 public minimumFund;
    address[] public approvers;

    constructor(uint256 mf) public {
        manager = msg.sender;
        minimumFund = mf;
    }
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    function join() public payable {
        require(msg.value > minimumFund);
        approvers.push(msg.sender);
    }
    function createRequest(
        string memory des,
        uint256 v,
        address va
    ) public restricted {
        SpendingRequest memory req = SpendingRequest({
            description:des,
            value:v,
            vendorAccount:va,
            complete:false
        });
        requests.push(req);
    }
}