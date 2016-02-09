/**
 * Checks if the given argument is a boolean or a string containing a boolean.
 *
 * @param bol {*} The argument which will be validated.
 * @returns {boolean}
 *
 */
export function isBoolean(bol) {
	return typeof bol === 'boolean' || bol === 'true' || bol === 'false';
}
