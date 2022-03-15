import TicketCalculator from "./TicketCalculator";

export default class ShoppingTicketCalculator implements TicketCalculator {

	calculate(checkinDate: Date, checkoutDate: Date): number {
		const period = (checkoutDate.getTime() - checkinDate.getTime())/(1000*60*60);
		const extra = period - 3;
		let price = 10;
		if (extra > 0) {
			price += extra * 10;
		}
		return price;
	}
}
