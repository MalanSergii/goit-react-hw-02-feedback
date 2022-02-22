import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";
class FeedbackOptions extends Component{
    render() {
        return (
            <div>
                <Button
                    onClick={this.props.onButtonClick}
                >Good</Button>
                <Button
                    onClick={this.props.onButtonClick}
                >Neutral</Button>
                <Button
                    onClick={this.props.onButtonClick}
                >Bad</Button>
            </div>
        )
    }
}

FeedbackOptions.propTypes = {
    onButtonClick: PropTypes.func.isRequired,
}

export default FeedbackOptions;