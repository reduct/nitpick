import {
	isBoolean,
	isDefined,
	isError,
	convertStringBoolean
} from './utilities/';
import * as any from './any.js';

/**
 * Extends the general required validator for the type `Boolean`.
 *
 * @param val {*} The value which will be validated.
 * @returns {Error|*} Either an Error of the passed value if defined.
 *
 */
export const isRequired = val => {
	const requiredResult = any.isRequired(val);
	const convertedBoolean = convertStringBoolean(val);
	const isValueNotBool = !isBoolean(convertedBoolean);

	if (isError(requiredResult)) {
		return requiredResult;
	}

	if (isValueNotBool) {
		return new Error(`The value is required and must be a "Boolean", instead got "${typeof val}".`);
	}

	return convertedBoolean;
};

/**
 * Extends the general optional validator for the type `Boolean`.
 *
 * @param val {*} The value which will be validated.
 * @returns {Error|*} Either an error or the value which was passed to the validator.
 *
 */
export const isOptional = val => {
	const convertedBoolean = convertStringBoolean(val);
	const isValueNotBool = !isBoolean(convertedBoolean);

	if (isDefined(val) && isValueNotBool) {
		return new Error(`The value is optional, but must be a "Boolean", instead got "${typeof val}".`);
	}

	return convertedBoolean;
};
