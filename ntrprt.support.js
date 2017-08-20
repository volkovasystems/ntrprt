"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "ntrprt ",
              			"path": "ntrprt /ntrprt .js",
              			"file": "ntrprt .js",
              			"module": "ntrprt ",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/ntrprt .git",
              			"test": "ntrprt -test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Get symbol property value.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"mtch": "mtch",
              			"protype": "protype"
              		}
              	@end-include
              */var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var mtch = require("mtch");
var protype = require("protype");

var SYMBOL_PATTERN = /^Symbol\((.+?)\)$/;

var ntrprt = function ntrprt(symbol, entity) {
	/*;
                                              	@meta-configuration:
                                              		{
                                              			"symbol:required": [
                                              				"number",
                                              				"string",
                                              				"symbol"
                                              			],
                                              			"entity:required": [
                                              				"function",
                                              				"object"
                                              			]
                                              		}
                                              	@end-meta-configuration
                                              */

	if (falzy(symbol) || !protype(symbol, NUMBER + STRING + SYMBOL)) {
		throw new Error("invalid symbol");
	}

	if (falzy(entity) || !protype(entity, FUNCTION + OBJECT)) {
		throw new Error("invalid entity");
	}

	if ((typeof symbol === "undefined" ? "undefined" : (0, _typeof3.default)(symbol)) == SYMBOL) {
		symbol = mtch(symbol.toString(), SYMBOL_PATTERN, 1);

	} else {
		symbol = symbol.toString();
	}

	return (0, _getOwnPropertySymbols2.default)(entity).reduce(function (value, property) {
		if (mtch(property.toString(), SYMBOL_PATTERN, 1) == symbol) {
			return entity[property];
		}

		return value;
	}, undefined);
};

module.exports = ntrprt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50cnBydC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsIm10Y2giLCJwcm90eXBlIiwiU1lNQk9MX1BBVFRFUk4iLCJudHJwcnQiLCJzeW1ib2wiLCJlbnRpdHkiLCJOVU1CRVIiLCJTVFJJTkciLCJTWU1CT0wiLCJFcnJvciIsIkZVTkNUSU9OIiwiT0JKRUNUIiwidG9TdHJpbmciLCJyZWR1Y2UiLCJ2YWx1ZSIsInByb3BlcnR5IiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNRyxpQkFBaUIsbUJBQXZCOztBQUVBLElBQU1DLFNBQVUsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEtBQUlQLE1BQU9NLE1BQVAsS0FBbUIsQ0FBQ0gsUUFBU0csTUFBVCxFQUFpQkUsU0FBU0MsTUFBVCxHQUFrQkMsTUFBbkMsQ0FBeEIsRUFBcUU7QUFDcEUsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlYLE1BQU9PLE1BQVAsS0FBbUIsQ0FBQ0osUUFBU0ksTUFBVCxFQUFpQkssV0FBV0MsTUFBNUIsQ0FBeEIsRUFBOEQ7QUFDN0QsUUFBTSxJQUFJRixLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksUUFBT0wsTUFBUCx1REFBT0EsTUFBUCxNQUFpQkksTUFBckIsRUFBNkI7QUFDNUJKLFdBQVNKLEtBQU1JLE9BQU9RLFFBQVAsRUFBTixFQUEwQlYsY0FBMUIsRUFBMEMsQ0FBMUMsQ0FBVDs7QUFFQSxFQUhELE1BR0s7QUFDSkUsV0FBU0EsT0FBT1EsUUFBUCxFQUFUO0FBQ0E7O0FBRUQsUUFBTyxxQ0FBOEJQLE1BQTlCLEVBQXVDUSxNQUF2QyxDQUErQyxVQUFFQyxLQUFGLEVBQVNDLFFBQVQsRUFBdUI7QUFDNUUsTUFBSWYsS0FBTWUsU0FBU0gsUUFBVCxFQUFOLEVBQTRCVixjQUE1QixFQUE0QyxDQUE1QyxLQUFtREUsTUFBdkQsRUFBK0Q7QUFDOUQsVUFBT0MsT0FBUVUsUUFBUixDQUFQO0FBQ0E7O0FBRUQsU0FBT0QsS0FBUDtBQUNBLEVBTk0sRUFNSkUsU0FOSSxDQUFQO0FBT0EsQ0F2Q0Q7O0FBeUNBQyxPQUFPQyxPQUFQLEdBQWlCZixNQUFqQiIsImZpbGUiOiJudHJwcnQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJudHJwcnQgXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcIm50cnBydCAvbnRycHJ0IC5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJudHJwcnQgLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwibnRycHJ0IFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9udHJwcnQgLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJudHJwcnQgLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0R2V0IHN5bWJvbCBwcm9wZXJ0eSB2YWx1ZS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJtdGNoXCI6IFwibXRjaFwiLFxyXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IG10Y2ggPSByZXF1aXJlKCBcIm10Y2hcIiApO1xyXG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcclxuXHJcbmNvbnN0IFNZTUJPTF9QQVRURVJOID0gL15TeW1ib2xcXCgoLis/KVxcKSQvO1xyXG5cclxuY29uc3QgbnRycHJ0ICA9IGZ1bmN0aW9uIG50cnBydCggc3ltYm9sLCBlbnRpdHkgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcInN5bWJvbDpyZXF1aXJlZFwiOiBbXHJcblx0XHRcdFx0XHRcIm51bWJlclwiLFxyXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcclxuXHRcdFx0XHRcdFwic3ltYm9sXCJcclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwiZnVuY3Rpb25cIixcclxuXHRcdFx0XHRcdFwib2JqZWN0XCJcclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGZhbHp5KCBzeW1ib2wgKSB8fCAhcHJvdHlwZSggc3ltYm9sLCBOVU1CRVIgKyBTVFJJTkcgKyBTWU1CT0wgKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgc3ltYm9sXCIgKTtcclxuXHR9XHJcblxyXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgfHwgIXByb3R5cGUoIGVudGl0eSwgRlVOQ1RJT04gKyBPQkpFQ1QgKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgZW50aXR5XCIgKTtcclxuXHR9XHJcblxyXG5cdGlmKCB0eXBlb2Ygc3ltYm9sID09IFNZTUJPTCApe1xyXG5cdFx0c3ltYm9sID0gbXRjaCggc3ltYm9sLnRvU3RyaW5nKCApLCBTWU1CT0xfUEFUVEVSTiwgMSApO1xyXG5cclxuXHR9ZWxzZXtcclxuXHRcdHN5bWJvbCA9IHN5bWJvbC50b1N0cmluZyggKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKCBlbnRpdHkgKS5yZWR1Y2UoICggdmFsdWUsIHByb3BlcnR5ICkgPT4ge1xyXG5cdFx0aWYoIG10Y2goIHByb3BlcnR5LnRvU3RyaW5nKCApLCBTWU1CT0xfUEFUVEVSTiwgMSApID09IHN5bWJvbCApe1xyXG5cdFx0XHRyZXR1cm4gZW50aXR5WyBwcm9wZXJ0eSBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9LCB1bmRlZmluZWQgKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbnRycHJ0IDtcclxuIl19
//# sourceMappingURL=ntrprt.support.js.map
