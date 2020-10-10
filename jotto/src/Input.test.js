import React from 'react'

import { shallow, ShallowWrapper } from 'enzyme'
import { findByTestAttr, storeFactory } from '../test/TestUtils'

import Input from './Input'

/**
 * Factory function to create a ShallowWrapepr for the GuessedWords component.
 * @function setup
 * @param {object} initialState
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory()
  const wrapper = shallow(<Input store={store} />).dive().dive()
  return wrapper
}


describe('render',() => {
  describe('word has been guessed',() => {
    let wrapper
    beforeEach(() => {
      const initialState = { success: false }
      wrapper = setup(initialState)
    })
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(1)
    }) 
    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(1)
    })
  })
  describe('word has not been guessed', () => {
    let wrapper
    beforeEach(() => {
      const initialState = {
        success: true
      }
      Object.seal(initialState)
      wrapper = setup(initialState)
    })
    test('does renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })
    test('does not render input box', () => {
      const input = findByTestAttr(wrapper, 'input-box')
      pending('')
      expect(input.length).toBe(0)
    }) 
    test('does not render input box', () => {
      const button = findByTestAttr(wrapper, 'submit-button')
      pending('')
      expect(button.length).toBe(0)
    })
  })
})  

describe('',() => {})