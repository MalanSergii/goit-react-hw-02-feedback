import React, { Component } from "react";
import PropTypes from "prop-types";


import Notification from "./Notification";
import Section from "./Section";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onButtonClick = (event) => {
        event.target.textContent === "Good" && this.setState((prev) => ({good:prev.good +1}));
        event.target.textContent === "Neutral" && this.setState((prev) => ({ neutral: prev.neutral + 1 }));
        event.target.textContent === "Bad" && this.setState((prev) => ({ bad: prev.bad + 1 }));
    }
    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return (good + neutral + bad)
    }

    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        let total = good + neutral + bad;
        let goodFeedback = good * 100 / total;
        return total ? Math.round(goodFeedback) : 0;
    }

    render() {
        return (
            <>
                <Section title="Please leave your feedback">    
                    <FeedbackOptions
                    onButtonClick={this.onButtonClick} />
                </Section>

                <Section title="Statistics">
                    {this.countTotalFeedback() > 0
                        ?
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback}
                            positivePercentage={this.countPositiveFeedbackPercentage}
                        />
                        :
                        <Notification message="There is no feedback"/>
                    }
                </Section>
            </>
        )
    }
}

Feedback.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ),
};

export default Feedback;