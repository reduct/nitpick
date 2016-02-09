import {expect} from 'chai';
import {isRequired, isOptional} from './bool.js';

describe('@reduct/nitpick: propTypes.bool', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an object containing a result and value when called.', () => {
			expect(isRequired(true)).to.have.all.keys(['result', 'value']);
		});

		it('should return a positive result if a valid Boolean was passed.', () => {
			expect(isRequired(true).result).to.be.true;
		});

		it('should return a positive result even if the argument passed argument is "false".', () => {
			expect(isRequired(false).result).to.be.true;
		});

		it('should convert string typed booleans to a valid Boolean when passed.', () => {
			expect(isRequired('true').result).to.be.true;
		});

		it('should convert string typed booleans to a valid Boolean when passed even if it is passed as "false".', () => {
			expect(isRequired('false').result).to.be.true;
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(isOptional).to.be.defined;
		});

		it('should return an object containing a result and value when called.', () => {
			expect(isOptional()).to.have.all.keys(['result', 'value']);
		});
	});
});
