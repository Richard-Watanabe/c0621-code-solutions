/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var newDeposit = new Transaction('deposit', amount);
  if (newDeposit.amount > 0 && Number.isInteger(amount) === true) {
    this.transactions.push(newDeposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var newWithdrawal = new Transaction('withdrawal', amount);
  if (newWithdrawal.amount > 0 && Number.isInteger(amount) === true) {
    this.transactions.push(newWithdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var allDeposits = 0;
  var allWithdrawals = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      allDeposits += this.transactions[i].amount;
    } else {
      allWithdrawals += this.transactions[i].amount;
    }
  }
  var currentBalance = (allDeposits - allWithdrawals);
  if (this.transactions.length === 0) {
    return 0;
  } else {
    return currentBalance;
  }
};
