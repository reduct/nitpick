import abstractValidator from './abstractValidator.js';
import * as arrayValidator from './array.js';
import {
	combinePropTypes,
	compose,
	isDefined,
	isError,
	isArray
} from './utilities/';
import * as any from './any.js';

/**
 * Applies propType validation to all elements of an array.
 *
 * @param propType The propType all array items will be validated with.
 * @param val {Array} The array which will be validated.
 * @returns {Error|*} Either an Error of the passed value if defined.
 */
const validator = propType => val => {
	// Try to convert the value to a JSON object.
	try {
		val = JSON.parse(val);
	} catch (e) {}

	if (!isError(val) && isDefined(val)) {
		for (let i = 0, len = val.length; i < len; i++) {
			const validationResult = propType({[i]: val[i]}, i);

			if (isError(validationResult)) {
					return validationResult;
			}
		}
	}

	return val;
};

//
// Expose `isRequired` and `isOptional` as soon as a propType is provided
//
export default propType => ({
	isRequired: combinePropTypes(
		//
		// Incoming values will be at first validated to be arrays
		//
		arrayValidator.isRequired,

		compose(
			abstractValidator,
			validator
		)(propType)
	),

	isOptional: combinePropTypes(
		//
		// Incoming values will be at first validated to be arrays
		//
		arrayValidator.isOptional,

		compose(
			abstractValidator,
			validator
		)(propType)
	)
});
