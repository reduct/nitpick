import {expect} from 'chai';
import {isRequired, isOptional} from './string.js';

describe('@reduct/nitpick: propTypes.string', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an object containing a result and value when called.', () => {
			expect(isRequired('test')).to.have.all.keys(['result', 'value']);
		});

		it('should return a positive result if the argument which was passed is a string.', () => {
			expect(isRequired('test').result).to.be.true;
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(isOptional).to.be.defined;
		});

		it('should return an object containing a result and value when called.', () => {
			expect(isOptional('test')).to.have.all.keys(['result', 'value']);
		});

		it('should return a positive result if the argument which was passed is a string.', () => {
			expect(isOptional('test').result).to.be.true;
		});
	});
});
