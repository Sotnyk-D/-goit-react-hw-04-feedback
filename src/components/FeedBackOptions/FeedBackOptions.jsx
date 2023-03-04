import PropTypes from 'prop-types';
import style from './FeedBackOptions.module.css';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        key={option}
        className={styles.button}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
