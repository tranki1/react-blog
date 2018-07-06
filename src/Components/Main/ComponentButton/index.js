import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

const ComponentButton = ({ buttonName, handleClick }) => (
  <button type="button" className={styles.Button} onClick={handleClick}>
    {buttonName}
  </button>
);

ComponentButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
ComponentButton.defaultProps = {
  handleClick() {},
};
export default ComponentButton;
