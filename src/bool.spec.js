import {expect} from 'chai';
import {isRequired, isOptional} from './bool.js';

describe('@reduct/nitpick: propTypes.bool', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an error if no value was passed.', () => {
			expect(isRequired({}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return an error if no valid Boolean was passed.', () => {
			expect(isRequired({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed value when called with a valid truthy Boolean.', () => {
			expect(isRequired({
				myProp: true
			}, 'myProp')).to.equal(true);
		});

		it('should return the passed value when called with a valid falsy Boolean.', () => {
			expect(isRequired({
				myProp: false
			}, 'myProp')).to.equal(false);
		});

		it('should return convert the value if called with a string which consists of "true".', () => {
			expect(isRequired({
				myProp: 'true'
			}, 'myProp')).to.equal(true);
		});

		it('should return convert the value if called with a string which consists of "false".', () => {
			expect(isRequired({
				myProp: 'false'
			}, 'myProp')).to.equal(false);
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(isOptional).to.be.defined;
		});

		it('should return "undefined" if no value was passed.', () => {
			expect(isOptional({}, 'myProp')).to.equal(undefined);
		});

		it('should return an error if a value was passed but it is not a valid Boolean.', () => {
			expect(isOptional({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed value when called with a valid truthy Boolean.', () => {
			expect(isOptional({
				myProp: true
			}, 'myProp')).to.equal(true);
		});

		it('should return the passed value when called with a valid falsy Boolean.', () => {
			expect(isOptional({
				myProp: false
			}, 'myProp')).to.equal(false);
		});

		it('should return convert the value if called with a string which consists of "true".', () => {
			expect(isOptional({
				myProp: 'true'
			}, 'myProp')).to.equal(true);
		});

		it('should return convert the value if called with a string which consists of "false".', () => {
			expect(isOptional({
				myProp: 'false'
			}, 'myProp')).to.equal(false);
		});
	});
});
