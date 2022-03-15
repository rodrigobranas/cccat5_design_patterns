import TaxItem from "./TaxItem";

export default class Beer extends TaxItem {

	constructor (description: string, price: number) {
		super("Beer", description, price);
	}

	calculateTax () {
		return (this.price * 10)/100;
	}
}