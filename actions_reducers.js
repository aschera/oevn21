//STATE
const initialState={
    account:
        {
            accountNo: 1234567890,
            balance: 100,
	    closed: false
        }
    ,
    customer: {
        name: 'Mary'
	
    }
}
 
//ACTIONS

const DEPOSIT_ACTION = "DEPOSIT";
const WITHDRAW_ACTION = "WITHDRAW";
const TRANSFER_ACTION = "TRANSFER";
const CANCELACCOUNT_ACTION = "CLOSE";


// Deposit
function deposit(amount) {
  const action = {
    type: DEPOSIT_ACTION,
    amount: amount
  }
  return { action.type, action.amount}
}


// Withdraw
function withdraw(amount) {
  const action = {
    type: WITHDRAW_ACTION,
    amount: amount
  }
  return { action.type, action.amount}
}


// Transfer
function transfer(amount, destinationAccount) {
  const action = {
    type: TRANSFER_ACTION,
    amount: amount,
    destinationAccount: destinationAccount
  }
    return { action.type, action.amount, action.destinationAccount}
}

// Transfer
function close(amount, destinationAccount) {
  const action = {
    type: CANCELACCOUNT_ACTION,
    amount: amount,
    destinationAccount: destinationAccount,
    closed: true
  }
    return { action.type, action.amount, action.destinationAccount, action.closed}
}




/* ////////////////////////////  bankAccount.js  ////////////////////////////////// */

/*
1. Write test cases for the functions: balance, deposit, withdraw, transferFunds (red)
2. Implement the functions (green)
3. Start from 1!
*/
class BankAccount {
	/*
	You don't need to test the constructor in this exercise.
	*/
	constructor() {
		this.accountNo = 1001;
		this.balance = 0;  // balance should only be modified in the functions deposit and withdraw
	}
		
	/*
	Returns true if the money was successfully deposited.
	Throws Error('Bad parameter') if amount is something other than a number, that is greater than 0 and less than positive infinity.
	*/
	deposit(amount) {
		throw new Error('Not implemented yet');
	}
	
	/*
	Returns true if the money was successfully withdrawn.
	Returns false if the account didn't have enough money. No money should be withdrawn in this case.
	Throws Error('Bad parameter') if amount is something other than a number, that is greater than 0 and less than positive infinity.
	*/
	withdraw(amount) {
		throw new Error('Not implemented yet');
	}
	
	/*
	Returns true if the amount was successfully transferred from the source account (this object) to the destination account.
	Returns false if the source account didn't have enough money. Neither the source nor the destination should change balance.
	Throws Error('Bad parameter: account') if the destination account is not an object of the class BankAccount.
	Throw Error('Bad parameter: amount') if the amount is something other than a number, that is greater than 0 and less than positive infinity.
	*/
	transferFunds(amount, destinationAccount) {
		throw new Error('Not implemented yet');
	}
}
