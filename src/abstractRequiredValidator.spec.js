import chai, {expect} from 'chai';
import {spy} from 'sinon';
import sinonChai from 'sinon-chai';
import abstractRequiredValidator from './abstractRequiredValidator.js';

chai.should();
chai.use(sinonChai);

describe('@reduct/nitpick: abstract isRequired validator', () => {
	it('should return a function when called', () => {
		expect(abstractRequiredValidator()).to.be.an('function');
	});

	it('should return a curry abstractValidator function which should return an error if no prop value was passed.', () => {
		const result = abstractRequiredValidator()({}, 'myProp');

		expect(result).to.be.an.instanceof(Error);
	});

	it('should return a curry abstractValidator function which should return the prop value if it was passed.', () => {
		const result = abstractRequiredValidator()({
			myProp: 'foo'
		}, 'myProp');

		expect(result).to.equal('foo');
	});

	it('should call the optional argument function and return its return value when being called.', () => {
		const result = abstractRequiredValidator(val => 'mutatedReturnValue')({
			myProp: true
		}, 'myProp');

		expect(result).to.equal('mutatedReturnValue');
	});

	it('should return a curry abstractValidator function which in favor of two arguments returns the optional first functions return value.', () => {
		const cb = spy();

		abstractRequiredValidator(cb)({
			myProp: 2
		}, 'myProp');

		cb.should.have.been.calledWith(2);
	});
});
