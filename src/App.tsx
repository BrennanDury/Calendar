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
                {Array.from(Array(this.state.numClasses)).map((x, index) => <ClassWeek/>)}
                <AddClassButton buttonClick={this.buttonClick}/>
            </div>
        );
    }
}
export default App;
