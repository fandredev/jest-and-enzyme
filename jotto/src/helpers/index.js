/**
 * @method getLetterMatchCount 
 * @param {string} guessedWord - Guessed Word
 * @param {string} secretWord - Secret Word
 * @returns {number} - Number of letters matched between guessed word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretWordSet = new Set(secretWord.split(''))
  const guessedLetterSet = new Set(guessedWord.split(''))

  return [...secretWordSet].filter(l => guessedLetterSet.has(l)).length
}