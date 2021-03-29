import React from 'react';
import CalendarEvent from "./CalendarEvent";

interface ClassPanelProps {
    assignmentAdd(date : string, classNum : number, calEvent : CalendarEvent) : void;
    classNum : number;
}

interface ClassPanelState {
    assignment : string;
}

class ClassPanel extends React.Component<ClassPanelProps, ClassPanelState> {

    type = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState( {
            assignment : event.target.value
        });
    }

    add = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) { //enter
            let assignment : string = this.state.assignment;
            let date : string = assignment.substring(0, assignment.indexOf(" "));
            assignment = assignment.substring(assignment.indexOf(" ") + 1);
            let startHour = assignment.substring(0, assignment.indexOf(":"));
            assignment = assignment.substring(assignment.indexOf(":") + 1);
            let startMinute = assignment.substring(0, assignment.indexOf(" "));
            assignment = assignment.substring(assignment.indexOf(" ") + 1);
            let endHour = assignment.substring(0, assignment.indexOf(":"));
            assignment = assignment.substring(assignment.indexOf(":") + 1);
            let endMinute = assignment.substring(0, assignment.indexOf(" "));
            assignment = assignment.substring(assignment.indexOf(" ") + 1);
            let name = assignment;
            let classNum : number = this.props.classNum;
            let calEvent : CalendarEvent = new CalendarEvent(startHour, startMinute, endHour, endMinute, name);

            this.props.assignmentAdd(date, classNum, calEvent);

            event.preventDefault();
            let element = document.getElementById(this.props.classNum.toString()) as HTMLInputElement;
            element.value = "";
        }
    }

    render() {
        return (
            <div className="wrapper">
                <input className="class" placeholder="Class Name">

                </input>
                <input id={this.props.classNum.toString()} className="addAssignment" placeholder="Add an assignment" onChange={this.type} onKeyDown={this.add}>

                </input>
            </div>

        );
    }
}



export default ClassPanel;
