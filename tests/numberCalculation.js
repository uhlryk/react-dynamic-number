
var chai = require("chai");
chai.use(require('chai-things'));
var expect = chai.expect;

import DynamicNumber from '../src/dynamicNumber';

describe('Check calculated model and view values from input', ()=>{
  describe('Params: integer=10 fraction=10 separator=\'.\'', ()=>{
    var dynamicNumber;
    //each time we start new dynamicNumber, we don't test changing params in existing object
    before(()=>{
      dynamicNumber = new DynamicNumber();
      dynamicNumber.integer = 10;
      dynamicNumber.fraction = 10;
      dynamicNumber.separator = '.';
    });
    describe('value=\'1234567\'', ()=>{
      var value = '1234567';
      before(()=>{
        dynamicNumber.calculate(value);
      });
      it('should model equal value 1234567', ()=>{
        expect(dynamicNumber.modelValue).to.be.equal(1234567);
      });
      it('should view equal value \'1234567\'', ()=>{
        expect(dynamicNumber.viewValue).to.be.equal('1234567');
      });
    });
  });
});
