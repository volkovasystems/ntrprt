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
              */var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var ntrprt = require("./ntrprt.support.js");
//: @end-client






//: @client:

describe("ntrprt", function () {

	describe("`ntrprt( Symbol( 'hello' ), { [ Symbol( 'hello' ) ]: 12345 } )`", function () {
		it("should be equal to 12345", function () {
			var data = {};
			data[(0, _symbol2.default)("hello")] = 12345;

			assert.equal(ntrprt((0, _symbol2.default)("hello"), data), 12345);

		});
	});

	describe("`ntrprt( 'hello', { [ Symbol( 'hello' ) ]: 12345 } )`", function () {
		it("should be equal to 12345", function () {
			var data = {};
			data[(0, _symbol2.default)("hello")] = 12345;

			assert.equal(ntrprt("hello", data), 12345);

		});
	});

	describe("`ntrprt( 1, { [ Symbol( 1 ) ]: 1 } )`", function () {
		it("should be equal to 1", function () {
			var data = {};
			data[(0, _symbol2.default)(1)] = 1;

			assert.equal(ntrprt(1, data), 1);
		});
	});

	describe("`ntrprt with string type as symbol parameter and function type as entity parameter`", function () {
		it("should be equal to Symbol.for( 'extensive' )", function () {
			var Hello = function Hello() {};
			Hello[(0, _for2.default)("extensive")] = (0, _for2.default)("extensive");

			assert.equal(ntrprt("extensive", Hello), (0, _for2.default)("extensive"));

		});
	});

	describe("`ntrprt with symbol type as symbol parameter and function type as entity parameter`", function () {
		it("should be equal to Symbol.for( 'extensive' )", function () {
			var Hello = function Hello() {};
			Hello[(0, _for2.default)("extensive")] = (0, _for2.default)("extensive");

			assert.equal(ntrprt((0, _for2.default)("extensive"), Hello), (0, _for2.default)("extensive"));

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibnRycHJ0IiwiZGVzY3JpYmUiLCJpdCIsImRhdGEiLCJlcXVhbCIsIkhlbGxvIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsU0FBU0QsUUFBUyxxQkFBVCxDQUFmO0FBQ0E7Ozs7Ozs7QUFPQTs7QUFFQUUsU0FBVSxRQUFWLEVBQW9CLFlBQU87O0FBRTFCQSxVQUFVLGlFQUFWLEVBQTZFLFlBQU87QUFDbkZDLEtBQUksMEJBQUosRUFBZ0MsWUFBTztBQUN0QyxPQUFJQyxPQUFPLEVBQVg7QUFDQUEsUUFBTSxzQkFBUSxPQUFSLENBQU4sSUFBNEIsS0FBNUI7O0FBRUFMLFVBQU9NLEtBQVAsQ0FBY0osT0FBUSxzQkFBUSxPQUFSLENBQVIsRUFBMkJHLElBQTNCLENBQWQsRUFBaUQsS0FBakQ7O0FBRUEsR0FORDtBQU9BLEVBUkQ7O0FBVUFGLFVBQVUsdURBQVYsRUFBbUUsWUFBTztBQUN6RUMsS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDLE9BQUlDLE9BQU8sRUFBWDtBQUNBQSxRQUFNLHNCQUFRLE9BQVIsQ0FBTixJQUE0QixLQUE1Qjs7QUFFQUwsVUFBT00sS0FBUCxDQUFjSixPQUFRLE9BQVIsRUFBaUJHLElBQWpCLENBQWQsRUFBdUMsS0FBdkM7O0FBRUEsR0FORDtBQU9BLEVBUkQ7O0FBVUFGLFVBQVUsdUNBQVYsRUFBbUQsWUFBTztBQUN6REMsS0FBSSxzQkFBSixFQUE0QixZQUFPO0FBQ2xDLE9BQUlDLE9BQU8sRUFBWDtBQUNBQSxRQUFNLHNCQUFRLENBQVIsQ0FBTixJQUFzQixDQUF0Qjs7QUFFQUwsVUFBT00sS0FBUCxDQUFjSixPQUFRLENBQVIsRUFBV0csSUFBWCxDQUFkLEVBQWlDLENBQWpDO0FBQ0EsR0FMRDtBQU1BLEVBUEQ7O0FBU0FGLFVBQVUscUZBQVYsRUFBaUcsWUFBTztBQUN2R0MsS0FBSSw4Q0FBSixFQUFvRCxZQUFPO0FBQzFELE9BQUlHLFFBQVEsU0FBU0EsS0FBVCxHQUFpQixDQUFHLENBQWhDO0FBQ0FBLFNBQU8sbUJBQVksV0FBWixDQUFQLElBQXFDLG1CQUFZLFdBQVosQ0FBckM7O0FBRUFQLFVBQU9NLEtBQVAsQ0FBY0osT0FBUSxXQUFSLEVBQXFCSyxLQUFyQixDQUFkLEVBQTRDLG1CQUFZLFdBQVosQ0FBNUM7O0FBRUEsR0FORDtBQU9BLEVBUkQ7O0FBVUFKLFVBQVUscUZBQVYsRUFBaUcsWUFBTztBQUN2R0MsS0FBSSw4Q0FBSixFQUFvRCxZQUFPO0FBQzFELE9BQUlHLFFBQVEsU0FBU0EsS0FBVCxHQUFpQixDQUFHLENBQWhDO0FBQ0FBLFNBQU8sbUJBQVksV0FBWixDQUFQLElBQXFDLG1CQUFZLFdBQVosQ0FBckM7O0FBRUFQLFVBQU9NLEtBQVAsQ0FBY0osT0FBUSxtQkFBWSxXQUFaLENBQVIsRUFBbUNLLEtBQW5DLENBQWQsRUFBMEQsbUJBQVksV0FBWixDQUExRDs7QUFFQSxHQU5EO0FBT0EsRUFSRDs7QUFVQSxDQW5ERDs7QUFxREEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJudHJwcnRcIixcblx0XHRcdFwicGF0aFwiOiBcIm50cnBydC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnRycHJ0LmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJudHJwcnRcIjogXCJudHJwcnRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IG50cnBydCA9IHJlcXVpcmUoIFwiLi9udHJwcnQuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJudHJwcnRcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgbnRycHJ0KCBTeW1ib2woICdoZWxsbycgKSwgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06IDEyMzQ1IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMTIzNDVcIiwgKCApID0+IHtcblx0XHRcdGxldCBkYXRhID0geyB9O1xuXHRcdFx0ZGF0YVsgU3ltYm9sKCBcImhlbGxvXCIgKSBdID0gMTIzNDU7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggbnRycHJ0KCBTeW1ib2woIFwiaGVsbG9cIiApLCBkYXRhICksIDEyMzQ1ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbnRycHJ0KCAnaGVsbG8nLCB7IFsgU3ltYm9sKCAnaGVsbG8nICkgXTogMTIzNDUgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAxMjM0NVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRkYXRhWyBTeW1ib2woIFwiaGVsbG9cIiApIF0gPSAxMjM0NTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBudHJwcnQoIFwiaGVsbG9cIiwgZGF0YSApLCAxMjM0NSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG50cnBydCggMSwgeyBbIFN5bWJvbCggMSApIF06IDEgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAxXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGF0YSA9IHsgfTtcblx0XHRcdGRhdGFbIFN5bWJvbCggMSApIF0gPSAxO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIG50cnBydCggMSwgZGF0YSApLCAxICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG50cnBydCB3aXRoIHN0cmluZyB0eXBlIGFzIHN5bWJvbCBwYXJhbWV0ZXIgYW5kIGZ1bmN0aW9uIHR5cGUgYXMgZW50aXR5IHBhcmFtZXRlcmBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sLmZvciggJ2V4dGVuc2l2ZScgKVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IEhlbGxvID0gZnVuY3Rpb24gSGVsbG8oICl7IH07XG5cdFx0XHRIZWxsb1sgU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApIF0gPSBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggbnRycHJ0KCBcImV4dGVuc2l2ZVwiLCBIZWxsbyApLCBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBudHJwcnQgd2l0aCBzeW1ib2wgdHlwZSBhcyBzeW1ib2wgcGFyYW1ldGVyIGFuZCBmdW5jdGlvbiB0eXBlIGFzIGVudGl0eSBwYXJhbWV0ZXJgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIFN5bWJvbC5mb3IoICdleHRlbnNpdmUnIClcIiwgKCApID0+IHtcblx0XHRcdGxldCBIZWxsbyA9IGZ1bmN0aW9uIEhlbGxvKCApeyB9O1xuXHRcdFx0SGVsbG9bIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSBdID0gU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIG50cnBydCggU3ltYm9sLmZvciggXCJleHRlbnNpdmVcIiApLCBIZWxsbyApLCBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICkgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
