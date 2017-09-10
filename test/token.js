var Token = artifacts.require("./Token.sol");

contract('Token', function (accounts) {
    it("should has correct property", function () {
        var token;
        var name;
        var symbol;
        var decimals;

        return Token.deployed().then(function (instance) {
            token = instance;
            return instance.name.call();
        }).then(function (_name) {
            name = _name;
            return token.symbol.call();
        }).then(function (_symbol) {
            symbol = _symbol;
            return token.decimals.call();
        }).then(function (_decimals) {
            decimals = _decimals;
            assert.equal(name, "Thailand Baht", "Token Name is incorrect");
            assert.equal(symbol, "THB", "Token Symbol is incorrect");
            assert.equal(decimals, 2, "Token Decimals is incorrect");
        });
    });
    it("should deposit correctly", function() {
        var token ;
        var account = accounts[0];
        var balance1;
        var balance2;

        return Token.deployed().then(function (instance) {
            token = instance;
            return token.balanceOf.call(account);
        }).then(function(balanceA){
            balance1 = balanceA;
            return token.deposit("TEST1000",1000, {from:account});
        }).then(function() {
            return token.balanceOf.call(account);
        }).then(function(balanceB){
            balance2 = balanceB;
            assert.equal(balance1.toNumber(), 0, "initialize balance is not zero");
            assert.equal(balance2.toNumber(), 1000, "deposit not correctly");
        })
    })
    /*
    it("should call a function that depends on a linked library", function() {
      var meta;
      var metaCoinBalance;
      var metaCoinEthBalance;

      return MetaCoin.deployed().then(function(instance) {
        meta = instance;
        return meta.getBalance.call(accounts[0]);
      }).then(function(outCoinBalance) {
        metaCoinBalance = outCoinBalance.toNumber();
        return meta.getBalanceInEth.call(accounts[0]);
      }).then(function(outCoinBalanceEth) {
        metaCoinEthBalance = outCoinBalanceEth.toNumber();
      }).then(function() {
        assert.equal(metaCoinEthBalance, 2 * metaCoinBalance, "Library function returned unexpected function, linkage may be broken");
      });
    });
    it("should send coin correctly", function() {
      var meta;

      // Get initial balances of first and second account.
      var account_one = accounts[0];
      var account_two = accounts[1];

      var account_one_starting_balance;
      var account_two_starting_balance;
      var account_one_ending_balance;
      var account_two_ending_balance;

      var amount = 10;

      return MetaCoin.deployed().then(function(instance) {
        meta = instance;
        return meta.getBalance.call(account_one);
      }).then(function(balance) {
        account_one_starting_balance = balance.toNumber();
        return meta.getBalance.call(account_two);
      }).then(function(balance) {
        account_two_starting_balance = balance.toNumber();
        return meta.sendCoin(account_two, amount, {from: account_one});
      }).then(function() {
        return meta.getBalance.call(account_one);
      }).then(function(balance) {
        account_one_ending_balance = balance.toNumber();
        return meta.getBalance.call(account_two);
      }).then(function(balance) {
        account_two_ending_balance = balance.toNumber();

        assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
        assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
      });
    });
    */
});