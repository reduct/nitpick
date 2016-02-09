import {expect} from 'chai';
import {isRequired, isOptional} from './number.js';

describe('@reduct/nitpick: propTypes.number', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an object containing a result and value when called.', () => {
			expect(isRequired(2)).to.have.all.keys(['result', 'value']);
		});

		it('should return a positive result if a valid Number was passed.', () => {
			expect(isRequired(2).result).to.be.true;
		});

		it('should return a positive result if the argument which was passed is a String but contains a Number.', () => {
			expect(isRequired('0').result).to.be.true;
		});

		it('should return the passed argument as the returning value.', () => {
			expect(isRequired(0).value).to.equal(0);
		});

		it('should return a Number as the returning value if the passed argument is a String but Contains a Number.', () => {
			expect(isRequired('0').value).to.equal(0);
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(isOptional).to.be.defined;
		});

		it('should return an object containing a result and value when called.', () => {
			expect(isOptional()).to.have.all.keys(['result', 'value']);
		});

		it('should return a positive result with no arguments passed.', () => {
			expect(isOptional().result).to.be.true;
		});

	    it('should return a positive result if the argument which was passed is a Number.', () => {
			expect(isOptional(0).result).to.be.true;
		});

	    it('should return a positive result if the argument which was passed is a String but contains a Number.', () => {
			expect(isOptional('0').result).to.be.true;
		});

	    it('should return the passed argument as the returning value.', () => {
			expect(isOptional(0).value).to.equal(0);
		});

	    it('should return a Number as the returning value if the passed argument is a String but Contains a Number.', () => {
			expect(isOptional('0').value).to.equal(0);
		});
	});
});
