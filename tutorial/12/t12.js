var cust = {
    name: "Chris World",
    street: "The World that Never Was",
    city: "Oblibion",
    state: "CA",
    email: "chchie@somewhere.com",
    balance: 10000.0,
    
    pay: function (amount) {
        this.balance -= amount;
    },

    deposit: function (amount) {
        this.balance += amount;
    }
}

console.log({cust});

// Some func for OO: hasOwnProperty(arg)


// Generic Object
function Customer(name, street, city, state, email, balance) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    this.email = email;
    this.balance = balance;

    this.pay = function (amount) {
        this.balance -= amount;
    };

    this.deposit = function (amount) {
        this.balance += amount;
    };
}
