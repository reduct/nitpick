import {
	isString,
	logger
} from './utilities/';
import * as any from './any.js';

/**
 * Extends the general required validator for the type `String`.
 *
 * @param propValue {*} The value which will be validated.
 * @param propName {String} The name which will be logged in case of errors.
 * @param el {HTMLElement} The element on which the value was expected on.
 * @returns {{result: boolean, value: *}}
 *
 */
export const isRequired = (propValue, propName, el) => {
	const isValidString = isString(propValue);
	let result = true;

	// Since The prop is required, check for it's value beforehand.
	any.isRequired.apply(this, arguments);

	if (!isValidString) {
		logger.error('The prop "' + propName + '" is not a string. ', el);
		result = false;
	}

	return {
		result: result,
		value: propValue
	};
};

/**
 * Extends the general optional validator for the type `String`.
 *
 * @param propValue {*} The value which will be validated.
 * @param propName {String} The name which will be logged in case of errors.
 * @param el {HTMLElement} The element on which the value was expected on.
 * @returns {{result: boolean, value: *}}
 *
 */
export const isOptional = (propValue, propName, el) => {
	const isValidString = isString(propValue);
	let result = true;

	if (!isValidString) {
		logger.error('The prop "' + propName + '" is not a string. ', el);
		result = false;
	}

	return {
		result: result,
		value: propValue
	};
};
