import {
	isBoolean,
	isDefined,
	convertStringBoolean,
	logger
} from './utilities/';
import * as any from './any.js';

/**
 * Extends the general required validator for the type `Boolean`.
 *
 * @param propValue {*} The value which will be validated.
 * @param propName {String} The name which will be logged in case of errors.
 * @param el {HTMLElement} The element on which the value was expected on.
 * @returns {{result: boolean, value: *}}
 *
 */
export const isRequired = (propValue, propName, el) => {
	const isBool = isBoolean(propValue);
	let result = true;

	// Since The prop is required, check for it's value beforehand.
	any.isRequired.apply(this, arguments);

	if (!isBool) {
		logger.error('The prop "' + propName + '" is not a boolean. ', el);
		result = false;
	}

	propValue = convertStringBoolean(propValue);

	return {
		result: result,
		value: propValue
	};
};

/**
 * Extends the general optional validator for the type `Boolean`.
 *
 * @param propValue {*} The value which will be validated.
 * @param propName {String} The name which will be logged in case of errors.
 * @param el {HTMLElement} The element on which the value was expected on.
 * @returns {{result: boolean, value: *}}
 *
 */
export const isOptional = (propValue, propName, el) => {
	const isBool = isBoolean(propValue);
	let result = true;

	if (!isBool && isDefined(propValue)) {
		logger.info('The prop "' + propName + '" is not a boolean. ', el);
		result = false;
	}

	propValue = convertStringBoolean(propValue);

	return {
		result: result,
		value: propValue
	};
};
