/**
 * Converts a string containing a boolean to a real boolean if necessary.
 *
 * @param val
 * @returns {*}
 *
 */
export function convertStringBoolean(val) {
	if (val === 'false') {
		val = false;
	}

	if (val === 'true') {
		val = true;
	}

	return val;
}
