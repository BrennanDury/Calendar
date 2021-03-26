import React from 'react';
import ClassDay from './ClassDay';
import './ClassWeek.css';
import ClassPanel from "./ClassPanel";



class ClassWeek extends React.Component<{},{}> {

    render() {
        return (
        <div>
            <ClassPanel/>
            <div className = "class-grid-container" >
                <ClassDay column = {1}/>
                <ClassDay column = {2}/>
                <ClassDay column = {3}/>
                <ClassDay column = {4}/>
                <ClassDay column = {5}/>
                <ClassDay column = {6}/>
                <ClassDay column = {7}/>
            </div>

        </div>
        );
    }
}

export default ClassWeek;
