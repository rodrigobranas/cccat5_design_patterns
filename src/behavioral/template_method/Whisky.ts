import TaxItem from "./TaxItem";

export default class Whisky extends TaxItem {

	constructor (description: string, price: number) {
		super("Whisky", description, price);
	}

	calculateTax () {
		return (this.price * 20)/100;
	}
}