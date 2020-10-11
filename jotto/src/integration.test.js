import { storeFactory } from '../test/TestUtils'
import { guessWord } from './actions'

describe('guessWord action dispatch', () => {
  const secretWord = 'party'
  const unsuccessfulGuess = 'train'

  describe('no guessed words', () => {
    let store
    const initialState = { secretWord }
    beforeEach(() => {
      store = storeFactory(initialState)
    })

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()

      const expectedState = { ...initialState, success: false, guessWords: [{
        guessedWord: unsuccessfulGuess,
        letterMatchCount: 3
      }]}
      expect(newState).toEqual(expectedState)
    })
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()

      const successfulGuess = {
        ...initialState, 
          success: true, 
          guessWords: [{
            guessedWord: secretWord, 
            letterMatchCount: 5
          }]
      }
      expect(newState).toEqual(successfulGuess)
    })  
    describe('some guessed words',() => {
      const guessedWords = [ { guessedWord: 'agile', letterMatchCount: 1 } ]
  
      const initialState = { guessedWords, secretWord}
  
      beforeEach(() => {
        store = storeFactory(initialState)
      })
      test('updates state correctly for unsucessful guess', () => {
        store.dispatch(guessWord(unsuccessfulGuess))
        const newState = store.getState()
        const expectedState = {
          secretWord,
          success: false,
          guessWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }]
        }
        expect(newState).toEqual(expectedState)
      })
      test('updates state correctly for sucessful guess', () => {
          store.dispatch(guessWord(secretWord))
          const newState = store.getState()
          const expectedState = {
            secretWord,
            success: true,
            guessWords: [...guessedWords, {guessedWord: secretWord, letterMatchCount: 5} ]
          }
        expect(newState).toEqual(expectedState)
      })
    })
  })
})