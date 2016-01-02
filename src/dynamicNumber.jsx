import React from 'react';

class DynamicNumber extends React.Component {

  static propTypes = {
    value: React.PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      modelValue: 0,
      viewValue: '0'
    }

    this.onChange= this.onChange.bind(this);
  }

  onChange(evt) {
    var rawValue = evt.target.value;
    var modelValue = parseFloat(rawValue);
    var viewValue = rawValue;

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

export default DynamicNumber;

