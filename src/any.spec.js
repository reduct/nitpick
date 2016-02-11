import {expect} from 'chai';
import {isRequired, isOptional} from './any.js';

describe('@reduct/nitpick: propTypes.any', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an error if no value was passed.', () => {
			expect(isRequired({}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the value if one was passed.', () => {
			expect(isRequired({
				myProp: 'foo'
			}, 'myProp')).to.equal('foo');
		});

		it('should return the value and no Error even if the argument passed argument is "false".', () => {
			expect(isRequired({
				myProp: false
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

		it('should return "undefined" if "null" was passed to have a consistent return value.', () => {
			expect(isOptional({
				myProp: null
			}, 'myProp')).to.equal(undefined);
		});

		it('should return the value if one was passed.', () => {
			expect(isOptional({
				myProp: 'foo'
			}, 'myProp')).to.equal('foo');
		});
	});
});
