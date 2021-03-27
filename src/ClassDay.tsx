import React from 'react';
import './ClassDay.css';

interface ClassDayProps {
    column : number;
    assignments : string[];
}

class ClassDay extends React.Component<ClassDayProps,{}> {

    render() {
        if (this.props.column === 1) {
            return (
                <div className="one day">
                    {this.props.assignments}
                </div>
            );
        }
        if (this.props.column === 2) {
            return (
                <div className="two day">
                    {this.props.assignments}
                </div>
            );
        }
        if (this.props.column === 3) {
            return (
                <div className="three day">
                    {this.props.assignments}
                </div>
            );
        }
        if (this.props.column === 4) {
            return (
                <div className="four day">
                    {this.props.assignments}
                </div>
            );
        }
        if (this.props.column === 5) {
            return (
                <div className="five day">
                    {this.props.assignments}
                </div>
            );
        }
        if (this.props.column === 6) {
            return (
                <div className="six day">
                    {this.props.assignments}
                </div>
            );
        }
        if (this.props.column === 7) {
            return (
                <div className="seven day">
                    {this.props.assignments}
                </div>
            );
        }
        return null;
    }
}
export default ClassDay;
