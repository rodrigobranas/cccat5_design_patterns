import Observer from "./Observer";

export default class Label implements Observer {
	private value: string;

	constructor (readonly expression: string) {
		this.value = "";
	}
	

	getValue () {
		return this.value;
	}

	setValue (name: string, value: string) {
		this.value = this.expression.replace(`{{ ${name} }}`, value);
	}

	update(name: string, value: string): void {
		this.setValue(name, value);
	}
}
