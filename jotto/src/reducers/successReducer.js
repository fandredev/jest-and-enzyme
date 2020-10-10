import { actionTypes } from '../actions'

/**
 * @function successArray
 * @param {array} state - Array of guessed words
 * @param {object} action - action to be reduced
 * @returns {boolean} - new state
 */
export default (state = false, action) => {
  switch(action.type) {
    case actionTypes.CORRECT_GUESS:
        return true
    default:
        return state
  }
}