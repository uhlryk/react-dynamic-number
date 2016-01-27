# REACT Dynamic Number

Highly customizable React form element component for numbers (prices). 
It validates inputs in realtime (if user press not acceptable character it wont appear in input field). 
This component may be configured for each input 
(you can set number of digits in integer part and number of digits in decimal part, 
you can set decimal separator, accept only positive or negative values).

The Big advantage of this component, is separation of view value and model value (value which is available to other javascript code). 
You can set comma as decimal separator (default is dot) for numbers. 
And then in input field there will be comma as separator, 
but your model value will have correct float number with dot separator.

It works at realtime, therefore this model value may be use in computation for other elements and they will change real time too.

This is port of [Angular Dynamic Number](https://github.com/uhlryk/angular-dynamic-number)

## Demo:

[link](http://htmlpreview.github.io/?https://github.com/uhlryk/react-dynamic-number/blob/master/example/index.html)

## Features:

 * config max numbers for integer part and decimal part.
 * config decimal separator (dot or comma)
 * config to accept positive, negative and both numbers.
 * model value is correct javascript number, but view value may be correct number for localities
 
## Installation:

### npm

    npm install react-dynamic-number

It needs react to work correctly. It is compiled without react at its source.

## Quick start: How to use it

    import React from 'react';
    import ReactDOM from 'react-dom';
    import DynamicNumber from 'react-dynamic-number';
    
    class SomeParentComponent extends React.Component {
      constructor(props) {
        super(props);
      };
    
      onChange(evt, modelValue, viewValue) {
        //modelValue has proper js value which you can process
        //viewValue it is string which is visible to user in form input
        console.log(modelValue);
        console.log(viewValue);
      };
    
      render() {
        return (
          <DynamicNumber className="form-control" onChange={this.onChange.bind(this)} separator={','} integer={5} fraction={5} />
        );
      }
    }
    
    //this render this component, but in normal situation you render only root component
    ReactDOM.render(
      <SomeParentComponent />,
      document.getElementById('app')
    );


## License
MIT
