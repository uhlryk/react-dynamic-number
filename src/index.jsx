import React from 'react';
import DynamicNumber from './dynamicNumber';

class DynamicNumberComponent extends React.Component {

  static propTypes = {
    value: React.PropTypes.number,
    integer: React.PropTypes.number,
    fraction: React.PropTypes.number,
    positive: React.PropTypes.bool,
    negative: React.PropTypes.bool,
    separator: (props, propName) => {
      if(props[propName] !== undefined && props[propName] !== ',' && props[propName] !== '.') {
        return new Error('separator have to be comma or dot char');
      }
    },
    thousand: (props, propName) => {
      if(props[propName] !== undefined && props[propName] !== true && props[propName] !== false && props[propName] !== ' ') {
        return new Error('thousand have to be bool value or space character');
      }
    }
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


    this.state = {
      modelValue: 0,
      viewValue: '0'
    }

    this.onChange= this.onChange.bind(this);
  }

  onChange(evt) {
    this.dynamicNumber.calculate(evt.target.value, this.state.modelValue, this.state.viewValue);

    var modelValue = this.dynamicNumber.modelValue;
    var viewValue = this.dynamicNumber.viewValue;

    if(this.props.onChange) {
      this.props.onChange(evt, modelValue, viewValue);
    }

    this.setState({
      modelValue: modelValue,
      viewValue: viewValue
    });
  }

  render() {
    return <input type="text" className={this.props.className} value={this.state.viewValue} onChange={this.onChange} />
  }
}

export default DynamicNumberComponent;

