import PropTypes from 'prop-types';
import styles from '../Notification/Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={styles.message}>
      <p className={styles.textMessage}>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
