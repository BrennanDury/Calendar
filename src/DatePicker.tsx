import React from 'react';

interface DatePickerProps {
    dateSelected(selected : string) : void;
}

class DatePicker extends React.Component<DatePickerProps, {}> {

    selected = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.dateSelected(event.target.value);
    }

    render() {
        return (
            <input type="date" onSelect={this.selected}>

            </input>
        );
    }
}

export default DatePicker;
