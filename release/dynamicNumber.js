(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(1);var _react2=_interopRequireDefault(_react);var _dynamicNumber=__webpack_require__(2);var _dynamicNumber2=_interopRequireDefault(_dynamicNumber);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var DynamicNumberComponent=(function(_React$Component){_inherits(DynamicNumberComponent,_React$Component);function DynamicNumberComponent(props){_classCallCheck(this,DynamicNumberComponent);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(DynamicNumberComponent).call(this,props));_this.dynamicNumber=new _dynamicNumber2.default();_this.dynamicNumber.separator=_this.props.separator;_this.dynamicNumber.integer=_this.props.integer;_this.dynamicNumber.fraction=_this.props.fraction;_this.dynamicNumber.positive=_this.props.positive;_this.dynamicNumber.negative=_this.props.negative;_this.dynamicNumber.thousand=_this.props.thousand;_this.state={modelValue:0,viewValue:'0'};_this.onChange=_this.onChange.bind(_this);return _this;}_createClass(DynamicNumberComponent,[{key:'onChange',value:function onChange(evt){this.dynamicNumber.calculate(evt.target.value,this.state.modelValue,this.state.viewValue);var modelValue=this.dynamicNumber.modelValue;var viewValue=this.dynamicNumber.viewValue;if(this.props.onChange){this.props.onChange(evt,modelValue,viewValue);}this.setState({modelValue:modelValue,viewValue:viewValue});}},{key:'render',value:function render(){return _react2.default.createElement('input',{type:'text',className:this.props.className,value:this.state.viewValue,onChange:this.onChange});}}]);return DynamicNumberComponent;})(_react2.default.Component);DynamicNumberComponent.propTypes={value:_react2.default.PropTypes.number,integer:_react2.default.PropTypes.number,fraction:_react2.default.PropTypes.number,positive:_react2.default.PropTypes.bool,negative:_react2.default.PropTypes.bool,separator:function separator(props,propName){if(props[propName]!==undefined&&props[propName]!==','&&props[propName]!=='.'){return new Error('separator have to be comma or dot char');}},thousand:function thousand(props,propName){if(props[propName]!==undefined&&props[propName]!==true&&props[propName]!==false&&props[propName]!==' '){return new Error('thousand have to be bool value or space character');}}};exports.default=DynamicNumberComponent;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';var _createClass=(function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();Object.defineProperty(exports,"__esModule",{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var DynamicNumber=(function(){function DynamicNumber(){_classCallCheck(this,DynamicNumber);this._separator='.';this._integer=10;this._fraction=10;this._positive=true;this._negative=true;this._regexp=this._buildRegexp();this._isThousand=false;this._thousand=null;}_createClass(DynamicNumber,[{key:'calculate',value:function calculate(){var rawViewValue=arguments.length<=0||arguments[0]===undefined?0:arguments[0];var oldModelValue=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var oldViewValue=arguments.length<=2||arguments[2]===undefined?'0':arguments[2];this._rawViewValue=rawViewValue;this._oldModelValue=oldModelValue;this._oldViewValue=oldViewValue;this._newModelValue=0;this._newViewValue='';var value=String(this._rawViewValue);value=this._removeThousandSeparator(value);value=this._removeLeadingZero(value);if(value===''&&String(this._rawViewValue).charAt(0)==='0'){this._newModelValue=0;this._newViewValue='0';return 0;}if(value===undefined||value===''){this._newModelValue=0;this._newViewValue='';return;}if(value==='-'){this._newModelValue=0;this._newViewValue='-';return;} //test fails, therefore we use old values
	if(this._regexp.test(value)===false){this._newModelValue=this._oldModelValue;this._newViewValue=this._oldViewValue;return;} // view value success 'correct view format' test
	else {this._newModelValue=this._createModelValue(value);this._newViewValue=this._createViewValue(value);return;}}},{key:'_calculateThousandSeparator', /**
	   * private function which calculate thousand separator.
	  */value:function _calculateThousandSeparator(){if(this._thousand!==' '){if(this._separator==='.'){this._thousand=',';}else {this._thousand='.';}}}},{key:'_buildRegexp',value:function _buildRegexp(){var negativeRegex='-?';if(this._positive===false&&this._negative===true){negativeRegex='-';}else if(this._positive===true&&this._negative===false){negativeRegex='';}var intRegex='[0-9]{0,'+this._integer+'}';if(this._integer===0){intRegex='0';}var fractRegex='(\\'+this._separator+'([0-9]){0,'+this._fraction+'})';if(this._fraction===0){fractRegex='';}return new RegExp('^'+negativeRegex+intRegex+fractRegex+'?$');}},{key:'_removeLeadingZero',value:function _removeLeadingZero(value){return value.replace(/^0+/g,"") //change 00000 to ''
	.replace(/^-0(\d+)/g,"-$1") //change -013212 to -0
	.replace(/^-([\.,])/,"-0$1") //change -. to -0.
	.replace(/^[\.,]/g,"0$&"); //change . to 0.
	}},{key:'_removeThousandSeparator',value:function _removeThousandSeparator(value){if(this._isThousand){return value.replace(new RegExp('\\'+this._thousand,'g'),'');}else {return value;}}},{key:'_createModelValue',value:function _createModelValue(value){if(this._separator===','){return parseFloat(value.replace(/\./g,"").replace(",","."));}else {return parseFloat(value.replace(/,/g,""));}}},{key:'_createViewValue',value:function _createViewValue(value){if(this._isThousand){value=value.split(this._separator);value[0]=value[0].replace(/\B(?=(\d{3})+(?!\d))/g,this._thousand);return value.join('.');}else {return value;}}},{key:'separator',set:function set(sep){this._separator=sep==='.'||sep===','?sep:this._separator;this._regexp=this._buildRegexp();this._calculateThousandSeparator();}},{key:'integer',set:function set(part){if(part>=0){var _part=parseInt(part,10);if(isNaN(_part)===false&&isFinite(_part)&&_part>=0){this._integer=_part;}}this._regexp=this._buildRegexp();}},{key:'fraction',set:function set(part){if(part>=0){var _part=parseInt(part,10);if(isNaN(_part)===false&&isFinite(_part)&&_part>=0){this._fraction=_part;}}this._regexp=this._buildRegexp();}},{key:'positive',set:function set(isPositive){if(isPositive===true||isPositive===false){this._positive=isPositive;}this._regexp=this._buildRegexp();}},{key:'negative',set:function set(isNegative){if(isNegative===true||isNegative===false){this._negative=isNegative;}this._regexp=this._buildRegexp();}},{key:'thousand',set:function set(value){this._isThousand=value||value===' ';if(value===' '){this.thousand=' ';}this._calculateThousandSeparator();}},{key:'modelValue',get:function get(){return this._newModelValue;}},{key:'viewValue',get:function get(){return this._newViewValue;}}]);return DynamicNumber;})();exports.default=DynamicNumber;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=dynamicNumber.js.map