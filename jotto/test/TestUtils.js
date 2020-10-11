import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import rootReducer from '../src/reducers'
import { middlewares } from '../src/configureStore' 

/**
 * Create a testing store with imported reducers, middleware and initial state
 * globals: rootReducer, middlewares
 * @function storeFactory
 * @param {object} initialState - Initial state for store
 * @returns {Store} - Redux store
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}


/**
 * Return node(s) with the given data-test attribute
 * @function setup - Enzyme shallow wrapper
 * @param {string} value - Value of data-test enzyme for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};
