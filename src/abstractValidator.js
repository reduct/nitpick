/**
 * Reduces the overall amount of code to align the @reduct/nitpick validators to the validator scheme.
 *
 * @param fn {*} The validator function which will be executed via FP.
 * @returns {Function} The curry function which will be wrapped around the validator.
 *
 */
export default fn => (props, propName) => fn(props[propName]);
