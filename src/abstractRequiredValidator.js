import abstractValidator from './abstractValidator.js';
import {
	isDefined,
	isFunction
} from './utilities/';

/**
 * Applies a general check for the existence of a value.
 *
 * @param fn {*} The optional validator function which will be executed after the check.
 * @returns {Function} The curry function which will be wrapped around the validator.
 *
 */
export default fn => {
	return abstractValidator(val => {
		const isValueDefined = isDefined(val);

		if (!isValueDefined) {
			return new Error(`The value is required but is either "undefined" or "null".`);
		}

		return isFunction(fn) ? fn(val) : val;
	});
}
