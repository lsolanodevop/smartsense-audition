export class Parking {
    entryDate: string | null;
    entryTime: string | null;
    entryAMPM: string | null;
    leavingDate: string | null;
    leavingTime: string | null;
    leavingAMPM: string | null;

    constructor(
        entryDate: string | null,
        entryTime: string | null,
        entryAMPM: string | null,
        leavingDate: string | null,
        leavingTime: string | null,
        leavingAMPM: string | null
    ) {
        this.entryDate = entryDate;
        this.entryTime = entryTime;
        this.entryAMPM = entryAMPM;
        this.leavingDate = leavingDate;
        this.leavingTime = leavingTime;
        this.leavingAMPM = leavingAMPM;
    }
}

export default Parking;
