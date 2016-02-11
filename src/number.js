import abstractRequiredValidator from './abstractRequiredValidator.js';
import abstractValidator from './abstractValidator.js';
import {
	isNumeric,
	isError,
	isDefined,
	isString
} from './utilities/';
import * as any from './any.js';

/**
 * Extends the general required validator for the type `Number`.
 *
 * @param val {*} The value which will be validated.
 * @returns {Error|*} Either an error or the value if it is a valid Boolean.
 *
 */
export const isRequired = abstractRequiredValidator(val => {
	const convertedNumber = isString(val) ? Math.abs(val) : val;
	const isNumber = isNumeric(convertedNumber);

	if (!isNumber) {
		return new Error(`The value is required and must be a "Number", instead got "${typeof val}".`);
	}

	return convertedNumber;
});

/**
 * Extends the general optional validator for the type `Number`.
 *
 * @param val {*} The value which will be validated.
 * @returns {Error|*} Either an error or the value which was passed to the validator.
 *
 */
export const isOptional = abstractValidator(val => {
	const convertedNumber = isString(val) ? Math.abs(val) : val;
	const isValueNotNumeric = !isNumeric(convertedNumber);

	if (isDefined(val) && isValueNotNumeric) {
		return new Error(`The value is optional, but must be a "Number", instead got "${typeof val}".`);
	}

	return convertedNumber;
});
