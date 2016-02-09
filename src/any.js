import {isDefined} from './utilities/';

/**
 * Represents a general required check against a value.
 *
 * @param val {*} The value which will be validated.
 * @returns {Error|*} Either an Error of the passed value if defined.
 *
 */
export const isRequired = val => {
	const isValueDefined = isDefined(val);

	if (!isValueDefined) {
		return new Error(`The value is required but is either "undefined" or "null".`);
	}

	return val;
};

/**
 * Represents a general optional check against a value.
 *
 * @param val {*} The value which will be validated.
 * @returns {*} Either an undefined or the value which was passed to the validator.
 *
 */
export const isOptional = val => {
	const isValueDefined = isDefined(val);

	// Fail safe to have a conssitent return value
	// if "null" was passed as the value.
	if (!isValueDefined) {
		return undefined;
	}

	return val;
};
