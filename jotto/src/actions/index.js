export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
}

/**
 * Returns redux thunk function that dispatches GUESS_WORD action
 * and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed Word
 * @returns {function} - Redux Thunk function
 */
export const guessWord = guessedWord => {
  return (dispatch, getState) => {

  }
}