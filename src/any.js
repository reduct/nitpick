import abstractRequiredValidator from './abstractRequiredValidator.js';
import abstractValidator from './abstractValidator.js';
import {isDefined} from './utilities/';

/**
 * Represents a general required check against a value.
 *
 * @param val {*} The value which will be validated.
 * @returns {Error|*} Either an Error of the passed value if defined.
 *
 */
export const isRequired = abstractRequiredValidator();

/**
 * Represents a general optional check against a value.
 *
 * @param val {*} The value which will be validated.
 * @returns {*} Either an undefined or the value which was passed to the validator.
 *
 */
export const isOptional = abstractValidator(val => {
	const isValueDefined = isDefined(val);

	// Fail safe to have a conssitent return value
	// if "null" was passed as the value.
	if (!isValueDefined) {
		return undefined;
	}

	return val;
});
