import {
    isDefined,
	isObject,
	logger
} from './utilities/';
import * as any from './any.js';

console.log(isObject, isDefined)

/**
 * Extends the general required validator for the type `Object`.
 *
 * @param propValue {*} The value which will be validated.
 * @param propName {String} The name which will be logged in case of errors.
 * @param el {HTMLElement} The element on which the value was expected on.
 * @returns {{result: boolean, value: *}}
 *
 */
export const isRequired = (propValue, propName, el) => {
	let result = true;
	let isValidObject;

	// Since The prop is required, check for it's value beforehand.
	any.isRequired.apply(this, arguments);

	// If the passed Property is a string, convert it to a JSON object beforehand.
	try {
		propValue = JSON.parse(propValue);
	} catch (e) {}

	// Verify the type of the value.
	isValidObject = isObject(propValue);

	if (!isValidObject) {
		logger.error('The prop "' + propName + '" is not an valid JSON object. ', el);
		result = false;
	}

	return {
		result: result,
		value: propValue
	};
};

/**
 * Extends the general optional validator for the type `Object`.
 *
 * @param propValue {*} The value which will be validated.
 * @param propName {String} The name which will be logged in case of errors.
 * @param el {HTMLElement} The element on which the value was expected on.
 * @returns {{result: boolean, value: *}}
 *
 */
export const isOptional = (propValue, propName, el) => {
	const isPropValueDefined = isDefined(propValue);
	let result = true;
	let isValidObject;

	// If the passed Property is a string, convert it to a JSON object beforehand.
	try {
		propValue = JSON.parse(propValue);
	} catch (e) {}

	// Verify the type of the value.
	isValidObject = isObject(propValue);

	if (isPropValueDefined && !isValidObject) {
		logger.error('The prop "' + propName + '" is not an valid JSON object. ', el);
		result = false;
	}

	return {
		result: result,
		value: propValue
	};
};
