import Item from "./Item";

export default abstract class TaxItem extends Item {
	abstract calculateTax (): number;
}
