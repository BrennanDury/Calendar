import React from 'react';
import './App.css';
import ClassWeek from './ClassWeek';

interface AppState {

}

class App extends React.Component<{}, AppState> {

    render() {
        return (
            <div className="App">
                <ClassWeek/>
            </div>
        );
    }
}
export default App;
