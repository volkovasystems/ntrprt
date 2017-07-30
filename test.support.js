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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibnRycHJ0IiwiZGVzY3JpYmUiLCJpdCIsImRhdGEiLCJlcXVhbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLFNBQVNELFFBQVMscUJBQVQsQ0FBZjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQkEsVUFBVSxnREFBVixFQUE0RCxZQUFPOztBQUVsRUEsV0FBVSxtQ0FBVixFQUErQyxZQUFPOztBQUVyREMsTUFBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0QyxRQUFJQyxPQUFPLEVBQVg7QUFDQUEsU0FBTSxzQkFBUSxPQUFSLENBQU4sSUFBNEIsS0FBNUI7QUFDQUwsV0FBT00sS0FBUCxDQUFjSixPQUFRLHNCQUFRLE9BQVIsQ0FBUixFQUEyQkcsSUFBM0IsQ0FBZCxFQUFpRCxLQUFqRDs7QUFFQSxJQU5EOztBQVFBLEdBVkQ7O0FBWUEsRUFkRDs7QUFnQkFGLFVBQVUsZ0RBQVYsRUFBNEQsWUFBTzs7QUFFbEVBLFdBQVUseUJBQVYsRUFBcUMsWUFBTzs7QUFFM0NDLE1BQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsUUFBSUMsT0FBTyxFQUFYO0FBQ0FBLFNBQU0sc0JBQVEsT0FBUixDQUFOLElBQTRCLEtBQTVCO0FBQ0FMLFdBQU9NLEtBQVAsQ0FBY0osT0FBUSxPQUFSLEVBQWlCRyxJQUFqQixDQUFkLEVBQXVDLEtBQXZDOztBQUVBLElBTkQ7O0FBUUEsR0FWRDs7QUFZQSxFQWREOztBQWdCQSxDQWxDRDs7QUFvQ0EiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJudHJwcnRcIixcblx0XHRcdFwicGF0aFwiOiBcIm50cnBydC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnRycHJ0LmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJudHJwcnRcIjogXCJudHJwcnRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IG50cnBydCA9IHJlcXVpcmUoIFwiLi9udHJwcnQuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJudHJwcnRcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgbnRycHJ0IHdpdGggZmlyc3QgcGFyYW1ldGVyIG9mIHR5cGVvZiBTeW1ib2xgXCIsICggKSA9PiB7XG5cblx0XHRkZXNjcmliZSggXCJudHJwcnQoIFN5bWJvbCggJ2hlbGxvJyApLCBkYXRhIClcIiwgKCApID0+IHtcblxuXHRcdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDEyMzQ1XCIsICggKSA9PiB7XG5cblx0XHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRcdGRhdGFbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IDEyMzQ1O1xuXHRcdFx0XHRhc3NlcnQuZXF1YWwoIG50cnBydCggU3ltYm9sKCBcImhlbGxvXCIgKSwgZGF0YSApLCAxMjM0NSApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICk7XG5cblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBudHJwcnQgd2l0aCBmaXJzdCBwYXJhbWV0ZXIgb2YgdHlwZW9mIHN0cmluZ2BcIiwgKCApID0+IHtcblxuXHRcdGRlc2NyaWJlKCBcIm50cnBydCggJ2hlbGxvJywgZGF0YSApXCIsICggKSA9PiB7XG5cblx0XHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAxMjM0NVwiLCAoICkgPT4ge1xuXG5cdFx0XHRcdGxldCBkYXRhID0geyB9O1xuXHRcdFx0XHRkYXRhWyBTeW1ib2woIFwiaGVsbG9cIiApIF0gPSAxMjM0NTtcblx0XHRcdFx0YXNzZXJ0LmVxdWFsKCBudHJwcnQoIFwiaGVsbG9cIiwgZGF0YSApLCAxMjM0NSwgICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKTtcblxuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtY2xpZW50XG5cblxuIl19
//# sourceMappingURL=test.support.js.map
