import Participant from "./Participant";

export default class Channel {
	participants: Participant[];

	constructor () {
		this.participants = [];
	}

	register (participant: Participant) {
		this.participants.push(participant);
	}

	send (participant: Participant, message: string) {
		for (const toParticipant of this.participants) {
			if (toParticipant.name === participant.name) continue;
			toParticipant.receive(participant, message);
		}
	}
}
