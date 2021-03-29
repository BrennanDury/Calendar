import React from 'react';
import './App.css';
import ClassWeek from './ClassWeek';
import AddClassButton from './AddClassButton';
import DatePicker from "./DatePicker";
import CalendarEvent from "./CalendarEvent";

interface AppState {
    numClasses : number;
    date : string;
    classes : Map<number, Map<string, CalendarEvent[]>>; //class number (0,1,2...) to date as a string to list of calendar events
}

class App extends React.Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            numClasses : 0,
            date : "",
            classes : new Map<number, Map<string, CalendarEvent[]>>()
        };
    }

    addClass = () => {
        this.state.classes.set(this.state.numClasses, new Map<string, CalendarEvent[]>());
        this.setState({
            numClasses : this.state.numClasses + 1
        });
    }

    dateSelected = (selected : string) => {
        this.setState({
            date : selected
        });
    }

    assignmentAdd = (date : string, classNum : number, calEvent : CalendarEvent) => {
        let temp : Map<number, Map<string, CalendarEvent[]>> = this.state.classes;
        let classMap : Map<string, CalendarEvent[]> = this.makeMapEmptyIfUndefined(temp.get(classNum));
        let array : CalendarEvent[] = this.makeListEmptyIfUndefined(classMap.get(date))
        array.push(calEvent);
        // @ts-ignore
        temp.get(classNum).set(date, array);
        this.setState({
            classes : temp
        });
        // @ts-ignore
        //alert(this.state.classes.get(0).get("2021-03-13")[0].endHour);
    }

    makeMapEmptyIfUndefined(map : Map<string, CalendarEvent[]> | undefined) : Map<string, CalendarEvent[]> {
        if (map === undefined) {
            return new Map<string, CalendarEvent[]>();
        }
        else {
            return map;
        }
    }

    makeListEmptyIfUndefined(list : CalendarEvent[] | undefined) : CalendarEvent[] {
        if (list === undefined) {
            return [];
        }
        else {
            return list;
        }
    }

    renderDatePickerIfThereIsAClass() {
        if (this.state.numClasses !== 0) {
            return <DatePicker dateSelected={this.dateSelected}/>;
        } else {
            return <div/>;
        }
    }



    render() {
        if (this.state.classes.get(0) !== undefined) {
            // @ts-ignore
        }

        // @ts-ignore
        return (
            <div className="App">
                <div className="grid-container">
                    <div className="monday label">
                        Monday
                    </div>
                    <div className="tuesday label">
                        Tuesday
                    </div>
                    <div className="wednesday label">
                        Wednesday
                    </div>
                    <div className="thursday label">
                        Thursday
                    </div>
                    <div className="friday label">
                        Friday
                    </div>
                    <div className="saturday label">
                        Saturday
                    </div>
                    <div className="sunday label">
                        Sunday
                    </div>
                </div>
                {this.renderDatePickerIfThereIsAClass()}
                {Array.from(Array(this.state.numClasses)).map((x, index) => <ClassWeek assignmentAdd={this.assignmentAdd} selectedDate={this.state.date} classNum={index} assignments={this.makeMapEmptyIfUndefined(this.state.classes.get(index))}/>)}
                <AddClassButton buttonClick={this.addClass}/>
            </div>
        );
    }
}
export default App;
