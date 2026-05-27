// SPDX-License-Identifier: MIT
pragma solidity ^0.5.16;

contract GMR {
  address public manager;

  constructor() public {
    manager = msg.sender;
  }
}
