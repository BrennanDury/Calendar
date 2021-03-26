import React from 'react';


class ClassPanel extends React.Component<{},{}> {

    render() {
        return (
            <div className="wrapper">
                <input className="class" placeholder="Class Name">

                </input>
                <input className="addAssignment" placeholder="Add an assignment">

                </input>
            </div>

        );
    }
}

export default ClassPanel;
