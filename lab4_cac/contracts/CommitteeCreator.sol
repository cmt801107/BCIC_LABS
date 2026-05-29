pragma solidity ^0.5.16;
import "./CAC.sol";

contract CommitteeCreator {
    CAC[] public deployedCommittee;
    function createCommittee(uint256 minimumFund) public {
        CAC newCommittee = new CAC(minimumFund, msg.sender);
        deployedCommittee.push(newCommittee);
    }
    function getDeployedCommittee() public view returns (CAC[] memory) {
        return deployedCommittee;
    }
}