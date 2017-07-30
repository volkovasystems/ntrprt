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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImJyaWRnZVVSTCIsIml0IiwicmVzdWx0IiwiYnJvd3NlciIsInVybCIsImV4ZWN1dGUiLCJ2YWx1ZSIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsUUFBVixFQUFvQixZQUFPOztBQUUxQixLQUFNQyxhQUFhRixLQUFLRyxPQUFMLENBQWFDLFNBQWIsRUFBd0IsYUFBeEIsQ0FBbkI7QUFDQSxLQUFNQyxZQUFZLFlBQVlILFVBQTlCOztBQUVBRCxVQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUJBLFdBQVUsZ0RBQVYsRUFBNEQsWUFBTzs7QUFFbEVBLFlBQVUsbUNBQVYsRUFBK0MsWUFBTzs7QUFFckRLLE9BQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsU0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6Qjs7QUFFWixpQkFBVztBQUNWO0FBQ1A7Ozs7O0FBS0E7QUFDTyxNQVZXOztBQVlYQyxVQVpGOztBQWNBYixZQUFPYyxLQUFQLENBQWNMLE1BQWQsRUFBc0IsS0FBdEI7O0FBRUEsS0FsQkQ7O0FBb0JBLElBdEJEOztBQXdCQSxHQTFCRDs7QUE0QkFOLFdBQVUsZ0RBQVYsRUFBNEQsWUFBTzs7QUFFbEVBLFlBQVUseUJBQVYsRUFBcUMsWUFBTzs7QUFFM0NLLE9BQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsU0FBSUMsU0FBU0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6Qjs7QUFFWixpQkFBVztBQUNWO0FBQ1A7Ozs7O0FBS0E7QUFDTyxNQVZXOztBQVlYQyxVQVpGOztBQWNBYixZQUFPYyxLQUFQLENBQWNMLE1BQWQsRUFBc0IsS0FBdEI7O0FBRUEsS0FsQkQ7O0FBb0JBLElBdEJEOztBQXdCQSxHQTFCRDs7QUE0QkEsRUExREQ7O0FBNERBLENBakVEOztBQW1FQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibnRycHJ0XCIsXG5cdFx0XHRcInBhdGhcIjogXCJudHJwcnQvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL250cnBydC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwibnRycHJ0XCI6IFwibnRycHJ0XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuXG5kZXNjcmliZSggXCJudHJwcnRcIiwgKCApID0+IHtcblxuXHRjb25zdCB0ZXN0QnJpZGdlID0gcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiKTtcblx0Y29uc3QgYnJpZGdlVVJMID0gXCJmaWxlOi8vXCIgKyB0ZXN0QnJpZGdlO1xuXG5cdGRlc2NyaWJlKCBcIm50cnBydFwiLCAoICkgPT4ge1xuXG5cdFx0ZGVzY3JpYmUoIFwiYG50cnBydCB3aXRoIGZpcnN0IHBhcmFtZXRlciBvZiB0eXBlb2YgU3ltYm9sYFwiLCAoICkgPT4ge1xuXG5cdFx0XHRkZXNjcmliZSggXCJudHJwcnQoIFN5bWJvbCggJ2hlbGxvJyApLCBkYXRhIClcIiwgKCApID0+IHtcblxuXHRcdFx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMTIzNDVcIiwgKCApID0+IHtcblxuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdFx0XHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRcdFx0XHRcdGRhdGFbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IDEyMzQ1O1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbnRycHJ0KCBTeW1ib2woIFwiaGVsbG9cIiApLCBkYXRhICk7XG5cdFx0XHRcdFx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCkudmFsdWU7XG5cblx0XHRcdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgMTIzNDUgKTtcblxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH0gKTtcblxuXHRcdH0gKTtcblxuXHRcdGRlc2NyaWJlKCBcImBudHJwcnQgd2l0aCBmaXJzdCBwYXJhbWV0ZXIgb2YgdHlwZW9mIHN0cmluZ2BcIiwgKCApID0+IHtcblxuXHRcdFx0ZGVzY3JpYmUoIFwibnRycHJ0KCAnaGVsbG8nLCBkYXRhIClcIiwgKCApID0+IHtcblxuXHRcdFx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMTIzNDVcIiwgKCApID0+IHtcblxuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdFx0XHRcdFx0bGV0IGRhdGEgPSB7IH07XG5cdFx0XHRcdFx0XHRcdGRhdGFbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IDEyMzQ1O1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gbnRycHJ0KCBcImhlbGxvXCIsIGRhdGEgKTtcblx0XHRcdFx0XHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0KS52YWx1ZTtcblxuXHRcdFx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCAxMjM0NSApO1xuXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApO1xuXG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
