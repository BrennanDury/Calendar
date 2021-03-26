import React from 'react';

interface ClassPanelProps {
    assignmentAdd(assignment : string) : void;
}

class ClassPanel extends React.Component<ClassPanelProps, {}> {

    add = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.assignmentAdd(event.target.value);
    }

    render() {
        return (
            <div className="wrapper">
                <input className="class" placeholder="Class Name">

                </input>
                <input className="addAssignment" placeholder="Add an assignment" onChange={this.add}>

                </input>
            </div>

        );
    }
}

export default ClassPanel;
