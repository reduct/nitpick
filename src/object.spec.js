import {expect} from 'chai';
import {isRequired, isOptional} from './object.js';

describe('@reduct/nitpick: propTypes.object', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an object containing a result and value when called.', () => {
			expect(isRequired({})).to.have.all.keys(['result', 'value']);
		});

		it('should return a positive result if a valid Object was passed.', () => {
			expect(isRequired({}).result).to.be.true;
		});

		it('should return a positive result if the argument which was passed is a String but contains a JSON Object.', () => {
			expect(isRequired('{ "key": "value" }').result).to.be.true;
		});

		it('should return the passed argument as the returning value.', () => {
			expect(isRequired({}).value).to.be.an('object');
		});

		it('should return a valid JSON Object as the returning value if the passed argument is a String but Contains a JSON Object.', () => {
			expect(isRequired('{ "key": "value" }').value).to.deep.equal({
				key: "value"
			});
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(isOptional).to.be.defined;
		});

		it('should return an object containing a result and value when called.', () => {
			expect(isOptional({})).to.have.all.keys(['result', 'value']);
		});

		it('should return a positive result with no arguments passed.', () => {
			expect(isOptional().result).to.be.true;
		});

		it('should return a positive result if the argument which was passed is a String and contains a JSON Object.', () => {
			expect(isOptional('{ "key": "value" }').result).to.be.true;
		});

		it('should return a positive result if the argument which was passed is an Object.', () => {
			expect(isOptional({}).result).to.be.true;
		});

		it('should return the passed argument as the returning value.', () => {
			const value = {};

			expect(isOptional(value).value).to.equal(value);
		});

		it('should return a valid JSON Object as the returning value if the passed argument is a String but Contains a JSON Object.', () => {
			expect(isOptional('{ "key": "value" }').value).to.deep.equal({
				key: "value"
			});
		});
	});
});
