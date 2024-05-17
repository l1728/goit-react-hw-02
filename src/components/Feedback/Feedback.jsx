import styles from '../Feedback/Feedback.module.css';

const Feedback = ({ feedback }) => {
  return (
    <div className={styles.allFeedback}>
      <p className={styles.onlyFeedback}>Good: {feedback.good}</p>
      <p className={styles.onlyFeedback}>Neutral: {feedback.neutral}</p>
      <p className={styles.onlyFeedback}>Bad: {feedback.bad}</p>
    </div>
  );
};
export default Feedback;
