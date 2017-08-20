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
              */

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge






//: @bridge:

describe("ntrprt", function () {

	var testBridge = path.resolve(__dirname, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("ntrprt", function () {

		describe("`ntrprt with first parameter of typeof Symbol`", function () {

			describe("ntrprt( Symbol( 'hello' ), data )", function () {

				it("should be equal to 12345", function () {

					var result = browser.url(bridgeURL).execute(

					function () {
						//: @ignore:
      							let data = { };
      							data[ Symbol( "hello" ) ] = 12345;
      							return ntrprt( Symbol( "hello" ), data );
      							//: @end-ignore
					}).

					value;

					assert.equal(result, 12345);

				});

			});

		});

		describe("`ntrprt with first parameter of typeof string`", function () {

			describe("ntrprt( 'hello', data )", function () {

				it("should be equal to 12345", function () {

					var result = browser.url(bridgeURL).execute(

					function () {
						//: @ignore:
      							let data = { };
      							data[ Symbol( "hello" ) ] = 12345;
      							return ntrprt( "hello", data );
      							//: @end-ignore
					}).

					value;

					assert.equal(result, 12345);

				});

			});

		});

	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJ2YWx1ZSIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQixLQUFNQyxhQUFhRixLQUFLRyxPQUFMLENBQWFDLFNBQWIsRUFBd0IsYUFBeEIsQ0FBbkI7QUFDQSxLQUFNQyxZQUFZLFlBQVlILFVBQTlCOztBQUVBRCxVQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUJBLFdBQVUsZ0RBQVYsRUFBNEQsWUFBTzs7QUFFbEVBLFlBQVUsbUNBQVYsRUFBK0MsWUFBTzs7QUFFckRLLE9BQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsU0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6Qjs7QUFFWixpQkFBVztBQUNWO0FBQ1A7Ozs7O0FBS0E7QUFDTyxNQVZXOztBQVlYQyxVQVpGOztBQWNBYixZQUFPYyxLQUFQLENBQWNMLE1BQWQsRUFBc0IsS0FBdEI7O0FBRUEsS0FsQkQ7O0FBb0JBLElBdEJEOztBQXdCQSxHQTFCRDs7QUE0QkFOLFdBQVUsZ0RBQVYsRUFBNEQsWUFBTzs7QUFFbEVBLFlBQVUseUJBQVYsRUFBcUMsWUFBTzs7QUFFM0NLLE9BQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsU0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6Qjs7QUFFWixpQkFBVztBQUNWO0FBQ1A7Ozs7O0FBS0E7QUFDTyxNQVZXOztBQVlYQyxVQVpGOztBQWNBYixZQUFPYyxLQUFQLENBQWNMLE1BQWQsRUFBc0IsS0FBdEI7O0FBRUEsS0FsQkQ7O0FBb0JBLElBdEJEOztBQXdCQSxHQTFCRDs7QUE0QkEsRUExREQ7O0FBNERBLENBakVEOztBQW1FQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJudHJwcnRcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwibnRycHJ0L3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9udHJwcnQuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJudHJwcnRcIjogXCJudHJwcnRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcclxuLy86IEBlbmQtYnJpZGdlXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5cclxuZGVzY3JpYmUoIFwibnRycHJ0XCIsICggKSA9PiB7XHJcblxyXG5cdGNvbnN0IHRlc3RCcmlkZ2UgPSBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIpO1xyXG5cdGNvbnN0IGJyaWRnZVVSTCA9IFwiZmlsZTovL1wiICsgdGVzdEJyaWRnZTtcclxuXHJcblx0ZGVzY3JpYmUoIFwibnRycHJ0XCIsICggKSA9PiB7XHJcblxyXG5cdFx0ZGVzY3JpYmUoIFwiYG50cnBydCB3aXRoIGZpcnN0IHBhcmFtZXRlciBvZiB0eXBlb2YgU3ltYm9sYFwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0ZGVzY3JpYmUoIFwibnRycHJ0KCBTeW1ib2woICdoZWxsbycgKSwgZGF0YSApXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAxMjM0NVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcclxuXHJcblx0XHRcdFx0XHRcdGZ1bmN0aW9uKCApe1xyXG5cdFx0XHRcdFx0XHRcdC8vOiBAaWdub3JlOlxuLypcclxuXHRcdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHsgfTtcclxuXHRcdFx0XHRcdFx0XHRkYXRhWyBTeW1ib2woIFwiaGVsbG9cIiApIF0gPSAxMjM0NTtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbnRycHJ0KCBTeW1ib2woIFwiaGVsbG9cIiApLCBkYXRhICk7XHJcblx0XHRcdFx0XHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0KS52YWx1ZTtcclxuXHJcblx0XHRcdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgMTIzNDUgKTtcclxuXHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0XHRkZXNjcmliZSggXCJgbnRycHJ0IHdpdGggZmlyc3QgcGFyYW1ldGVyIG9mIHR5cGVvZiBzdHJpbmdgXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRkZXNjcmliZSggXCJudHJwcnQoICdoZWxsbycsIGRhdGEgKVwiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMTIzNDVcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXHJcblxyXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiggKXtcclxuXHRcdFx0XHRcdFx0XHQvLzogQGlnbm9yZTpcbi8qXHJcblx0XHRcdFx0XHRcdFx0bGV0IGRhdGEgPSB7IH07XHJcblx0XHRcdFx0XHRcdFx0ZGF0YVsgU3ltYm9sKCBcImhlbGxvXCIgKSBdID0gMTIzNDU7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG50cnBydCggXCJoZWxsb1wiLCBkYXRhICk7XHJcblx0XHRcdFx0XHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0KS52YWx1ZTtcclxuXHJcblx0XHRcdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgMTIzNDUgKTtcclxuXHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdH0gKTtcclxuXHJcblx0fSApO1xyXG5cclxufSApO1xyXG5cclxuLy86IEBlbmQtYnJpZGdlXHJcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
