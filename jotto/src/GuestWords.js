import React from "react";
import PropTypes from "prop-types";

const GuestWords = (props) => {
  let contexts;
  if (props.guessedWords.length === 0) {
    contexts = (
      <span data-test="guess-instructions">Try to guest the secret word</span>
    );
  }
  else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))
    contexts = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWordsRows}
          </tbody>
        </table>
      </div>
    )
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
