import TicketCalculator from "./TicketCalculator";

export default class AirportTicketCalculator implements TicketCalculator {

	calculate(checkinDate: Date, checkoutDate: Date): number {
		const period = (checkoutDate.getTime() - checkinDate.getTime())/(1000*60*60);
		return period * 10;
	}
}
