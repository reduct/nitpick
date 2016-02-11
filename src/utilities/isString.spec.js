import chai, {expect} from 'chai';
import {isString} from './isString.js';

describe('@reduct/nitpick: utilities.isString', () => {
	it('should return a negative result if no value was passed.', () => {
		expect(isString()).to.equal(false);
	});

	it('should return a negative result if "null" was passed.', () => {
		expect(isString(null)).to.equal(false);
	});

	it('should return a negative result if a truthy boolean was passed.', () => {
		expect(isString(true)).to.equal(false);
	});

	it('should return a negative result if a falsy boolean was passed.', () => {
		expect(isString(false)).to.equal(false);
	});

	it('should return a negative result if the passed value is a function.', () => {
		expect(isString(() => {})).to.equal(false);
	});

	it('should return a negative result if the passed value is a number.', () => {
		expect(isString(2)).to.equal(false);
	});

	it('should return a negative result if the passed value is an object.', () => {
		expect(isString({})).to.equal(false);
	});

	it('should return a positive result if the passed value is a string.', () => {
		expect(isString('test')).to.equal(true);
	});
});
