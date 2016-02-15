/**
 * Checks if the given argument is an array.
 *
 * @param arr {*} The argument which will be validated.
 * @returns {boolean}
 *
 */
export function isArray(arr) {
	return arr !== null && typeof arr === 'object' && Array.isArray(arr);
}
