import React from 'react';
import ReactDOM from 'react-dom';
import DynamicNumber from '../release/dynamicNumber.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example: []
    }
  };

  onChange(index, evt, modelValue) {
    var example = this.state.example.slice();
    example[index] = modelValue;

    this.setState({
      example: example
    });
  };

  render() {
    return (
      <div className="container-fluid content">
        <div className="col-sm-10 com-sm-offset-1 col-md-8 col-md-offset-2">
          <div className="row">
            <h1>Example of angular dynamic number directive</h1>
            <form name="directiveForm" className="form-horizontal" >
              <div className="form-group">
                <label className="control-label">Number may be positive or negative, decimal separator comma</label>
                <DynamicNumber className="form-control" type="number" onChange={this.onChange.bind(this,0)} />
                <div>How looks model: {this.state.example[0]}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

