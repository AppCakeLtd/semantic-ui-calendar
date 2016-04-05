import React, { PropTypes } from 'react';
import $ from 'jquery';
import SUIDropDown from 'semantic-ui-dropdown';
import SUIPopup from 'semantic-ui-popup';
import './semantic-calendar.js';

export default class Calendar extends React.Component {

    constructor(props) {
        super(props);
        $.fn.dropdown = SUIDropDown;
        $.fn.popup = SUIPopup;
    }

    componentDidMount() {
        $(this.refs.calendar).find('input').val(this.props.initialDate);
        $(this.refs.calendar).calendar({
            type: 'date',
            onChange: (newDate) => {
                this.props.onChange(newDate.toISOString())
            }
        });
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div className="ui calendar" ref="calendar">
                <div className="ui input left icon">
                    <i className="calendar icon" />
                    <input type="text" placeholder="Choose Date..." />
                </div>
            </div>
        );
    }
}

Calendar.propTypes = {
    onChange: PropTypes.func,
    initialDate: PropTypes.string.isRequired,
};
