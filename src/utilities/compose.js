/**
 * Compose various functions
 *
 * @param ...funcs {...Function} The functions that will be composed
 * @returns {Function}
 *
 */
export const compose = (...funcs) => arg => funcs.reverse().reduce(
  (currentValue, nextFunction) => nextFunction(currentValue),
  arg
);
