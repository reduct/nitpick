import {expect} from 'chai';
import {isRequired, isOptional} from './object.js';

describe('@reduct/nitpick: propTypes.object', () => {
	describe('isRequired', () => {
		it('should be defined', () => {
			expect(isRequired).to.be.defined;
		});

		it('should return an error if no value was passed.', () => {
			expect(isRequired({}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return an error if no valid Object was passed.', () => {
			expect(isRequired({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid Object.', () => {
			expect(isRequired({
				myProp: {}
			}, 'myProp')).to.be.an('object');
		});

		it('should convert and return a object if the passed argument is a String but contains a JSON Object.', () => {
			expect(isRequired({
				myProp: '{ "key": "value" }'
			}, 'myProp')).to.deep.equal({
				key: "value"
			});
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
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid Object.', () => {
			expect(isOptional({
				myProp: {}
			}, 'myProp')).to.be.an('object');
		});

		it('should convert and return a object if the passed argument is a String but contains a JSON Object.', () => {
			expect(isOptional({
				myProp: '{ "key": "value" }'
			}, 'myProp')).to.deep.equal({
				key: "value"
			});
		});
	});
});
