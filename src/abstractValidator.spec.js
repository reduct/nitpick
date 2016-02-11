import chai, {expect} from 'chai';
import {spy} from 'sinon';
import sinonChai from 'sinon-chai';
import abstractValidator from './abstractValidator.js';

chai.should();
chai.use(sinonChai);

describe('@reduct/nitpick: abstract validator', () => {
	it('should return a function when called', () => {
		expect(abstractValidator()).to.be.an('function');
	});

	it('should return a curry function which in favor of two arguments returns the first function which gets called with the requested prop value.', () => {
		const cb = spy();

		abstractValidator(cb)({
			myProp: 2
		}, 'myProp');

		cb.should.have.been.calledWith(2);
	});
});
