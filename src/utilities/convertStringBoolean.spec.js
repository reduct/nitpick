import {expect} from 'chai';
import {convertStringBoolean} from './convertStringBoolean.js';

describe('@reduct/nitpick: utilities.convertStringBoolean', () => {
	it('should return a truthy boolean if it was called with a string consisting of "true".', () => {
		expect(convertStringBoolean('true')).to.equal(true);
	});

	it('should return a falsy boolean if it was called with a string consisting of "false".', () => {
		expect(convertStringBoolean('false')).to.equal(false);
	});

	it('should propagate the passed value as the return value if it is not a string consisting of "true" or "false".', () => {
		expect(convertStringBoolean('test')).to.equal('test');
	});
});
