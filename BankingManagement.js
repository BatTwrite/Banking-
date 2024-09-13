class AccountNode {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.next = null;
    }
}

class Bank {
    constructor() {
        this.head = null;
    }

    createAccount(accountNumber, accountHolder, balance) {
        const newAccount = new AccountNode(accountNumber, accountHolder, balance);
        if (!this.head) {
            this.head = newAccount;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newAccount;
        }
    }

    displayAccounts() {
        let current = this.head;
        while (current) {
            console.log(`Account Number: ${current.accountNumber}, Account Holder: ${current.accountHolder}, Balance: ${current.balance}`);
            current = current.next;
        }
    }

    transferMoney(fromAccountNumber, toAccountNumber, amount) {
        let fromAccount = null;
        let toAccount = null;
        let current = this.head;

        // Find the from and to accounts
        while (current) {
            if (current.accountNumber === fromAccountNumber) {
                fromAccount = current;
            }
            if (current.accountNumber === toAccountNumber) {
                toAccount = current;
            }
            current = current.next;
        }

        // Check if both accounts were found and if the from account has enough balance
        if (fromAccount && toAccount && fromAccount.balance >= amount) {
            fromAccount.balance -= amount;
            toAccount.balance += amount;
            console.log(`Transferred ${amount} from Account ${fromAccountNumber} to Account ${toAccountNumber}`);
        } else {
            console.log('Transfer failed. Please check account numbers and balance.');
        }
    }

    checkBalance(accountNumber) {
        let current = this.head;
        while (current) {
            if (current.accountNumber === accountNumber) {
                console.log(`Account Number: ${current.accountNumber}, Balance: ${current.balance}`);
                return current.balance;
            }
            current = current.next;
        }
        console.log('Account not found.');
        return null;
    }
}

// print all 
const bank = new Bank();
bank.createAccount(1, "Tamil", 1000);
bank.createAccount(2, "Mani", 1500);
bank.displayAccounts();
bank.transferMoney(1, 2, 500);
bank.displayAccounts();
bank.checkBalance(1);
bank.checkBalance(2);
bank.checkBalance(3); // print 'Account not found.'
