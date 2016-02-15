import {expect} from 'chai';
import {isRequired, isOptional} from './array.js';

describe('@reduct/nitpick: propTypes.array', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an error if no value was passed.', () => {
			expect(isRequired({}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return an error if no valid Array was passed.', () => {
			expect(isRequired({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid Array.', () => {
			expect(isRequired({
				myProp: []
			}, 'myProp')).to.be.an('array');
		});

		it('should convert and return an array if the passed argument is a String but contains a JSON Array.', () => {
			expect(isRequired({
				myProp: '[23, 42, 1138]'
			}, 'myProp')).to.deep.equal([23, 42, 1138]);
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(isOptional).to.be.defined;
		});

		it('should return "undefined" if no value was passed.', () => {
			expect(isOptional({}, 'myProp')).to.equal(undefined);
		});

		it('should return an error if no valid Array was passed.', () => {
			expect(isOptional({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid Array.', () => {
			expect(isOptional({
				myProp: []
			}, 'myProp')).to.be.an('array');
		});

		it('should convert and return an array if the passed argument is a String but contains a JSON Array.', () => {
			expect(isOptional({
				myProp: '[23, 42, 1138]'
			}, 'myProp')).to.deep.equal([23, 42, 1138]);
		});
	});
});
