"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "ntrprt",
              			"path": "ntrprt/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/ntrprt.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"ntrprt": "ntrprt"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var ntrprt = require("./ntrprt.support.js");
//: @end-client






//: @client:

describe("ntrprt", function () {

	describe("`ntrprt with first parameter of typeof Symbol`", function () {

		describe("ntrprt( Symbol( 'hello' ), data )", function () {

			it("should be equal to 12345", function () {

				var data = {};
				data[(0, _symbol2.default)("hello")] = 12345;
				assert.equal(ntrprt((0, _symbol2.default)("hello"), data), 12345);

			});

		});

	});

	describe("`ntrprt with first parameter of typeof string`", function () {

		describe("ntrprt( 'hello', data )", function () {

			it("should be equal to 12345", function () {

				var data = {};
				data[(0, _symbol2.default)("hello")] = 12345;
				assert.equal(ntrprt("hello", data), 12345);

			});

		});

	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibnRycHJ0IiwiZGVzY3JpYmUiLCJpdCIsImRhdGEiLCJlcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFNBQVNELFFBQVMscUJBQVQsQ0FBZjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSxnREFBVixFQUE0RCxZQUFPOztBQUVsRUEsV0FBVSxtQ0FBVixFQUErQyxZQUFPOztBQUVyREMsTUFBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0QyxRQUFJQyxPQUFPLEVBQVg7QUFDQUEsU0FBTSxzQkFBUSxPQUFSLENBQU4sSUFBNEIsS0FBNUI7QUFDQUwsV0FBT00sS0FBUCxDQUFjSixPQUFRLHNCQUFRLE9BQVIsQ0FBUixFQUEyQkcsSUFBM0IsQ0FBZCxFQUFpRCxLQUFqRDs7QUFFQSxJQU5EOztBQVFBLEdBVkQ7O0FBWUEsRUFkRDs7QUFnQkFGLFVBQVUsZ0RBQVYsRUFBNEQsWUFBTzs7QUFFbEVBLFdBQVUseUJBQVYsRUFBcUMsWUFBTzs7QUFFM0NDLE1BQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsUUFBSUMsT0FBTyxFQUFYO0FBQ0FBLFNBQU0sc0JBQVEsT0FBUixDQUFOLElBQTRCLEtBQTVCO0FBQ0FMLFdBQU9NLEtBQVAsQ0FBY0osT0FBUSxPQUFSLEVBQWlCRyxJQUFqQixDQUFkLEVBQXVDLEtBQXZDOztBQUVBLElBTkQ7O0FBUUEsR0FWRDs7QUFZQSxFQWREOztBQWdCQSxDQWxDRDs7QUFvQ0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcIm50cnBydFwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJudHJwcnQvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL250cnBydC5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcIm50cnBydFwiOiBcIm50cnBydFwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCBudHJwcnQgPSByZXF1aXJlKCBcIi4vbnRycHJ0LnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcblxyXG5kZXNjcmliZSggXCJudHJwcnRcIiwgKCApID0+IHtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYG50cnBydCB3aXRoIGZpcnN0IHBhcmFtZXRlciBvZiB0eXBlb2YgU3ltYm9sYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdGRlc2NyaWJlKCBcIm50cnBydCggU3ltYm9sKCAnaGVsbG8nICksIGRhdGEgKVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDEyMzQ1XCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRcdGxldCBkYXRhID0geyB9O1xyXG5cdFx0XHRcdGRhdGFbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IDEyMzQ1O1xyXG5cdFx0XHRcdGFzc2VydC5lcXVhbCggbnRycHJ0KCBTeW1ib2woIFwiaGVsbG9cIiApLCBkYXRhICksIDEyMzQ1ICk7XHJcblxyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0fSApO1xyXG5cclxuXHR9ICk7XHJcblxyXG5cdGRlc2NyaWJlKCBcImBudHJwcnQgd2l0aCBmaXJzdCBwYXJhbWV0ZXIgb2YgdHlwZW9mIHN0cmluZ2BcIiwgKCApID0+IHtcclxuXHJcblx0XHRkZXNjcmliZSggXCJudHJwcnQoICdoZWxsbycsIGRhdGEgKVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDEyMzQ1XCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRcdGxldCBkYXRhID0geyB9O1xyXG5cdFx0XHRcdGRhdGFbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IDEyMzQ1O1xyXG5cdFx0XHRcdGFzc2VydC5lcXVhbCggbnRycHJ0KCBcImhlbGxvXCIsIGRhdGEgKSwgMTIzNDUsICApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtY2xpZW50XHJcblxyXG5cclxuIl19
//# sourceMappingURL=test.support.js.map
