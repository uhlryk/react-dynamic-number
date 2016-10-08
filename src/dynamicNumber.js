class DynamicNumber {

  constructor() {
    this._separator = '.';
    this._integer = 10;
    this._fraction = 10;
    this._positive = true;
    this._negative = true;
    this._regexp = this._buildRegexp();
    this._isThousand = false;
    this._thousand = null;
  }

  clone(){
    var other = new DynamicNumber
    other._separator = this._separator;
    other._integer = this._integer;
    other._fraction = this._fraction;
    other._positive = this._positive;
    other._negative = this._negative;
    other._regexp = this._regexp;
    other._isThousand = this._isThousand;
    other._thousand = this._thousand;
    other._cursor = this._cursor;

    return other
  }

  set separator(sep) {
    this._separator = sep === '.' || sep === ',' ? sep : this._separator;
    this._regexp = this._buildRegexp();
    this._calculateThousandSeparator();
  }

  set integer(part) {
    if(part >= 0){
      var _part = parseInt(part, 10);
      if(isNaN(_part) === false && isFinite(_part) && _part >= 0){
        this._integer = _part;
      }
    }
    this._regexp = this._buildRegexp();
  }

  set fraction(part) {
    if(part >= 0){
      var _part = parseInt(part, 10);
      if(isNaN(_part) === false && isFinite(_part) && _part >= 0){
        this._fraction = _part;
      }
    }
    this._regexp = this._buildRegexp();
  }

  set positive(isPositive) {
    if(isPositive === true || isPositive === false) {
      this._positive = isPositive;
    }
    this._regexp = this._buildRegexp();
  }

  set negative(isNegative) {
    if(isNegative === true || isNegative === false) {
      this._negative = isNegative;
    }
    this._regexp = this._buildRegexp();
  }

  set thousand(value) {
    this._isThousand = (value || value === ' ');
    if(value === ' ') {
      this._thousand = ' ';
    }
    this._calculateThousandSeparator();
  }

  calculateViewFromModel(modelValue = 0) {
    return this._createViewValueFromModel(modelValue);
  }

  calculate(rawViewValue = 0, oldModelValue = 0, oldViewValue = '0', cursorPosition = null) {
    this._rawViewValue = rawViewValue;
    this._oldModelValue = oldModelValue;
    this._oldViewValue = oldViewValue;
    this._newModelValue = 0;
    this._newViewValue = '';
    this._cursor = cursorPosition;

    var value = String(this._rawViewValue);
    value = this._removeThousandSeparator(value);
    value = this._removeLeadingZero(value);
    if(value === '' && String(this._rawViewValue).charAt(0)=== '0'){
      this._newModelValue = 0;
      this._newViewValue = '0';
      return;
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
      this._newModelValue = this._createModelValueFromView(value);
      this._newViewValue = this._createViewValueFromView(value);
      this._cursor = this._calculateNewCursorPosition();
      return;
    }
  }

  get modelValue() {
    return this._newModelValue;
  }

  get viewValue() {
    return this._newViewValue;
  }

  get cursorPosition() {
    return this._cursor;
  }
  /**
   * private function which calculate thousand separator.
  */
  _calculateThousandSeparator() {
    if(this._thousand !== ' ') {
      if(this._separator === '.') {
        this._thousand = ',';
      } else {
        this._thousand = '.';
      }
    }
  }

  /**
   * calculate new cursor position based on rawvalue and actual cursor position
     */
  _calculateNewCursorPosition() {
    var valuePartBeforeCursor = String(this._rawViewValue).slice(0,this._cursor);
    valuePartBeforeCursor = this._removeThousandSeparator(valuePartBeforeCursor);
    valuePartBeforeCursor = this._removeLeadingZero(valuePartBeforeCursor);

    var currentPosition = valuePartBeforeCursor.length;
    if(this._isThousand) {
      let countPosition = 0;
      let countDots = 0;
      let i;
      let len = this._newViewValue.length;
      for (i = 0; i < len; i++) {
        if (this._newViewValue[i] !== this._thousand) {
          countPosition++;
          if (countPosition >= currentPosition){
            break;
          }
        } else {
          countDots++;
        }
      }
      currentPosition += countDots;
    }
    return currentPosition;
  }

  _buildRegexp() {
    var negativeRegex = '-?';
    if(this._positive === false && this._negative === true) {
      negativeRegex = '-';
    } else if(this._positive === true && this._negative === false){
      negativeRegex = '';
    }

    var intRegex = '[0-9]{0,'+(this._integer)+'}';
    if(this._integer === 0){
      intRegex = '0';
    }
    var fractRegex = '(\\'+this._separator+'([0-9]){0,'+this._fraction+'})';
    if(this._fraction === 0) {
      fractRegex = '';
    }
    return new RegExp('^'+negativeRegex+intRegex+fractRegex+'?$');
  }

  _removeLeadingZero(value) {
    return value
      .replace(/^0+/g, "")//change 00000 to ''
      .replace(/^-0(\d+)/g, "-$1")//change -013212 to -0
      .replace(/^-([\.,])/, "-0$1")//change -. to -0.
      .replace(/^[\.,]/g, "0$&");//change . to 0.
  }

  _removeThousandSeparator(value) {
    if(this._isThousand) {
      return value.replace(new RegExp('\\' + this._thousand ,'g'), '');
    } else {
      return value;
    }
  }

  _createModelValueFromView(value) {
    if(this._separator === ',') {
      return parseFloat(value.replace(/\./g,"").replace(",","."));
    } else {
      return parseFloat(value.replace(/,/g,""));
    }
  }
  _createViewValueFromView(value){
    if(this._isThousand) {
      value = value.split(this._separator);
      value[0] = value[0].replace(/\B(?=(\d{3})+(?!\d))/g, this._thousand);
      return value.join(this._separator);
    } else {
      return value;
    }
  }

  _createViewValueFromModel(modelValue){
    var value = String(modelValue);
    if(this._isThousand) {
      value = value.split(".");
      value[0] = value[0].replace(/\B(?=(\d{3})+(?!\d))/g, this._thousand);
      return value.join(this._separator);
    } else {
      return value.replace(/\./g, this._separator);
    }
  }
}

export default DynamicNumber;
