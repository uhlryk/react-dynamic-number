import React from 'react';
import ReactDOM from 'react-dom';
import {hot} from 'react-hot-loader'
import DynamicNumber from '../src/index.jsx';
import './example.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example: []
    }
    this.state.example[6] = 1200.05;
    this.state.example[7] = 0.05;
    this.state.example[8] = 0.05;
  };

  onChange = index => (evt, modelValue) => {
    var example = this.state.example.slice();
    example[index] = modelValue;

    this.setState({
      example: example
    });
  };

  onBadInput = () => {
    if (this.timerId) {
      return;
    }
    this.input2Node.classList.add('is-invalid');
    this.timerId = setTimeout(() => {
      delete this.timerId;
      this.input2Node.classList.remove('is-invalid');
    }, 200);
  };

  componentDidMount() {
    this.input.focus();
  };

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      delete this.timerId;
    }
  };

  render() {
    return (
      <div className="container-fluid content">
        <div className="col-md-10 com-sm-offset-1 col-lg-8 offset-md-2">
          <h1 className='mt-3'>Example of react dynamic number component</h1>
          <form name="directiveForm">
            <div className="form-group row">
              <label className="col-form-label">Number may be positive or negative, decimal separator comma, integer 5 chars (in addition gets focus)</label>
              <DynamicNumber ref={input => this.input = input} className="form-control" onChange={this.onChange(0)} separator={','} integer={5} fraction={5} />
              <div>How looks model: {this.state.example[0]}</div>
            </div>
            <div className="form-group row">
              <label className="col-form-label">Number may be positive or negative, decimal separator dot, integer 6 chars</label>
              <DynamicNumber className="form-control" onChange={this.onChange(1)} separator={'.'} integer={6} fraction={2} />
              <div>How looks model: {this.state.example[1]}</div>
            </div>
            <div className="form-group row">
              <label className="col-form-label">Number may be only positive, decimal separator dot, integer 6 chars</label>
              <DynamicNumber className="form-control" onChange={this.onChange(2)} separator={'.'} integer={6} fraction={2} negative={false} />
              <div>How looks model: {this.state.example[2]}</div>
            </div>
            <div className="form-group row">
              <label className="col-form-label">Number may be only negative, decimal separator dot, integer 6 chars</label>
              <DynamicNumber className="form-control" onChange={this.onChange(3)} separator={'.'} integer={6} fraction={2} positive={false} />
              <div>How looks model: {this.state.example[3]}</div>
            </div>
            <div className="form-group row">
              <label className="col-form-label">Decimal separator dot, thousand separator comma, integer 10 chars</label>
              <DynamicNumber className="form-control" onChange={this.onChange(4)} separator={'.'} integer={10} fraction={3} thousand={true} />
              <div>How looks model: {this.state.example[4]}</div>
            </div>
            <div className="form-group row">
              <label className="col-form-label">Decimal separator dot, thousand separator space, integer 10 chars</label>
              <DynamicNumber className="form-control" onChange={this.onChange(5)} separator={'.'} integer={10} fraction={3} thousand={' '} />
              <div>How looks model: {this.state.example[5]}</div>
            </div>
            <div className="form-group row">
              <label className="col-form-label">Decimal separator dot, thousand separator space, integer 10 chars, base value 1200.05</label>
              <DynamicNumber className="form-control" onChange={this.onChange(6)} separator={'.'} integer={10} fraction={3} thousand={' '} value={this.state.example[6]}/>
              <div>How looks model: {this.state.example[6]}</div>
            </div>
            <div className="form-group row">
              <label className="col-form-label">Decimal separator comma, thousand separator space, integer 10 chars, base value 0.05</label>
              <DynamicNumber className="form-control" onChange={this.onChange(7)} separator={','} integer={10} fraction={3} thousand={' '} value={this.state.example[7]}/>
              <div>How looks model: {this.state.example[7]}</div>
            </div>
            <div className="form-group row">
              <label className="col-form-label">Decimal separator comma, no thousand separator, integer 10 chars, base value 0.05</label>
              <DynamicNumber className="form-control" onChange={this.onChange(8)} separator={','} integer={10} fraction={3} value={this.state.example[8]}/>
              <div>How looks model: {this.state.example[8]}</div>
            </div>
            <div className="form-group row">
              <label className="col-form-label">Number may be positive or negative, decimal separator comma, integer 5 chars (in addition highlights on bad input)</label>
              <DynamicNumber ref={input => this.input2Node = ReactDOM.findDOMNode(input)} onBadInput={this.onBadInput} className="form-control" onChange={this.onChange(9)} separator={','} integer={5} fraction={5} />
              <div>How looks model: {this.state.example[9]}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const HotApp = hot(module)(App);

ReactDOM.render(
  <HotApp />,
  document.getElementById('app')
);

