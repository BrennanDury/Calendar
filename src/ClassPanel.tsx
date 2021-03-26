import React from 'react';

interface ClassPanelProps {
    assignmentAdd(assignment : string) : void;
    id : number;
}

interface ClassPanelState {
    assignment : string;
}

class ClassPanel extends React.Component<ClassPanelProps, ClassPanelState> {

    type = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState( {
            assignment : event.target.value
        });
    }

    add = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13) { //enter
            this.props.assignmentAdd(this.state.assignment);
            event.preventDefault();
            let element = document.getElementById(this.props.id.toString()) as HTMLInputElement;
            element.value = "";
        }
    }

    render() {
        return (
            <div className="wrapper">
                <input className="class" placeholder="Class Name">

                </input>
                <input id={this.props.id.toString()} className="addAssignment" placeholder="Add an assignment" onChange={this.type} onKeyDown={this.add}>

                </input>
            </div>

        );
    }
}

export default ClassPanel;
