pragma solidity ^0.5.16;

contract CAC {
    struct SpendingRequest {
        string description;
        uint256 value;
        address payable vendorAccount;
        bool complete;
        uint256 approvalCount;
        mapping(address => bool) approvedUsers;
    }
    SpendingRequest[] public requests;
    address public manager;
    uint256 public minimumFund;
    mapping(address => bool) public approvers;
    uint256 public approversCount;
    function createRequest(
        string memory des,
        uint256 v,
        address payable va
    ) public restricted {
        SpendingRequest memory req = SpendingRequest({
            description:des,
            value:v,
            vendorAccount:va,
            complete:false,
            approvalCount:0
        });
        requests.push(req);
    }
    constructor(uint256 mf, address creator) public {
        manager = creator;
        minimumFund = mf;
    }
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    function join() public payable {
        require(msg.value > minimumFund);
        approvers[msg.sender]=true;
        approversCount++;
    }
    function approvalRequest(uint256 index) public {
        SpendingRequest storage req = requests[index];
        // is a member
        require(approvers[msg.sender]);
        // is not already approved
        require(!req.approvedUsers[msg.sender]);
        req.approvalCount ++;
        req.approvedUsers[msg.sender]=true;
    }
    function executeRequest(uint256 index) public restricted {
        SpendingRequest storage req = requests[index];
        require(!req.complete);
        require(req.approvalCount > (approversCount/2));
        req.vendorAccount.transfer(req.value);
        req.complete = true;
    }
}
