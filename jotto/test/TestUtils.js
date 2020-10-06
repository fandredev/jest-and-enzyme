
/**
 * Return node(s) with the given data-test attribute
 * @function setup - Enzyme shallow wrapper
 * @param {string} value - Value of data-test enzyme for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`)
}