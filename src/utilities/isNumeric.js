/**
 * Checks if the given argument is a Number.
 *
 * @param num {*} The argument which will be validated.
 * @returns {boolean}
 *
 */
export function isNumeric(num) {
	return !isNaN(num) && num !== null && num !== true && num !== false;
}
