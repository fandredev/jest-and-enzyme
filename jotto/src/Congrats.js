import React from "react";
import PropTypes from "prop-types";

/**
 * Function react component for congratulatory message.
 * @function
 * @param {boolean} success - React props
 * @returns {JSX.Element}
 */
const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You guessed the word.
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
