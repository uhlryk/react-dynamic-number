import React from 'react';
import DynamicNumber from './dynamicNumber';

class DynamicNumberComponent extends React.Component {

  static propTypes = {
    value: React.PropTypes.number,
    integer: React.PropTypes.number,
    fraction: React.PropTypes.number,
    separator: (props, propName) => {
      if(props[propName] !== ',' && props[propName] !== '.') {
        return new Error('separator have to be comma or dot char');
      }
    }
  }

  constructor(props) {
    super(props);

    this.dynamicNumber = new DynamicNumber();
    this.dynamicNumber.separator = this.props.separator;
    this.dynamicNumber.integer = this.props.integer;
    this.dynamicNumber.fraction = this.props.fraction;


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

    if(this.props.onModelChange) {
      this.props.onModelChange(modelValue);
    }

    if(this.props.onViewChange) {
      this.props.onViewChange(viewValue);
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

