class Transaction {
	constructor(type,amount) {
		this.type = type
		this.amount = amount
		this.date = new Date()
	}
	toString(){
		return `${this.type} of Rs.${this.amount} on ${this.date.toLocaleString()}`
	}
}

class Account {
	constructor(balance) {
		this.balance = balance
		this.withdrawCount = 0
		this.transactions = []
	}
	statement(){
		/*for (var i = 0; i < this.transactions.length; i++) {
			console.log(this.transactions[i].toString())
		}*/
		this.transactions.forEach(it => console.log(it.toString()))
	}
	deposit(amount){
		this.balance += amount
		this.transactions.push(new Transaction("Deposit",amount))
	}
	withdraw(amount){
		this.withdrawCount += 1
		if(this.balance > amount){
			this.balance -= amount
			this.transactions.push(new Transaction("Withdraw",amount))
			if(this.withdrawCount > 3){
				this.balance -= (amount * 0.005)
				this.transactions.push(new Transaction("Fees",amount*0.005))
			}
		}
	}
}
let acc = new Account(20000)
acc.deposit(1000)
acc.deposit(100)
acc.withdraw(100)
acc.withdraw(100)
acc.withdraw(100)
acc.withdraw(100)
acc.withdraw(100)
acc.withdraw(100)
acc.statement()
console.log(`Balance: ${acc.balance}`);
