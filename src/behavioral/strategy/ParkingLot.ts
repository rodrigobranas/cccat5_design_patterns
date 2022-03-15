import TicketCalculator from "./TicketCalculator";

export default class ParkingLot {
	parkedCars: { plate: string, checkinDate: Date }[];

	constructor (readonly capacity: number, readonly ticketCalculator: TicketCalculator) {
		this.parkedCars = [];
	}

	checkin (plate: string, checkinDate: Date) {
		this.parkedCars.push({ plate, checkinDate });
	}

	checkout (plate: string) {
		const parkedCar = this.parkedCars.find(parkedCar => parkedCar.plate === plate);
		if (!parkedCar) throw new Error("Car not found");
		const position = this.parkedCars.indexOf(parkedCar);
		this.parkedCars.splice(position, 1);
	}

	calculateTicket (plate: string, checkoutDate: Date) {
		const parkedCar = this.parkedCars.find(parkedCar => parkedCar.plate === plate);
		if (!parkedCar) throw new Error("Car not found");
		const price = this.ticketCalculator.calculate(parkedCar.checkinDate, checkoutDate);
		return {
			price
		};
	}

	getEmptySpaces () {
		return this.capacity - this.parkedCars.length;
	}
}
