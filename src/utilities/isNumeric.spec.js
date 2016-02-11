import {expect} from 'chai';
import {isNumeric} from './isNumeric.js';

describe('@reduct/nitpick: utilities.isNumeric', () => {
	it('should return a negative result if no value was passed.', () => {
		expect(isNumeric()).to.equal(false);
	});

	it('should return a negative result if "null" was passed.', () => {
		expect(isNumeric(null)).to.equal(false);
	});

	it('should return a negative result if a truthy boolean was passed.', () => {
		expect(isNumeric(true)).to.equal(false);
	});

	it('should return a negative result if a falsy boolean was passed.', () => {
		expect(isNumeric(false)).to.equal(false);
	});

	it('should return a negative result if the passed value is a string.', () => {
		expect(isNumeric('test')).to.equal(false);
	});

	it('should return a negative result if the passed value is an object.', () => {
		expect(isNumeric({})).to.equal(false);
	});

	it('should return a negative result if the passed value is a function.', () => {
		expect(isNumeric(() => null)).to.equal(false);
	});

	it('should return a positive result if the passed value is a number.', () => {
		expect(isNumeric(2)).to.equal(true);
	});
});
