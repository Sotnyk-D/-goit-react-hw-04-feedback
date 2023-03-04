import { useState } from 'react';
import { FeedBackOptions } from "./FeedBackOptions/FeedBackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
   const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
 const countTotalFeedback = () => {
    return  feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
		return Math.round((feedback.good / countTotalFeedback()) * 100);
	};
  
  const  onLeaveFeedback = event => {
    const { name } = event.target;
    setFeedback(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
	};

  return (
      <>
        <Section title="Please leave feedback">
          <FeedBackOptions options={Object.keys(feedback)} onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given"/>
        ) : (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    )
}


