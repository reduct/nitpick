import {expect} from 'chai';
import {isBoolean} from './isBoolean.js';

describe('@reduct/nitpick: utilities.isBoolean', () => {
	it('should return a positive result if a truthy boolean was passed.', () => {
		expect(isBoolean(true)).to.equal(true);
	});

	it('should return a positive result if a falsy boolean was passed.', () => {
		expect(isBoolean(false)).to.equal(true);
	});

	it('should return a negative result if the passed value is a string.', () => {
		expect(isBoolean('test')).to.equal(false);
	});

	it('should return a negative result if the passed value is a number.', () => {
		expect(isBoolean(2)).to.equal(false);
	});

	it('should return a negative result if the passed value is an object.', () => {
		expect(isBoolean({})).to.equal(false);
	});

	it('should return a negative result if the passed value is a function.', () => {
		expect(isBoolean(() => null)).to.equal(false);
	});
});
