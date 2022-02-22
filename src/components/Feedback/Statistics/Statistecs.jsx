import React, { Component } from "react";
import PropTypes from "prop-types";

class Statistics extends Component{
    render() {
        return (
            <ul>
                <li>Good: {this.props.good}</li>
                <li>Neutral: {this.props.neutral}</li>
                <li>Bad: { this.props.bad}</li>
                <li>Total: {this.props.total()}</li>
                <li>Positive feedback: {this.props.positivePercentage()}%</li>
            </ul>
        )
    }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;

