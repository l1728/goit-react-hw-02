import PropTypes from 'prop-types';
import styles from '../Feedback/Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div className={styles.allFeedback}>
      <p className={styles.onlyFeedback}>Good: {feedback.good}</p>
      <p className={styles.onlyFeedback}>Neutral: {feedback.neutral}</p>
      <p className={styles.onlyFeedback}>Bad: {feedback.bad}</p>
      <p className={styles.onlyFeedback}>Total: {totalFeedback}</p>
      <p className={styles.onlyFeedback}>
        Positive: {positiveFeedbackPercentage}%
      </p>
    </div>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
export default Feedback;
