import React from 'react';
import './App.css';
import ClassWeek from './ClassWeek';
import AddClassButton from './AddClassButton';
import DatePicker from "./DatePicker";

interface AppState {
    numClasses : number;
    date : string;
    assignments : string[];
}

class App extends React.Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            numClasses : 0,
            date : "",
            assignments : []
        };
    }

    buttonClick = () => {
        this.setState({
            numClasses : this.state.numClasses + 1
        });
    }

    dateSelected = (selected : string) => {
        this.setState({
            date : selected
        });
    }

    assignmentAdd = (assignment : string) => {
        this.setState ({
            assignments : this.state.assignments.concat(assignment)
        });
    }

        render() {
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
                <DatePicker dateSelected={this.dateSelected} />
                {Array.from(Array(this.state.numClasses)).map((x, index) => <ClassWeek assignmentAdd={this.assignmentAdd}/>)}
                <AddClassButton buttonClick={this.buttonClick}/>
            </div>
        );
    }
}
export default App;
