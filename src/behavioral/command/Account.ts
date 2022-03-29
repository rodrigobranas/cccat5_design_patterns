export default class Account {
	balance: number;

	constructor (readonly number: string) {
		this.balance = 0;
	}

	credit (amount: number) {
		this.balance += amount;
	}

	debit (amount: number) {
		this.balance -= amount;
	}

	getBalance () {
		return this.balance
	}
}
