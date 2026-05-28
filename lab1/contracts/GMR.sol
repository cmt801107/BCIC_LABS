// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract GMR {
    address public manager;
    address payable[] public players;

    constructor() public {
        manager = msg.sender;
    }

    function enterGame() public payable {
        players.push(msg.sender);
    }

    function chooseByTime() public view returns (uint) {
        uint result = now % players.length;
        return result;
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function payMoneyToPlayer() public restricted{
        uint winnerId = chooseByTime();
        players[winnerId].transfer(address(this).balance);
        //清空陣列，此寫法 gas fee 較高
        //players = new address payable[](0);
        //推薦寫法
        delete players;
    }
    modifier restricted() {
      require(msg.sender == manager);
      _;
    }

    function getCurrentPlayers() public view returns(address payable[] memory) {
      return players;
    }
}
