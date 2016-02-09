import {
	isDefined,
	logger
} from './utilities/';

/**
 * Represents a general required check against a value.
 *
 * @param propValue {*} The value which will be validated.
 * @param propName {String} The name which will be logged in case of errors.
 * @param el {HTMLElement} The element on which the value was expected on.
 * @returns {{result: boolean, value: *}}
 *
 */
export const isRequired = (propValue, propName, el) => {
	const isPropInProps = isDefined(propValue);

	if (!isPropInProps) {
		logger.error('The prop "' + propName + '" is required and wasn‘t found on: ', el);
	}

	return {
		result: isPropInProps,
		value: propValue
	};
};

/**
 * Represents a general optional check against a value.
 *
 * @param propValue {*} The value which will be validated.
 * @param propName{String} The name which will be logged in case of errors.
 * @param el {HTMLElement} The element on which the value was expected on.
 * @returns {{result: boolean, value: *}}
 *
 */
export const isOptional = (propValue, propName, el) => {
	const isPropInProps = isDefined(propValue);

	if (!isPropInProps) {
		logger.info('The prop "' + propName + '" is optional and wasn‘t found on: ', el);
	}

	return {
		result: true,
		value: propValue
	};
};
