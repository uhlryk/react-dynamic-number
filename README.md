# REACT Dynamic Number 
[![Build Status](https://travis-ci.org/uhlryk/react-dynamic-number.svg)](https://travis-ci.org/uhlryk/react-dynamic-number)
[![Downloads](https://img.shields.io/npm/dt/react-dynamic-number.svg)](https://www.npmjs.com/package/react-dynamic-number)
[![Downloads](https://img.shields.io/npm/dm/react-dynamic-number.svg)](https://www.npmjs.com/package/react-dynamic-number)
[![NPM version](https://img.shields.io/npm/v/react-dynamic-number.svg)](https://www.npmjs.com/package/react-dynamic-number)

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
 * allow to set thousand separator (dot, comma or space)
 
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

## Options:

    <DynamicNumber
      value={0}
      separator={'.'}
      integer={10}
      fraction={10}
      positive={true}
      negative={true}
      thousand={' '}
      onChange={this.handleChange}
    />

### value
 
 * type: Number or '' (empty string)
 * required: false
 * default: 0
 
Init value of input. If init value is '' then input is empty.

**When you set this prop, then component became a [Controlled Component](https://facebook.github.io/react/docs/forms.html#controlled-components)**

### separator

 * type: String
 * required: false
 * default: '.'
 * options: 
  * '.' - dot is decimal separator
  * ',' - comma is decimal separator
  
Define number decimal separator

### integer
  
 * type: Number
 * required: false
 * default: 10
 
Set maximum numbers of digits integer part (digits before decimal separator)
 
### fraction
  
 * type: Number
 * required: false
 * default: 10
 
Set maximum numbers of digits fraction part (digits after decimal separator)
 
### positive
  
 * type: Boolean
 * required: false
 * default: true
 * options: 
  * true - number can be positive
  * false - number may not be positive
  
Define if number may be positive

### negative
  
 * type: Boolean
 * required: false
 * default: true
 * options: 
  * true - number can be negative
  * false - number may not be negative
  
Define if number may be negative

### thousand

 * type: boolean or ' ' (space)
 * required: false
 * default: false
 * options: 
  * false - thousand separator is disabled
  * ' ' (space) - thousand separator is enabled and separate values by space
  * true - thousand separator is enabled. 
   * If decimal separator is dot then thousand separator is comma.
   * If decimal separator is comma then thousand separator is dot.
  
Define number decimal separator

### placeholder

 * type: string
 * required: false
 * default: none
 
Allow to set placeholder to empty input
 
### onChange
  
 * type: Function (callback)
 * required: false
 * function attributes: 
  * evt - react event
  * modelValue - correct javascript number
  * viewValue - string value visible in input
  
Define callback which will be trigger on any number change

## FAQ

### Is it works with ES5?
 
 Yes it works but remember to use it :
 
```
var DynamicNumber = require('react-dynamic-number').default;
```
 
### How to set focus on this element
 
First of all you need to get ref to this component.
How to get ref:
```
  <DynamicNumber ref={input => { this.input = input }} ... 
```

Ref should be use in `componentDidMount` or `componentDidUpdate` because there we are sure that everything is ready.

Now you can call `focus` method on this ref.

```
  componentDidMount() {
    this.input.focus();
  }
```

Example from documentation [Adding a Ref to a Class Component](https://facebook.github.io/react/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element)
 
Warning:
As you can read here [Refs and Functional Components](https://facebook.github.io/react/docs/refs-and-the-dom.html#refs-and-functional-components)

> You may not use the ref attribute on functional components because they don't have instances:


## License
MIT
