import {expect} from 'chai';
import {isRequired, isOptional} from './any.js';

describe('@reduct/nitpick: propTypes.any', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an object containing a result and value when called.', () => {
			expect(isRequired('Prop')).to.have.all.keys(['result', 'value']);
		});

		it('should return a positive result if an argument was passed.', () => {
			expect(isRequired('Prop').result).to.be.true;
		});

		it('should return a positive result even if the argument passed argument is "false".', () => {
			expect(isRequired(false).result).to.be.true;
		});

		it('should return the passed argument as the returning value.', () => {
			expect(isRequired('Prop').value).to.equal('Prop');
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(isOptional).to.be.defined;
		});

		it('should return an object containing a result and value when called.', () => {
			expect(isOptional()).to.have.all.keys(['result', 'value']);
		});

		it('should return a positive result if no arguments where passed.', () => {
			expect(isOptional().result).to.be.true;
		});

		it('should return the passed argument as the returning value.', () => {
			expect(isOptional('Prop').value).to.equal('Prop');
		});
	});
});
