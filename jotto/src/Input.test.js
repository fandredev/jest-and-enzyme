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
    test('renders component without error', () => {

    })
    test('renders input box', () => {

    }) 
    test('', () => {

    })
  })
  describe('word has not been guessed', () => {
    test('does renders component without error', () => {

    })
    test('does not render input box', () => {

    }) 
    test('does not render input box', () => {

    })
  })
})  

describe('',() => {})