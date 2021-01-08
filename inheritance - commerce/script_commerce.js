class Customer {

    constructor (id, name, phoneNumber){
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber
    }

    toString() {
        console.log(`I am a Customer, my id is ${this.id}, my name is ${this.name} and my phone number is ${this.phoneNumber}`); 
    }
}

class PreferedCustomer extends Customer {

    constructor (id, name, phoneNumber, balance, balanceLimit, adress) {
        super(id, name, phoneNumber);
        this.balance = balance;
        this.balanceLimit = balanceLimit;
        this.adress = adress;
    }

    toString() {
        console.log(`I am a Prefered Customer, my id is ${this.id}, my name is ${this.name} and my phone number is ${this.phoneNumber}. My balance is ${this.balance}, my account limit is ${this.balanceLimit} and my adress is ${this.adress}!`);
    }
}

const customer1 = new Customer(123, 'Francisco', 4567835);
const preferedCustomer1 = new PreferedCustomer(12, 'Juan', 1236547, 5000, 10000, 'Rafael nuñez 1234');

console.log(customer1);
console.log(preferedCustomer1);

customer1.toString();
preferedCustomer1.toString();