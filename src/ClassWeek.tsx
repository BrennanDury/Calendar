import React from 'react';
import ClassDay from './ClassDay';
import './ClassWeek.css';
import ClassPanel from "./ClassPanel";

interface ClassWeekProps {
    assignmentAdd(selected : string, classNum : number) : void;
    id : number;
    assignments : string[];
}

class ClassWeek extends React.Component<ClassWeekProps, {}> {

    render() {
        return (
        <div>
            <ClassPanel assignmentAdd={this.props.assignmentAdd} id={this.props.id}/>
            <div className = "class-grid-container" >
                <ClassDay column = {1} assignments={this.props.assignments}/>
                <ClassDay column = {2} assignments={this.props.assignments}/>
                <ClassDay column = {3} assignments={this.props.assignments}/>
                <ClassDay column = {4} assignments={this.props.assignments}/>
                <ClassDay column = {5} assignments={this.props.assignments}/>
                <ClassDay column = {6} assignments={this.props.assignments}/>
                <ClassDay column = {7} assignments={this.props.assignments}/>
            </div>

        </div>
        );
    }
}

export default ClassWeek;
