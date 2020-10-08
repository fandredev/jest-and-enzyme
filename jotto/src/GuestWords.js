import React from "react";
import PropTypes from "prop-types";

const GuestWords = (props) => {
  let contexts;
  if (props.guessedWords.length === 0) {
    contexts = (
      <span data-test="guess-instructions">Try to guest the secret word</span>
    );
  }
  return <div data-test="component-guessed-words">{contexts}</div>;
};

GuestWords.propTypes = {
  // array de objetos
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuestWords;
