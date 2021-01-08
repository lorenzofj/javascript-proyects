class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
        console.log(`Your balance is ${this.balance}`);
    }

    withdraw(amount){
        this.balance -= amount;
        console.log(`Your balance is ${this.balance}`);
    }
}

class SavingAccount extends Account {
    constructor(id, name, balance){
        super(id, name, balance);

    }

    withdraw(amount){
        if (amount > this.balance){
            console.log('Your balance is not enough to extract that amount.');
        }
        else{
            this.balance -= amount;
            console.log(`Your balance is ${this.balance}`);
        }
    }
}

class CheckingAccount extends Account{
    constructor(id, name, balance, agreement){
        super(id, name, balance);
        this.agreement = agreement;
    }

    withdraw(amount){
        if (this.balance - amount < this.agreement){
            console.log('This extraction exceeds the agreement of this account.');
        }
        else{
            this.balance -= amount;
        }
    }
}

account1 = new Account(1, 'Francisco', 0);
saving1 = new SavingAccount(2, 'Messi', 1000);
checking1 = new CheckingAccount(3, 'Quilmes', 300, -500);
