import React from 'react';
import PropTypes from 'prop-types';
import DynamicNumber from './dynamicNumber';

class DynamicNumberComponent extends React.Component {

  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.number,
      (props, propName) => {
        if(props[propName] !== ''){
          return new Error('value must be a number or empty string');
        }
      }
    ]),
    integer: PropTypes.number,
    fraction: PropTypes.number,
    positive: PropTypes.bool,
    negative: PropTypes.bool,
    separator: (props, propName) => {
      if(props[propName] !== undefined && props[propName] !== ',' && props[propName] !== '.') {
        return new Error('separator have to be comma or dot char');
      }
    },
    thousand: (props, propName) => {
      if(props[propName] !== undefined && props[propName] !== true && props[propName] !== false && props[propName] !== ' ') {
        return new Error('thousand have to be bool value or space character');
      }
    },
    placeholder: PropTypes.string,
    // Pass this callback in props if you wish to konow when an illegal character is inputed.
    // For instance, you may want to higlight input's background.
    onBadInput: PropTypes.func,
  }

  constructor(props) {
    super(props);

    this.dynamicNumber = new DynamicNumber();
    this.dynamicNumber.separator = this.props.separator;
    this.dynamicNumber.integer = this.props.integer;
    this.dynamicNumber.fraction = this.props.fraction;
    this.dynamicNumber.positive = this.props.positive;
    this.dynamicNumber.negative = this.props.negative;
    this.dynamicNumber.thousand = this.props.thousand;

    this.calculator = this.dynamicNumber.clone();
    this.calculator.calculate(this.calculator.calculateViewFromModel(props.value), props.value, "0");

    this.state = {
      modelValue: this.calculator.modelValue,
      viewValue: this.calculator.viewValue
    };

    this.onChange= this.onChange.bind(this);
    this.focus= this.focus.bind(this);
  }

  focus() {
    if (this.input && this.input.focus) {
      this.input.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value === ''){
      this.setState({
        modelValue: '',
        viewValue: ''
      });
    } else if(nextProps.value !== undefined){
      this.calculator.calculate(this.calculator.calculateViewFromModel(nextProps.value), nextProps.value, "0");

      this.setState({
        modelValue: this.calculator.modelValue,
        viewValue: this.calculator.viewValue
      });
    }
  }

  // from http://stackoverflow.com/a/2897229/4138339
  getCaretPosition (oField) {
    var iCaretPos = 0;
    if (document.selection) {
      oField.focus ();
      var oSel = document.selection.createRange ();
      oSel.moveStart ('character', -oField.value.length);
      iCaretPos = oSel.text.length;
    }
    else if (oField.selectionStart || Number(oField.selectionStart) === 0)
      iCaretPos = oField.selectionDirection === 'backward' ? oField.selectionStart : oField.selectionEnd;
    return (iCaretPos);
  }

  fireBadInput () {
    const {onBadInput} = this.props;
    if (typeof onBadInput === 'function') {
      onBadInput();
    }
  }

  onChange(evt) {
    var target = evt.target;
    const {onChange} = this.props;

    const isValid = this.dynamicNumber.calculate(evt.target.value, this.state.modelValue, this.state.viewValue, this.getCaretPosition(target));
    if (!isValid) {
      this.fireBadInput();
    }

    var modelValue = this.dynamicNumber.modelValue;
    var viewValue = this.dynamicNumber.viewValue;

    if(typeof onChange === 'function') {
      onChange(evt, modelValue, viewValue);
    }

    this.setState({
      modelValue: modelValue,
      viewValue: viewValue
    }, () => {
      //after value change we set cursor position
      if(target.selectionStart !== undefined && target.selectionStart !== null) {
        target.selectionStart = target.selectionEnd = this.dynamicNumber.cursorPosition;
      }
    });
  }

  render() {
    var { separator, integer, fraction, positive, negative, thousand, onBadInput, ...other } = this.props;
    return <input type="text"
                  ref={(input) => { this.input = input; }}
                  placeholder={this.props.placeholder}
                  className={this.props.className}
                  {...other}
                  value={this.state.viewValue}
                  onChange={this.onChange} />
  }
}

export default DynamicNumberComponent;

