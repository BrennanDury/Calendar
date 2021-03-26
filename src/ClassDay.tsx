import React from 'react';
import './ClassDay.css';

interface ClassDayProps {
    column : number;
}

class ClassDay extends React.Component<ClassDayProps,{}> {

    render() {
        if (this.props.column === 1) {
            return (
                <div className="one">
                    {this.props.column}
                </div>
            );
        }
        if (this.props.column === 2) {
            return (
                <div className="two">
                    {this.props.column}
                </div>
            );
        }
        if (this.props.column === 3) {
            return (
                <div className="three">
                    {this.props.column}
                </div>
            );
        }
        if (this.props.column === 4) {
            return (
                <div className="four">
                    {this.props.column}
                </div>
            );
        }
        if (this.props.column === 5) {
            return (
                <div className="five">
                    {this.props.column}
                </div>
            );
        }
        if (this.props.column === 6) {
            return (
                <div className="six">
                    {this.props.column}
                </div>
            );
        }
        if (this.props.column === 7) {
            return (
                <div className="seven">
                    {this.props.column}
                </div>
            );
        }
        return null;
    }
}
export default ClassDay;
