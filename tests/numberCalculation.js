
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
      it('should modelValue equal 1234567', ()=>{
        expect(dynamicNumber.modelValue).to.be.equal(1234567);
      });
      it('should viewValue equal \'1234567\'', ()=>{
        expect(dynamicNumber.viewValue).to.be.equal('1234567');
      });
    });
    describe('value=\'-1234567\'', ()=>{
      var value = '-1234567';
      before(()=>{
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal -1234567', ()=>{
        expect(dynamicNumber.modelValue).to.be.equal(-1234567);
      });
      it('should viewValue equal \'-1234567\'', ()=>{
        expect(dynamicNumber.viewValue).to.be.equal('-1234567');
      });
    });
    describe('value=\'123,4567\'', ()=>{
      var value = '123,4567';
      before(()=>{
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 0', ()=>{
        expect(dynamicNumber.modelValue).to.be.equal(0);
      });
      it('should viewValue equal \'0\'', ()=>{
        expect(dynamicNumber.viewValue).to.be.equal('0');
      });
    });
    describe('value=\'123.4567\'', ()=>{
      var value = '123.4567';
      before(()=>{
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 123.4567', ()=>{
        expect(dynamicNumber.modelValue).to.be.equal(123.4567);
      });
      it('should viewValue equal \'123.4567\'', ()=>{
        expect(dynamicNumber.viewValue).to.be.equal('123.4567');
      });
    });
    describe('value=\'.\'', ()=>{
      var value = '.';
      before(()=>{
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 0', ()=>{
        expect(dynamicNumber.modelValue).to.be.equal(0);
      });
      it('should viewValue equal \'0.\'', ()=>{
        expect(dynamicNumber.viewValue).to.be.equal('0.');
      });
    });
    describe('value=\'-\'', ()=>{
      var value = '-';
      before(()=>{
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 0', ()=>{
        expect(dynamicNumber.modelValue).to.be.equal(0);
      });
      it('should viewValue equal \'-\'', ()=>{
        expect(dynamicNumber.viewValue).to.be.equal('-');
      });
    });
    describe('value=\'-.\'', ()=>{
      var value = '-.';
      before(()=>{
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 0', ()=>{
        expect(dynamicNumber.modelValue).to.be.equal(0);
      });
      it('should viewValue equal \'-0.\'', ()=>{
        expect(dynamicNumber.viewValue).to.be.equal('-0.');
      });
    });
    describe('value=\'12345678901234567\'', ()=>{
      var value = '12345678901234567';
      before(()=>{
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 0', ()=>{
        expect(dynamicNumber.modelValue).to.be.equal(0);
      });
      it('should viewValue equal \'0\'', ()=>{
        expect(dynamicNumber.viewValue).to.be.equal('0');
      });
    });
    describe('value=\'1.23456789012345678\'', ()=>{
      var value = '1.23456789012345678';
      before(()=>{
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 0', ()=>{
        expect(dynamicNumber.modelValue).to.be.equal(0);
      });
      it('should viewValue equal \'0\'', ()=>{
        expect(dynamicNumber.viewValue).to.be.equal('0');
      });
    });
  });
  describe('Params: integer=10 fraction=10 separator=\',\'', ()=> {
    var dynamicNumber;
    before(()=> {
      dynamicNumber = new DynamicNumber();
      dynamicNumber.integer = 10;
      dynamicNumber.fraction = 10;
      dynamicNumber.separator = ',';
    });
    describe('value=\'123,4567\'', ()=> {
      var value = '123,4567';
      before(()=> {
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 123.4567', ()=> {
        expect(dynamicNumber.modelValue).to.be.equal(123.4567);
      });
      it('should viewValue equal \'123,4567\'', ()=> {
        expect(dynamicNumber.viewValue).to.be.equal('123,4567');
      });
    });
    describe('value=\'123.4567\'', ()=> {
      var value = '123.4567';
      before(()=> {
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 0', ()=> {
        expect(dynamicNumber.modelValue).to.be.equal(0);
      });
      it('should viewValue equal \'0\'', ()=> {
        expect(dynamicNumber.viewValue).to.be.equal('0');
      });
    });
  });
  describe('Params: integer=10 fraction=10 separator=\',\' positive=true negative=false', ()=> {
    var dynamicNumber;
    before(()=> {
      dynamicNumber = new DynamicNumber();
      dynamicNumber.integer = 10;
      dynamicNumber.fraction = 10;
      dynamicNumber.separator = ',';
      dynamicNumber.positive = true;
      dynamicNumber.negative = false;
    });
    describe('value=\'123,4567\'', ()=> {
      var value = '123,4567';
      before(()=> {
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 123.4567', ()=> {
        expect(dynamicNumber.modelValue).to.be.equal(123.4567);
      });
      it('should viewValue equal \'123,4567\'', ()=> {
        expect(dynamicNumber.viewValue).to.be.equal('123,4567');
      });
    });
    describe('value=\'-123,4567\'', ()=> {
      var value = '-123,4567';
      before(()=> {
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 0', ()=> {
        expect(dynamicNumber.modelValue).to.be.equal(0);
      });
      it('should viewValue equal \'0\'', ()=> {
        expect(dynamicNumber.viewValue).to.be.equal('0');
      });
    });
  });
  describe('Params: integer=10 fraction=10 separator=\',\' positive=false negative=true', ()=> {
    var dynamicNumber;
    before(()=> {
      dynamicNumber = new DynamicNumber();
      dynamicNumber.integer = 10;
      dynamicNumber.fraction = 10;
      dynamicNumber.separator = ',';
      dynamicNumber.positive = false;
      dynamicNumber.negative = true;
    });
    describe('value=\'-123,4567\'', ()=> {
      var value = '-123,4567';
      before(()=> {
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal -123.4567', ()=> {
        expect(dynamicNumber.modelValue).to.be.equal(-123.4567);
      });
      it('should viewValue equal \'-123,4567\'', ()=> {
        expect(dynamicNumber.viewValue).to.be.equal('-123,4567');
      });
    });
    describe('value=\'123,4567\'', ()=> {
      var value = '123,4567';
      before(()=> {
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 0', ()=> {
        expect(dynamicNumber.modelValue).to.be.equal(0);
      });
      it('should viewValue equal \'0\'', ()=> {
        expect(dynamicNumber.viewValue).to.be.equal('0');
      });
    });
  });
  describe('Params: integer=10 fraction=3 separator=\',\' positive=true negative=true thousand=true', ()=> {
    var dynamicNumber;
    before(()=> {
      dynamicNumber = new DynamicNumber();
      dynamicNumber.integer = 10;
      dynamicNumber.fraction = 3;
      dynamicNumber.separator = ',';
      dynamicNumber.positive = true;
      dynamicNumber.negative = true;
      dynamicNumber.thousand = true;
    });
    describe('value=\'-123456789,123\'', ()=> {
      var value = '-123456789,123';
      before(()=> {
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal -123456789.123', ()=> {
        expect(dynamicNumber.modelValue).to.be.equal(-123456789.123);
      });
      it('should viewValue equal \'-123.456.789,123\'', ()=> {
        expect(dynamicNumber.viewValue).to.be.equal('-123.456.789,123');
      });
    });
    describe('value=\'123456789,123\'', ()=> {
      var value = '123456789,123';
      before(()=> {
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 123456789.123', ()=> {
        expect(dynamicNumber.modelValue).to.be.equal(123456789.123);
      });
      it('should viewValue equal \'123.456.789,123\'', ()=> {
        expect(dynamicNumber.viewValue).to.be.equal('123.456.789,123');
      });
    });
  });
  describe('Params: integer=10 fraction=3 separator=\'.\' positive=true negative=true thousand=" "', ()=> {
    var dynamicNumber;
    before(()=> {
      dynamicNumber = new DynamicNumber();
      dynamicNumber.integer = 10;
      dynamicNumber.fraction = 3;
      dynamicNumber.separator = '.';
      dynamicNumber.positive = true;
      dynamicNumber.negative = true;
      dynamicNumber.thousand = ' ';
    });
    describe('value=\'-123456789.123\'', ()=> {
      var value = '-123456789.123';
      before(()=> {
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal -123456789.123', ()=> {
        expect(dynamicNumber.modelValue).to.be.equal(-123456789.123);
      });
      it('should viewValue equal \'-123 456 789.123\'', ()=> {
        expect(dynamicNumber.viewValue).to.be.equal('-123 456 789.123');
      });
    });
    describe('value=\'123456789.123\'', ()=> {
      var value = '123456789.123';
      before(()=> {
        dynamicNumber.calculate(value);
      });
      it('should modelValue equal 123456789.123', ()=> {
        expect(dynamicNumber.modelValue).to.be.equal(123456789.123);
      });
      it('should viewValue equal \'123 456 789.123\'', ()=> {
        expect(dynamicNumber.viewValue).to.be.equal('123 456 789.123');
      });
    });
  });
});
