import React from 'react';
import ReactDOM from 'react-dom';
import DynamicNumber from '../src/index.jsx';

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
            <h1>Example of react dynamic number component</h1>
            <form name="directiveForm" className="form-horizontal" >
              <div className="form-group">
                <label className="control-label">Number may be positive or negative, decimal separator comma, integer 5 chars</label>
                <DynamicNumber className="form-control" onChange={this.onChange.bind(this,0)} value={''} placeholder={'XXXXX,XXXXX'} separator={','} integer={5} fraction={5} />
                <div>How looks model: {this.state.example[0]}</div>
              </div>
              <div className="form-group">
                <label className="control-label">Number may be positive or negative, decimal separator dot, integer 6 chars</label>
                <DynamicNumber className="form-control" onChange={this.onChange.bind(this,1)} separator={'.'} integer={6} fraction={2} />
                <div>How looks model: {this.state.example[1]}</div>
              </div>
              <div className="form-group">
                <label className="control-label">Number may be only positive, decimal separator dot, integer 6 chars</label>
                <DynamicNumber className="form-control" onChange={this.onChange.bind(this,2)} separator={'.'} integer={6} fraction={2} negative={false} />
                <div>How looks model: {this.state.example[2]}</div>
              </div>
              <div className="form-group">
                <label className="control-label">Number may be only negative, decimal separator dot, integer 6 chars</label>
                <DynamicNumber className="form-control" onChange={this.onChange.bind(this,3)} separator={'.'} integer={6} fraction={2} positive={false} />
                <div>How looks model: {this.state.example[3]}</div>
              </div>
              <div className="form-group">
                <label className="control-label">Decimal separator dot, thousand separator comma, integer 10 chars</label>
                <DynamicNumber className="form-control" onChange={this.onChange.bind(this,4)} separator={'.'} integer={10} fraction={3} thousand={true} />
                <div>How looks model: {this.state.example[4]}</div>
              </div>
              <div className="form-group">
                <label className="control-label">Decimal separator dot, thousand separator space, integer 10 chars</label>
                <DynamicNumber className="form-control" onChange={this.onChange.bind(this,5)} separator={'.'} integer={10} fraction={3} thousand={' '} />
                <div>How looks model: {this.state.example[5]}</div>
              </div>
              <div className="form-group">
                <label className="control-label">Decimal separator dot, thousand separator space, integer 10 chars, base value 1200.05</label>
                <DynamicNumber className="form-control" onChange={this.onChange.bind(this,6)} separator={'.'} integer={10} fraction={3} thousand={' '} value={1200.05}/>
                <div>How looks model: {this.state.example[6]}</div>
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

