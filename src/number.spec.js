import {expect} from 'chai';
import {isRequired, isOptional} from './number.js';

describe('@reduct/nitpick: propTypes.number', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an error if no value was passed.', () => {
			expect(isRequired({}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return an error if no valid Number was passed.', () => {
			expect(isRequired({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed value when called with a valid Number.', () => {
			expect(isRequired({
				myProp: 2
			}, 'myProp')).to.equal(2);
		});

		it('should convert and return the passed value when called with a string which contains a Number.', () => {
			expect(isRequired({
				myProp: '2'
			}, 'myProp')).to.equal(2);
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(isOptional).to.be.defined;
		});

		it('should return "undefined" if no value was passed.', () => {
			expect(isOptional({}, 'myProp')).to.equal(undefined);
		});

		it('should return an error if a value was passed but it is not a valid Number.', () => {
			expect(isOptional({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed value when called with a valid Number.', () => {
			expect(isOptional({
				myProp: 2
			}, 'myProp')).to.equal(2);
		});

		it('should convert and return the passed value when called with a string which contains a Number.', () => {
			expect(isOptional({
				myProp: '2'
			}, 'myProp')).to.equal(2);
		});
	});
});
