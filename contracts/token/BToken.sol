pragma solidity ^0.4.11;
import '../zeppelin-solidity/math/SaftMath.sol';
import '../zeppelin-solidity/ownership/Ownable.sol';
import '../zeppelin-solidity/token/BasicToken.sol';

contract Token is BasicToken, Ownable {
    string public name;
    string public symbol;
    uint public decimals;
    uint public initialSupply;

}