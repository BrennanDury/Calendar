import React from 'react';

interface AddClassButtonProps {
    buttonClick() : void;
}

class AddClassButton extends React.Component<AddClassButtonProps, {}> {

    render() {
        return (
            <button onClick={this.props.buttonClick}>
                Add a Class
            </button>
        );
    }
}

export default AddClassButton;
