import {expect} from 'chai';
import sinon from 'sinon';
import arrayOf from './arrayOf.js';

describe('@reduct/nitpick: propTypes.arrayOf', () => {
	const propTypes = {
			positive: sinon.stub().returns(42),
			negative: sinon.stub().returns(new Error('Does not compute!')),
			conditional: sinon.stub().returns(23).withArgs(42).returns(new Error('This is not the answer.'))
	};

	describe('isRequired', () => {
		it('should be defined', () => {
			expect(arrayOf(propTypes.positive).isRequired).to.be.defined;
			expect(arrayOf(propTypes.negative).isRequired).to.be.defined;
		});

		it('should return an error if no value was passed.', () => {
			expect(arrayOf(propTypes.positive).isRequired({}, 'myProp')).to.be.an.instanceof(Error);
			expect(arrayOf(propTypes.negative).isRequired({}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return an error if no valid Array was passed.', () => {
			expect(arrayOf(propTypes.positive).isRequired({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
			expect(arrayOf(propTypes.negative).isRequired({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid empty Array.', () => {
			expect(arrayOf(propTypes.positive).isRequired({
				myProp: []
			}, 'myProp')).to.be.an('array');
			expect(arrayOf(propTypes.negative).isRequired({
				myProp: []
			}, 'myProp')).to.be.an('array');
		});

		it('should return the passed argument if all of its items validate.', () => {
			expect(arrayOf(propTypes.positive).isRequired({
				myProp: [1, 2, 3, 4, 5]
			}, 'myProp')).to.be.an('array');
		});

		it('should return an error if at least one of its items does not validate.', () => {
			expect(arrayOf(propTypes.conditional).isRequired({
				myProp: [1, 2, 42, 4, 5]
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should convert and return an array if the passed argument is a String but contains a JSON Array.', () => {
			expect(arrayOf(propTypes.positive).isRequired({
				myProp: '[23, 42, 1138]'
			}, 'myProp')).to.deep.equal([23, 42, 1138]);
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(arrayOf(propTypes.positive).isOptional).to.be.defined;
			expect(arrayOf(propTypes.negative).isOptional).to.be.defined;
		});

		it('should return "undefined" if no value was passed.', () => {
			expect(arrayOf(propTypes.positive).isOptional({}, 'myProp')).to.equal(undefined);
			expect(arrayOf(propTypes.negative).isOptional({}, 'myProp')).to.equal(undefined);
		});

		it('should return an error if no valid Array was passed.', () => {
			expect(arrayOf(propTypes.positive).isOptional({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
			expect(arrayOf(propTypes.negative).isOptional({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid empty Array.', () => {
			expect(arrayOf(propTypes.positive).isOptional({
				myProp: []
			}, 'myProp')).to.be.an('array');
			expect(arrayOf(propTypes.negative).isOptional({
				myProp: []
			}, 'myProp')).to.be.an('array');
		});

		it('should return the passed argument if all of its items validate.', () => {
			expect(arrayOf(propTypes.positive).isOptional({
				myProp: [1, 2, 3, 4, 5]
			}, 'myProp')).to.be.an('array');
		});

		it('should return an error if at least one of its items does not validate.', () => {
			expect(arrayOf(propTypes.conditional).isOptional({
				myProp: [1, 2, 42, 4, 5]
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should convert and return an array if the passed argument is a String but contains a JSON Array.', () => {
			expect(arrayOf(propTypes.positive).isOptional({
				myProp: '[23, 42, 1138]'
			}, 'myProp')).to.deep.equal([23, 42, 1138]);
		});
	});
});
