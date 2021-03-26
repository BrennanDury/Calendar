import React from 'react';
import ClassDay from './ClassDay';
import './ClassWeek.css';
import ClassPanel from "./ClassPanel";

interface ClassWeekProps {
    assignmentAdd(selected : string) : void;
    id : number;
}

class ClassWeek extends React.Component<ClassWeekProps, {}> {

    render() {
        return (
        <div>
            <ClassPanel assignmentAdd={this.props.assignmentAdd} id={this.props.id}/>
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
