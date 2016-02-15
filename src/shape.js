import abstractValidator from './abstractValidator.js';
import * as objectValidator from './object.js';
import {
	combinePropTypes,
	compose,
	isDefined,
	isError,
	isArray
} from './utilities/';
import * as any from './any.js';

/**
 * Applies propType validation to members of an object.
 *
 * @param propTypes A hashmap of propTypes the according members of the value will be validated with.
 * @param val {Object} The object which will be validated.
 * @returns {Error|*} Either an Error of the passed value if defined.
 */
const validator = propTypes => val => {
	// Try to convert the value to a JSON object.
	try {
		val = JSON.parse(val);
	} catch (e) {}

	if (!isError(val) && isDefined(val)) {
		const keys = Object.keys(propTypes);
		for (let i = 0, len = keys.length; i < len; i++) {
			const validationResult = propTypes[keys[i]](val, keys[i]);

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
		// Incoming values will be at first validated to be objects
		//
		objectValidator.isRequired,

		compose(
			abstractValidator,
			validator
		)(propType)
	),

	isOptional: combinePropTypes(
		//
		// Incoming values will be at first validated to be objects
		//
		objectValidator.isOptional,

		compose(
			abstractValidator,
			validator
		)(propType)
	)
});
