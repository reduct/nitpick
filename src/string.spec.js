import {expect} from 'chai';
import {isRequired, isOptional} from './string.js';

describe('@reduct/nitpick: propTypes.string', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an error if no value was passed.', () => {
			expect(isRequired({}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return an error if no valid Object was passed.', () => {
			expect(isRequired({
				myProp: 2
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid Object.', () => {
			expect(isRequired({
				myProp: 'foo'
			}, 'myProp')).to.equal('foo');
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(isOptional).to.be.defined;
		});

		it('should return "undefined" if no value was passed.', () => {
			expect(isOptional({}, 'myProp')).to.equal(undefined);
		});

		it('should return an error if no valid Object was passed.', () => {
			expect(isOptional({
				myProp: 2
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid Object.', () => {
			expect(isOptional({
				myProp: 'foo'
			}, 'myProp')).to.equal('foo');
		});
	});
});
