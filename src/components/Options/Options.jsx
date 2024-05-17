import styles from '../Options/Options.module.css';

const Options = ({ realFeedback }) => {
  return (
    <div className={styles.buttons}>
      <button className={styles.oneButton} onClick={() => realFeedback('good')}>
        Good
      </button>
      <button
        className={styles.oneButton}
        onClick={() => realFeedback('neutral')}
      >
        Neutral
      </button>
      <button className={styles.oneButton} onClick={() => realFeedback('bad')}>
        Bad
      </button>
    </div>
  );
};
export default Options;
