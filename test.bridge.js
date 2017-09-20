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

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`ntrprt( Symbol( 'hello' ), { [ Symbol( 'hello' ) ]: 12345 } )`", function () {
		it("should be equal to 12345", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let data = { };
   					data[ Symbol( "hello" ) ] = 12345;
   
   					return ntrprt( Symbol( "hello" ), data );
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, 12345);

		});
	});

	describe("`ntrprt( 'hello', { [ Symbol( 'hello' ) ]: 12345 } )`", function () {
		it("should be equal to 12345", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let data = { };
   					data[ Symbol( "hello" ) ] = 12345;
   
   					return ntrprt( "hello", data );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, 12345);

		});
	});

	describe("`ntrprt( 1, { [ Symbol( 1 ) ]: 1 } )`", function () {
		it("should be equal to 1", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let data = { };
   					data[ Symbol( 1 ) ] = 1;
   
   					return ntrprt( 1, data );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, 1);

		});
	});

	describe("`ntrprt with string type as symbol parameter and function type as entity parameter`", function () {
		it("should be equal to Symbol.for( 'extensive' )", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Hello = function Hello( ){ };
   					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
   
   					return ntrprt( "extensive", Hello ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "Symbol(extensive)");

		});
	});

	describe("`ntrprt with symbol type as symbol parameter and function type as entity parameter`", function () {
		it("should be equal to Symbol.for( 'extensive' )", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let Hello = function Hello( ){ };
   					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
   
   					return ntrprt( Symbol.for( "extensive" ), Hello ).toString( );
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, "Symbol(extensive)");

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1REEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7OztBQU9BOztBQUVBRSxTQUFVLFFBQVYsRUFBb0IsWUFBTzs7QUFFMUIsS0FBSUMsd0JBQXVCRixLQUFLRyxPQUFMLENBQWNDLFNBQWQsRUFBeUIsYUFBekIsQ0FBM0I7O0FBRUFILFVBQVUsaUVBQVYsRUFBNkUsWUFBTztBQUNuRkksS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDO0FBQ0g7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixLQUF0Qjs7QUFFQSxHQWpCRDtBQWtCQSxFQW5CRDs7QUFxQkFOLFVBQVUsdURBQVYsRUFBbUUsWUFBTztBQUN6RUksS0FBSSwwQkFBSixFQUFnQyxZQUFPO0FBQ3RDO0FBQ0g7Ozs7Ozs7Ozs7OztBQVlBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsS0FBdEI7O0FBRUEsR0FsQkQ7QUFtQkEsRUFwQkQ7O0FBc0JBTixVQUFVLHVDQUFWLEVBQW1ELFlBQU87QUFDekRJLEtBQUksc0JBQUosRUFBNEIsWUFBTztBQUNsQztBQUNIOzs7Ozs7Ozs7Ozs7QUFZQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLENBQXRCOztBQUVBLEdBbEJEO0FBbUJBLEVBcEJEOztBQXNCQU4sVUFBVSxxRkFBVixFQUFpRyxZQUFPO0FBQ3ZHSSxLQUFJLDhDQUFKLEVBQW9ELFlBQU87QUFDMUQ7QUFDSDs7Ozs7Ozs7Ozs7O0FBWUE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixtQkFBdEI7O0FBRUEsR0FsQkQ7QUFtQkEsRUFwQkQ7O0FBc0JBTixVQUFVLHFGQUFWLEVBQWlHLFlBQU87QUFDdkdJLEtBQUksOENBQUosRUFBb0QsWUFBTztBQUMxRDtBQUNIOzs7Ozs7Ozs7Ozs7QUFZQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLG1CQUF0Qjs7QUFFQSxHQWxCRDtBQW1CQSxFQXBCRDs7QUFzQkEsQ0FqSEQ7O0FBbUhBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJudHJwcnRcIixcblx0XHRcdFwicGF0aFwiOiBcIm50cnBydC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbnRycHJ0LmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJudHJwcnRcIjogXCJudHJwcnRcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcIm50cnBydFwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgbnRycHJ0KCBTeW1ib2woICdoZWxsbycgKSwgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06IDEyMzQ1IH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gMTIzNDVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgZGF0YSA9IHsgfTtcblx0XHRcdFx0XHRkYXRhWyBTeW1ib2woIFwiaGVsbG9cIiApIF0gPSAxMjM0NTtcblxuXHRcdFx0XHRcdHJldHVybiBudHJwcnQoIFN5bWJvbCggXCJoZWxsb1wiICksIGRhdGEgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIDEyMzQ1ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbnRycHJ0KCAnaGVsbG8nLCB7IFsgU3ltYm9sKCAnaGVsbG8nICkgXTogMTIzNDUgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAxMjM0NVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBkYXRhID0geyB9O1xuXHRcdFx0XHRcdGRhdGFbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IDEyMzQ1O1xuXG5cdFx0XHRcdFx0cmV0dXJuIG50cnBydCggXCJoZWxsb1wiLCBkYXRhICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIDEyMzQ1ICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbnRycHJ0KCAxLCB7IFsgU3ltYm9sKCAxICkgXTogMSB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIDFcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgZGF0YSA9IHsgfTtcblx0XHRcdFx0XHRkYXRhWyBTeW1ib2woIDEgKSBdID0gMTtcblxuXHRcdFx0XHRcdHJldHVybiBudHJwcnQoIDEsIGRhdGEgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgMSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG50cnBydCB3aXRoIHN0cmluZyB0eXBlIGFzIHN5bWJvbCBwYXJhbWV0ZXIgYW5kIGZ1bmN0aW9uIHR5cGUgYXMgZW50aXR5IHBhcmFtZXRlcmBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sLmZvciggJ2V4dGVuc2l2ZScgKVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBIZWxsbyA9IGZ1bmN0aW9uIEhlbGxvKCApeyB9O1xuXHRcdFx0XHRcdEhlbGxvWyBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICkgXSA9IFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKTtcblxuXHRcdFx0XHRcdHJldHVybiBudHJwcnQoIFwiZXh0ZW5zaXZlXCIsIEhlbGxvICkudG9TdHJpbmcoICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwiU3ltYm9sKGV4dGVuc2l2ZSlcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG50cnBydCB3aXRoIHN5bWJvbCB0eXBlIGFzIHN5bWJvbCBwYXJhbWV0ZXIgYW5kIGZ1bmN0aW9uIHR5cGUgYXMgZW50aXR5IHBhcmFtZXRlcmBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gU3ltYm9sLmZvciggJ2V4dGVuc2l2ZScgKVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBIZWxsbyA9IGZ1bmN0aW9uIEhlbGxvKCApeyB9O1xuXHRcdFx0XHRcdEhlbGxvWyBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICkgXSA9IFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKTtcblxuXHRcdFx0XHRcdHJldHVybiBudHJwcnQoIFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKSwgSGVsbG8gKS50b1N0cmluZyggKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgXCJTeW1ib2woZXh0ZW5zaXZlKVwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1icmlkZ2VcbiJdfQ==
//# sourceMappingURL=test.bridge.js.map
