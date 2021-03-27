import React from 'react';
import './App.css';
import ClassWeek from './ClassWeek';
import AddClassButton from './AddClassButton';
import DatePicker from "./DatePicker";

interface AppState {
    numClasses : number;
    date : string;
    assignments : Map<number, string[]>;
}

class App extends React.Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            numClasses : 0,
            date : "",
            assignments : new Map<number, string[]>()
        };
    }

    buttonClick = () => {
        this.state.assignments.set(this.state.numClasses, []);
        this.setState({
            numClasses : this.state.numClasses + 1
        });
    }

    dateSelected = (selected : string) => {
        this.setState({
            date : selected
        });
    }

    assignmentAdd = (assignment : string, classNum : number) => {
        let temp : Map<number, string[]> = this.state.assignments;
        this.makeEmptyIfUndefined(temp.get(classNum)).push(assignment);
        this.setState( {
            assignments : temp
        });
    }

    renderDatePickerIfThereIsAClass() {
        if (this.state.numClasses !== 0) {
            return <DatePicker dateSelected={this.dateSelected}/>;
        } else {
            return <div/>;
        }
    }

    makeEmptyIfUndefined(list : string[] | undefined) : string[] {
        if (list === undefined) {
            return [];
        }
        else {
            return list;
        }
    }

    render() {
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
                {Array.from(Array(this.state.numClasses)).map((x, index) => <ClassWeek assignmentAdd={this.assignmentAdd} id={index} assignments={this.makeEmptyIfUndefined(this.state.assignments.get(index))}/>)}
                <AddClassButton buttonClick={this.buttonClick}/>
            </div>
        );
    }
}
export default App;
