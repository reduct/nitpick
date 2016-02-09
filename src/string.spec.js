import {expect} from 'chai';
import {isRequired, isOptional} from './string.js';

describe('@reduct/nitpick: propTypes.string', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an error if no value was passed.', () => {
			expect(isRequired()).to.be.an.instanceof(Error);
		});

		it('should return an error if no valid Object was passed.', () => {
			expect(isRequired(2)).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid Object.', () => {
			expect(isRequired('test')).to.equal('test');
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(isOptional).to.be.defined;
		});

		it('should return "undefined" if no value was passed.', () => {
			expect(isOptional()).to.equal(undefined);
		});

		it('should return an error if no valid Object was passed.', () => {
			expect(isOptional(2)).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid Object.', () => {
			expect(isOptional('test')).to.equal('test');
		});
	});
});
