import {expect} from 'chai';
import {isRequired, isOptional} from './object.js';

describe('@reduct/nitpick: propTypes.object', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an error if no value was passed.', () => {
			expect(isRequired()).to.be.an.instanceof(Error);
		});

		it('should return an error if no valid Object was passed.', () => {
			expect(isRequired('test')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid Object.', () => {
			expect(isRequired({})).to.be.an('object');
		});

		it('should convert and return a object if the passed argument is a String but contains a JSON Object.', () => {
			expect(isRequired('{ "key": "value" }')).to.deep.equal({
				key: "value"
			});
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
			expect(isOptional('test')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid Object.', () => {
			expect(isOptional({})).to.be.an('object');
		});

		it('should convert and return a object if the passed argument is a String but contains a JSON Object.', () => {
			expect(isOptional('{ "key": "value" }')).to.deep.equal({
				key: "value"
			});
		});
	});
});
