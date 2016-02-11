import abstractRequiredValidator from './abstractRequiredValidator.js';
import abstractValidator from './abstractValidator.js';
import {
	isDefined,
	isString,
	isError
} from './utilities/';
import * as any from './any.js';

/**
 * Extends the general required validator for the type `String`.
 *
 * @param val {*} The value which will be validated.
 * @returns {Error|*} Either an Error of the passed value if defined.
 *
 */
export const isRequired = abstractRequiredValidator(val => {
	const isValueNotValidString = !isString(val);

	if (isValueNotValidString) {
		return new Error(`The value is required and must be a "String", instead got "${typeof val}".`);
	}

	return val;
});


/**
 * Extends the general optional validator for the type `String`.
 *
 * @param val {*} The value which will be validated.
 * @returns {Error|*} Either an error or the value which was passed to the validator.
 *
 */
export const isOptional = abstractValidator(val => {
	const isValueNoString = !isString(val);

	if (isDefined(val) && isValueNoString) {
		return new Error(`The value is optional, but must be a "String", instead got "${typeof val}".`);
	}

	return isDefined(val) ? val : undefined;
});
