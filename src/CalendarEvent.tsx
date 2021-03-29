class CalendarEvent {
    startHour : string;
    startMinute : string;
    endHour : string;
    endMinute : string;
    name : string;

    constructor(startHour : string,
                startMinute : string,
                endHour : string,
                endMinute : string,
                name : string) {
        this.startHour = startHour;
        this.startMinute = startMinute;
        this.endHour = endHour;
        this.endMinute = endMinute;
        this.name = name;
    }
}

export default CalendarEvent;