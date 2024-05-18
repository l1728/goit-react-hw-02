import PropTypes from 'prop-types';
import styles from '../Options/Options.module.css';

const Options = ({ realFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={styles.buttons}>
      <button
        className={`${styles.oneButton} ${styles.goodButton}`}
        onClick={() => realFeedback('good')}
      >
        Good
      </button>
      <button
        className={`${styles.oneButton} ${styles.neutralButton}`}
        onClick={() => realFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={`${styles.oneButton} ${styles.badButton}`}
        onClick={() => realFeedback('bad')}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.oneButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  realFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  resetFeedback: PropTypes.func.isRequired,
};
export default Options;
