import React from 'react';
import ClassDay from './ClassDay';
import './ClassWeek.css';

interface ClassWeekProps {
    //numClasses : number;
}

class ClassWeek extends React.Component<ClassWeekProps,{}> {


    render() {
        return (
            <div className = "grid-container" >
                <ClassDay column = {0}/>
                <ClassDay column = {1}/>
                <ClassDay column = {2}/>
                <ClassDay column = {3}/>
                <ClassDay column = {4}/>
                <ClassDay column = {5}/>
                <ClassDay column = {6}/>
            </div>
        );
    }
}

export default ClassWeek;
