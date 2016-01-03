
class DynamicNumber {

  constructor() {
    this._separator = '.';
    this._integerPart = 10;
    this._fractionPart = 10;
    this._regexp = this._buildRegexp();
  }

  set separator(sep) {
    this._separator = sep === '.' || sep === ',' ? sep : this._separator;
    this._regexp = this._buildRegexp();

  }

  calculate(rawViewValue = 0, oldModelValue = 0, oldViewValue = 0) {
    this._rawViewValue = rawViewValue;
    this._oldModelValue = oldModelValue;
    this._oldViewValue = oldViewValue;
    this._newModelValue = 0;
    this._newViewValue = '';

    var value = String(this._rawViewValue);
    value = this._removeLeadingZero(value);

    if(value === '' && String(this._rawViewValue).charAt(0)=== '0'){
      this._newModelValue = 0;
      this._newViewValue = '0';
      return 0;
    }
    if(value === undefined || value === ''){
      this._newModelValue = 0;
      this._newViewValue = '';
      return;
    }
    if(value === '-'){
      this._newModelValue = 0;
      this._newViewValue = '-';
      return;
    }
    //test fails, therefore we use old values
    if(this._regexp.test(value) === false){
      this._newModelValue = this._oldModelValue;
      this._newViewValue = this._oldViewValue;
      return;
    }
     // view value success 'correct view format' test
    else {
      this._newModelValue = this._oldModelValue;
      this._newViewValue = this._createModelValue(value);
      return;
    }
  }

  get modelValue() {
    return this._newModelValue;
  }

  get viewValue() {
    return this._newViewValue;
  }

  _buildRegexp() {
    var negativeRegex = '-?';

    var intRegex = '[0-9]{0,'+(this._integerPart)+'}';
    if(this._integerPart === 0){
      intRegex = '0';
    }
    var fractRegex = '(\\'+this._separator+'([0-9]){0,'+this._fractionPart+'})';
    if(this._fractionPart === 0) {
      fractRegex = '';
    }
    return new RegExp('^'+negativeRegex+intRegex+fractRegex+'?$');
  }

  _removeLeadingZero(value) {
    return value.replace(/^0+/g, "").replace(/^-00+/g, "-0").replace(/-0+\[\.,]/, "-0$&").replace(/^[\.,]/g, "0$&");
  }

  _createModelValue(value) {
    if(this._separator === ',') {
      return value.replace(/\./g,"").replace(",",".");
    } else {
      return value.replace(/,/g,"");
    }
  }
}

export default DynamicNumber;
