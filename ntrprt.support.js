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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm50cnBydC5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsIm10Y2giLCJwcm90eXBlIiwiU1lNQk9MX1BBVFRFUk4iLCJudHJwcnQiLCJzeW1ib2wiLCJlbnRpdHkiLCJOVU1CRVIiLCJTVFJJTkciLCJTWU1CT0wiLCJFcnJvciIsIkZVTkNUSU9OIiwiT0JKRUNUIiwidG9TdHJpbmciLCJyZWR1Y2UiLCJ2YWx1ZSIsInByb3BlcnR5IiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1FLFVBQVVGLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNRyxpQkFBaUIsbUJBQXZCOztBQUVBLElBQU1DLFNBQVUsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUJDLE1BQXpCLEVBQWlDO0FBQ2hEOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLEtBQUlQLE1BQU9NLE1BQVAsS0FBbUIsQ0FBQ0gsUUFBU0csTUFBVCxFQUFpQkUsU0FBU0MsTUFBVCxHQUFrQkMsTUFBbkMsQ0FBeEIsRUFBcUU7QUFDcEUsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlYLE1BQU9PLE1BQVAsS0FBbUIsQ0FBQ0osUUFBU0ksTUFBVCxFQUFpQkssV0FBV0MsTUFBNUIsQ0FBeEIsRUFBOEQ7QUFDN0QsUUFBTSxJQUFJRixLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksUUFBT0wsTUFBUCx1REFBT0EsTUFBUCxNQUFpQkksTUFBckIsRUFBNkI7QUFDNUJKLFdBQVNKLEtBQU1JLE9BQU9RLFFBQVAsRUFBTixFQUEwQlYsY0FBMUIsRUFBMEMsQ0FBMUMsQ0FBVDs7QUFFQSxFQUhELE1BR0s7QUFDSkUsV0FBU0EsT0FBT1EsUUFBUCxFQUFUO0FBQ0E7O0FBRUQsUUFBTyxxQ0FBOEJQLE1BQTlCLEVBQXVDUSxNQUF2QyxDQUErQyxVQUFFQyxLQUFGLEVBQVNDLFFBQVQsRUFBdUI7QUFDNUUsTUFBSWYsS0FBTWUsU0FBU0gsUUFBVCxFQUFOLEVBQTRCVixjQUE1QixFQUE0QyxDQUE1QyxLQUFtREUsTUFBdkQsRUFBK0Q7QUFDOUQsVUFBT0MsT0FBUVUsUUFBUixDQUFQO0FBQ0E7O0FBRUQsU0FBT0QsS0FBUDtBQUNBLEVBTk0sRUFNSkUsU0FOSSxDQUFQO0FBT0EsQ0F2Q0Q7O0FBeUNBQyxPQUFPQyxPQUFQLEdBQWlCZixNQUFqQiIsImZpbGUiOiJudHJwcnQuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibnRycHJ0IFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibnRycHJ0IC9udHJwcnQgLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJudHJwcnQgLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm50cnBydCBcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL250cnBydCAuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJudHJwcnQgLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0R2V0IHN5bWJvbCBwcm9wZXJ0eSB2YWx1ZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJtdGNoXCI6IFwibXRjaFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XG5jb25zdCBtdGNoID0gcmVxdWlyZSggXCJtdGNoXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuXG5jb25zdCBTWU1CT0xfUEFUVEVSTiA9IC9eU3ltYm9sXFwoKC4rPylcXCkkLztcblxuY29uc3QgbnRycHJ0ICA9IGZ1bmN0aW9uIG50cnBydCggc3ltYm9sLCBlbnRpdHkgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJzeW1ib2w6cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFwibnVtYmVyXCIsXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcInN5bWJvbFwiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiZW50aXR5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcImZ1bmN0aW9uXCIsXG5cdFx0XHRcdFx0XCJvYmplY3RcIlxuXHRcdFx0XHRdXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIHN5bWJvbCApIHx8ICFwcm90eXBlKCBzeW1ib2wsIE5VTUJFUiArIFNUUklORyArIFNZTUJPTCApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgc3ltYm9sXCIgKTtcblx0fVxuXG5cdGlmKCBmYWx6eSggZW50aXR5ICkgfHwgIXByb3R5cGUoIGVudGl0eSwgRlVOQ1RJT04gKyBPQkpFQ1QgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGVudGl0eVwiICk7XG5cdH1cblxuXHRpZiggdHlwZW9mIHN5bWJvbCA9PSBTWU1CT0wgKXtcblx0XHRzeW1ib2wgPSBtdGNoKCBzeW1ib2wudG9TdHJpbmcoICksIFNZTUJPTF9QQVRURVJOLCAxICk7XG5cblx0fWVsc2V7XG5cdFx0c3ltYm9sID0gc3ltYm9sLnRvU3RyaW5nKCApO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoIGVudGl0eSApLnJlZHVjZSggKCB2YWx1ZSwgcHJvcGVydHkgKSA9PiB7XG5cdFx0aWYoIG10Y2goIHByb3BlcnR5LnRvU3RyaW5nKCApLCBTWU1CT0xfUEFUVEVSTiwgMSApID09IHN5bWJvbCApe1xuXHRcdFx0cmV0dXJuIGVudGl0eVsgcHJvcGVydHkgXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH0sIHVuZGVmaW5lZCApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBudHJwcnQgO1xuIl19
//# sourceMappingURL=ntrprt.support.js.map
