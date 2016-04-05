import React, { PropTypes } from 'react';
import $ from 'jquery';
import SUITransition from 'semantic-ui-transition';
import SUIDropDown from 'semantic-ui-dropdown';
import SUIPopup from 'semantic-ui-popup';
import InlineCSS from 'react-inline-css';
import './semantic-calendar.js';

export default class Calendar extends React.Component {

    constructor(props) {
        super(props);
        $.fn.transition = SUITransition;
        $.fn.popup = SUIPopup;
        $.fn.dropdown = SUIDropDown;
    }

    componentDidMount() {
        var context = this;

        $(this.refs.calendar).find('input').val(this.props.initialDate);
        $(this.refs.calendar).calendar({
            type: 'date',
            onChange: (newDate) => {
                if (this.props.onChange) {
                    this.props.onChange.apply([context, newDate.toISOString()]);
                }
            }
        });
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <InlineCSS stylesheet={`
                .ui.calendar .ui.popup {
                    max-width: none;
                    padding: 0;
                    border: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none
                }
                .ui.calendar .calendar:focus {
                    outline: 0
                }
                .ui.calendar .ui.table.minute,
                .ui.calendar .ui.table.month,
                .ui.calendar .ui.table.year {
                    min-width: 15em
                }
                .ui.calendar .ui.table.day {
                    min-width: 18em
                }
                .ui.calendar .ui.table.hour {
                    min-width: 20em
                }
                .ui.calendar .ui.table tr td,
                .ui.calendar .ui.table tr th {
                    padding: .5em;
                    white-space: nowrap
                }
                .ui.calendar .ui.table tr th {
                    border-left: none
                }
                .ui.calendar .ui.table tr th .icon {
                    margin: 0
                }
                .ui.calendar .ui.table tr:first-child th {
                    position: relative;
                    padding-left: 0;
                    padding-right: 0
                }
                .ui.calendar .ui.table.day tr:first-child th {
                    border: none
                }
                .ui.calendar .ui.table.day tr:nth-child(2) th {
                    padding-top: .2em;
                    padding-bottom: .3em
                }
                .ui.calendar .ui.table tr td {
                    padding-left: .1em;
                    padding-right: .1em
                }
                .ui.calendar .ui.table tr .link {
                    cursor: pointer
                }
                .ui.calendar .ui.table tr .prev.link {
                    width: 14.28571429%;
                    position: absolute;
                    left: 0
                }
                .ui.calendar .ui.table tr .next.link {
                    width: 14.28571429%;
                    position: absolute;
                    right: 0
                }
                .ui.calendar .ui.table tr .disabled {
                    pointer-events: none;
                    color: rgba(40, 40, 40, .3)
                }
                .ui.calendar .ui.table tr td.today {
                    font-weight: 700
                }
                .ui.calendar .ui.table tr td.range {
                    background: rgba(0, 0, 0, .05);
                    color: rgba(0, 0, 0, .95);
                    box-shadow: none
                }
                .ui.calendar .ui.table.inverted tr td.range {
                    background: rgba(255, 255, 255, .08);
                    color: #fff;
                    box-shadow: none
                }
                .ui.calendar .calendar.active .ui.table tbody tr td.focus,
                .ui.calendar .calendar.active .ui.table.inverted tbody tr td.focus,
                .ui.calendar .calendar:focus .ui.table tbody tr td.focus,
                .ui.calendar .calendar:focus .ui.table.inverted tbody tr td.focus {
                    box-shadow: inset 0 0 0 1px #85B7D9
                }
            `}>
                <div className="ui calendar" ref="calendar">
                    <div className="ui input left icon">
                        <i className="calendar icon" />
                        <input type="text" placeholder="Choose Date..." />
                    </div>
                </div>
            </InlineCSS>
        );
    }
}

Calendar.propTypes = {
    onChange: PropTypes.func,
    initialDate: PropTypes.string.isRequired,
};
