import React from 'react';
import './ClassDay.css';
import CalendarEvent from "./CalendarEvent";

interface ClassDayProps {
    column : number;
    assignments : CalendarEvent[];
    date : string;
}

class ClassDay extends React.Component<ClassDayProps,{}> {
    render() {
        if (this.props.column === 1) {
            return (
                <div className="one day">
                    <div>
                        {this.props.date}
                    </div>
                    <div>
                        {this.props.assignments.map((x, index) =>
                            this.props.assignments[index].name.toString() + " " + this.props.assignments[index].startHour.toString()
                            + ":" + this.props.assignments[index].startMinute.toString() + "-" + this.props.assignments[index].endHour.toString()
                            + ":" + this.props.assignments[index].endMinute.toString())}
                    </div>
                </div>
            );
        }
        if (this.props.column === 2) {
            return (
                <div className="two day">
                    <div>
                        {this.props.date}
                    </div>
                    <div>
                        {this.props.assignments.map((x, index) =>
                            this.props.assignments[index].name.toString() + " " + this.props.assignments[index].startHour.toString()
                            + ":" + this.props.assignments[index].startMinute.toString() + "-" + this.props.assignments[index].endHour.toString()
                            + ":" + this.props.assignments[index].endMinute.toString())}
                    </div>
                </div>
            );
        }
        if (this.props.column === 3) {
            return (
                <div className="three day">
                    <div>
                        {this.props.date}
                    </div>
                    <div>
                        {this.props.assignments.map((x, index) =>
                            this.props.assignments[index].name.toString() + " " + this.props.assignments[index].startHour.toString()
                            + ":" + this.props.assignments[index].startMinute.toString() + "-" + this.props.assignments[index].endHour.toString()
                            + ":" + this.props.assignments[index].endMinute.toString())}
                    </div>
                </div>
            );
        }
        if (this.props.column === 4) {
            return (
                <div className="four day">
                    <div>
                        {this.props.date}
                    </div>
                    <div>
                        {this.props.assignments.map((x, index) =>
                            this.props.assignments[index].name.toString() + " " + this.props.assignments[index].startHour.toString()
                            + ":" + this.props.assignments[index].startMinute.toString() + "-" + this.props.assignments[index].endHour.toString()
                            + ":" + this.props.assignments[index].endMinute.toString())}
                    </div>
                </div>
            );
        }
        if (this.props.column === 5) {
            return (
                <div className="five day">
                    <div>
                        {this.props.date}
                    </div>
                    <div>
                        {this.props.assignments.map((x, index) =>
                            this.props.assignments[index].name.toString() + " " + this.props.assignments[index].startHour.toString()
                            + ":" + this.props.assignments[index].startMinute.toString() + "-" + this.props.assignments[index].endHour.toString()
                            + ":" + this.props.assignments[index].endMinute.toString())}
                    </div>
                </div>
            );
        }
        if (this.props.column === 6) {
            return (
                <div className="six day">
                    <div>
                        {this.props.date}
                    </div>
                    <div>
                        {this.props.assignments.map((x, index) =>
                            this.props.assignments[index].name.toString() + " " + this.props.assignments[index].startHour.toString()
                            + ":" + this.props.assignments[index].startMinute.toString() + "-" + this.props.assignments[index].endHour.toString()
                            + ":" + this.props.assignments[index].endMinute.toString())}
                    </div>
                </div>
            );
        }
        if (this.props.column === 7) {
            return (
                <div className="seven day">
                    <div>
                        {this.props.date}
                    </div>
                    <div>
                        {this.props.assignments.map((x, index) =>
                            this.props.assignments[index].name.toString() + " " + this.props.assignments[index].startHour.toString()
                            + ":" + this.props.assignments[index].startMinute.toString() + "-" + this.props.assignments[index].endHour.toString()
                            + ":" + this.props.assignments[index].endMinute.toString())}
                    </div>
                </div>
            );
        }
        return null;
    }
}
export default ClassDay;
