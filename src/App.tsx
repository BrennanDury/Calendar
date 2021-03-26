import React from 'react';
import './App.css';
import ClassWeek from './ClassWeek';
import AddClassButton from './AddClassButton';

interface AppState {
    numClasses : number;
}

class App extends React.Component<{}, AppState> {

    constructor(props: any) {
        super(props);
        this.state = {
            numClasses : 0
        };
    }

    buttonClick = () => {
        this.setState({
            numClasses : this.state.numClasses + 1
        });
    }

    render() {
        return (
            <div className="App">
                <div className="grid-container">
                    <div className="classList label">
                        Classes
                    </div>
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
                {Array.from(Array(this.state.numClasses)).map((x, index) => <ClassWeek/>)}
                <AddClassButton buttonClick={this.buttonClick}/>
            </div>
        );
    }
}
export default App;
