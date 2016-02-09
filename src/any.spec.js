import {expect} from 'chai';
import {isRequired, isOptional} from './any.js';

describe('@reduct/nitpick: propTypes.any', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an error if no value was passed.', () => {
			expect(isRequired()).to.be.an.instanceof(Error);
		});

		it('should return the value if one was passed.', () => {
			expect(isRequired('Prop')).to.equal('Prop');
		});

		it('should return the value and no Error even if the argument passed argument is "false".', () => {
			expect(isRequired(false)).to.equal(false);
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(isOptional).to.be.defined;
		});

		it('should return "undefined" if no value was passed.', () => {
			expect(isOptional()).to.equal(undefined);
		});

		it('should return "undefined" if "null" passed to have a consistent return value.', () => {
			expect(isOptional(null)).to.equal(undefined);
		});

		it('should return the value if one was passed.', () => {
			expect(isOptional('test')).to.equal('test');
		});
	});
});
