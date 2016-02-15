import {expect} from 'chai';
import sinon from 'sinon';
import shape from './shape.js';

describe('@reduct/nitpick: propTypes.shape', () => {
	const propTypes = {
			positive: sinon.stub().returns(42),
			negative: sinon.stub().returns(new Error('Does not compute!'))
	};

	describe('isRequired', () => {
		it('should be defined', () => {
			expect(shape(propTypes).isRequired).to.be.defined;
		});

		it('should return an error if no value was passed.', () => {
			expect(shape(propTypes).isRequired({}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return an error if no valid Object was passed.', () => {
			expect(shape(propTypes).isRequired({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid empty Object and the shape is empty.', () => {
			expect(shape({}).isRequired({
				myProp: {}
			}, 'myProp')).to.be.an('object');
		});

		it('should return an Error if the argument is a valid empty Object and the shape is not empty.', () => {
			expect(shape(propTypes).isRequired({
				myProp: {}
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if all of its members validate.', () => {
			expect(shape({
				a: propTypes.positive,
				b: propTypes.positive,
				c: propTypes.positive
			}).isRequired({
				myProp: {
					a: 'a',
					b: 'b',
					c: 'c'
				}
			}, 'myProp')).to.be.an('object');
		});

		it('should return an error if at least one of its members does not validate.', () => {
			expect(shape({
				a: propTypes.positive,
				b: propTypes.negative,
				c: propTypes.positive
			}).isRequired({
				myProp: {
					a: 'a',
					b: 'b',
					c: 'c'
				}
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should convert and return an Object if the passed argument is a String but contains a JSON Object.', () => {
			expect(shape({
				a: propTypes.positive,
				b: propTypes.positive,
				c: propTypes.positive
			}).isRequired({
				myProp: '{"a":"a", "b":"b", "c":"c"}'
			}, 'myProp')).to.deep.equal({
				a: 'a',
				b: 'b',
				c: 'c'
			});
		});
	});

	describe('isOptional', () => {
		it('should be defined', () => {
			expect(shape(propTypes).isOptional).to.be.defined;
		});

		it('should return an error if no valid Object was passed.', () => {
			expect(shape(propTypes).isOptional({
				myProp: 'foo'
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if it is a valid empty Object and the shape is empty.', () => {
			expect(shape({}).isOptional({
				myProp: {}
			}, 'myProp')).to.be.an('object');
		});

		it('should return an Error if the argument is a valid empty Object and the shape is not empty.', () => {
			expect(shape(propTypes).isOptional({
				myProp: {}
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should return the passed argument if all of its members validate.', () => {
			expect(shape({
				a: propTypes.positive,
				b: propTypes.positive,
				c: propTypes.positive
			}).isOptional({
				myProp: {
					a: 'a',
					b: 'b',
					c: 'c'
				}
			}, 'myProp')).to.be.an('object');
		});

		it('should return an error if at least one of its members does not validate.', () => {
			expect(shape({
				a: propTypes.positive,
				b: propTypes.negative,
				c: propTypes.positive
			}).isOptional({
				myProp: {
					a: 'a',
					b: 'b',
					c: 'c'
				}
			}, 'myProp')).to.be.an.instanceof(Error);
		});

		it('should convert and return an Object if the passed argument is a String but contains a JSON Object.', () => {
			expect(shape({
				a: propTypes.positive,
				b: propTypes.positive,
				c: propTypes.positive
			}).isOptional({
				myProp: '{"a":"a", "b":"b", "c":"c"}'
			}, 'myProp')).to.deep.equal({
				a: 'a',
				b: 'b',
				c: 'c'
			});
		});
	});
});
