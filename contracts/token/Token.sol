pragma solidity ^0.4.11;
import '../zeppelin-solidity/math/SafeMath.sol';
import '../zeppelin-solidity/ownership/Ownable.sol';
import '../zeppelin-solidity/token/BasicToken.sol';

contract Token is BasicToken, Ownable {
    string public name;
    string public symbol;
    uint public decimals;
    uint public totalSupply;

    event Deposit(address indexed from, uint256 value, string txref);

    function Token(string _name, string _symbol, uint256 _decimals) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals; 
    }

    function deposit(string _txref, uint _value) payable returns (string ref) {
        totalSupply.add(_value);
        balances[msg.sender].add(_value);
        Deposit(msg.sender, _value, _txref);
        return _txref;
    }
}