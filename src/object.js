import {
	isDefined,
	isError,
	isObject
} from './utilities/';
import * as any from './any.js';

/**
 * Extends the general required validator for the type `Object`.
 *
 * @param val {*} The value which will be validated.
 * @returns {Error|*} Either an Error of the passed value if defined.
 *
 */
export const isRequired = val => {
	const requiredResult = any.isRequired(val);

	if (isError(requiredResult)) {
		return requiredResult;
	}

    // Try to convert the value to a JSON object.
	try {
		val = JSON.parse(val);
	} catch (e) {}

	if (!isObject(val)) {
		return new Error(`The value is required and must be a "Object", instead got "${typeof val}".`);
	}

	return val;
};


/**
 * Extends the general optional validator for the type `Boolean`.
 *
 * @param val {*} The value which will be validated.
 * @returns {Error|*} Either an error or the value which was passed to the validator.
 *
 */
export const isOptional = val => {
	// Try to convert the value to a JSON object.
	try {
		val = JSON.parse(val);
	} catch (e) {}

	if (isDefined(val) && !isObject(val)) {
		return new Error(`The value is optional, but must be a "Object", instead got "${typeof val}".`);
	}

	return val;
};
