import React from 'react';
import ClassDay from './ClassDay';
import './ClassWeek.css';
import ClassPanel from "./ClassPanel";
import CalendarEvent from "./CalendarEvent";

interface ClassWeekProps {
    assignmentAdd(date : string, classNum : number, calEvent : CalendarEvent) : void;
    classNum : number;
    selectedDate : string;
    assignments : Map<string, CalendarEvent[]>;
}

class ClassWeek extends React.Component<ClassWeekProps, {}> {

    makeListEmptyIfUndefined(list : CalendarEvent[] | undefined) : CalendarEvent[] {
        if (list === undefined) {
            return [];
        }
        else {
            return list;
        }
    }

    render() {
        return (
        <div>
            <ClassPanel assignmentAdd={this.props.assignmentAdd} classNum={this.props.classNum}/>
            <div className = "class-grid-container" >
                <ClassDay column = {1} date={this.rollDate(this.props.selectedDate, 0)} assignments={this.makeListEmptyIfUndefined(this.props.assignments.get(this.rollDate(this.props.selectedDate, 0)))}/>
                <ClassDay column = {2} date={this.rollDate(this.props.selectedDate, 1)} assignments={this.makeListEmptyIfUndefined(this.props.assignments.get(this.rollDate(this.props.selectedDate, 1)))}/>
                <ClassDay column = {3} date={this.rollDate(this.props.selectedDate, 2)} assignments={this.makeListEmptyIfUndefined(this.props.assignments.get(this.rollDate(this.props.selectedDate, 2)))}/>
                <ClassDay column = {4} date={this.rollDate(this.props.selectedDate, 3)} assignments={this.makeListEmptyIfUndefined(this.props.assignments.get(this.rollDate(this.props.selectedDate, 3)))}/>
                <ClassDay column = {5} date={this.rollDate(this.props.selectedDate, 4)} assignments={this.makeListEmptyIfUndefined(this.props.assignments.get(this.rollDate(this.props.selectedDate, 4)))}/>
                <ClassDay column = {6} date={this.rollDate(this.props.selectedDate, 5)} assignments={this.makeListEmptyIfUndefined(this.props.assignments.get(this.rollDate(this.props.selectedDate, 5)))}/>
                <ClassDay column = {7} date={this.rollDate(this.props.selectedDate, 6)} assignments={this.makeListEmptyIfUndefined(this.props.assignments.get(this.rollDate(this.props.selectedDate, 6)))}/>
            </div>
        </div>
        );
    }

    rollDate(startDate : string, rolls : number) : string {
        if (startDate.length === 0) {
            return "Select a date";
        }
        if (rolls === 0) {
            return startDate;
        } else {
            let r : string = this.rollDate(startDate, rolls - 1);
            let day : number = Number(r.substring(r.length - 2));
            r = r.substring(0, r.length - 2);
            day++;
            r += day;
            return r;
        }
    }

}

export default ClassWeek;
