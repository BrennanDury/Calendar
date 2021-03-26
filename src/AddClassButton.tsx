import React from 'react';

interface AddClassButtonProps {
    buttonClick() : void;
}

class AddClassButton extends React.Component<AddClassButtonProps, {}> {

    render() {
        return (
            <button onClick={this.props.buttonClick} >

            </button>
        );
    }
}

export default AddClassButton;
