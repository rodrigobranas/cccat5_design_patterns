import TicketCalculator from "./TicketCalculator";

export default class BeachTicketCalculator implements TicketCalculator {

	calculate(checkinDate: Date, checkoutDate: Date): number {
		return 20;
	}
}