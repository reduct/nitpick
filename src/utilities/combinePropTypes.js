import {isError} from './isError';

/**
 * Combines several propTypes. The first one that returns an error will
 * end the execution chain.
 *
 * @param ...propTypes {...Function} The propTypes that will be combined
 * @returns {Function}
 *
 */
export const combinePropTypes = (...propTypes) => (props, propName) => {
	for (let i = 0, len = propTypes.length - 1; i < len; i++) {
		const validationResult = propTypes[i](props, propName);
		if (isError(validationResult)) {
			return validationResult;
		}
	}

	return propTypes[propTypes.length - 1](props, propName);
};
