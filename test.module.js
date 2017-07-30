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

const assert = require( "should" );

//: @server:
const ntrprt = require( "./ntrprt.js" );
//: @end-server

//: @client:
const ntrprt = require( "./ntrprt.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "ntrprt", ( ) => {

	describe( "`ntrprt with first parameter of typeof Symbol`", ( ) => {

		describe( "ntrprt( Symbol( 'hello' ), data )", ( ) => {

			it( "should be equal to 12345", ( ) => {

				let data = { };
				data[ Symbol( "hello" ) ] = 12345;
				assert.equal( ntrprt( Symbol( "hello" ), data ), 12345 );

			} );

		} );

	} );

	describe( "`ntrprt with first parameter of typeof string`", ( ) => {

		describe( "ntrprt( 'hello', data )", ( ) => {

			it( "should be equal to 12345", ( ) => {

				let data = { };
				data[ Symbol( "hello" ) ] = 12345;
				assert.equal( ntrprt( "hello", data ), 12345,  );

			} );

		} );

	} );

} );


//: @end-server

//: @client:

describe( "ntrprt", ( ) => {

	describe( "`ntrprt with first parameter of typeof Symbol`", ( ) => {

		describe( "ntrprt( Symbol( 'hello' ), data )", ( ) => {

			it( "should be equal to 12345", ( ) => {

				let data = { };
				data[ Symbol( "hello" ) ] = 12345;
				assert.equal( ntrprt( Symbol( "hello" ), data ), 12345 );

			} );

		} );

	} );

	describe( "`ntrprt with first parameter of typeof string`", ( ) => {

		describe( "ntrprt( 'hello', data )", ( ) => {

			it( "should be equal to 12345", ( ) => {

				let data = { };
				data[ Symbol( "hello" ) ] = 12345;
				assert.equal( ntrprt( "hello", data ), 12345,  );

			} );

		} );

	} );

} );

//: @end-client

//: @bridge:

describe( "ntrprt", ( ) => {

	const testBridge = path.resolve(__dirname, "bridge.html");
	const bridgeURL = "file://" + testBridge;

	describe( "ntrprt", ( ) => {

		describe( "`ntrprt with first parameter of typeof Symbol`", ( ) => {

			describe( "ntrprt( Symbol( 'hello' ), data )", ( ) => {

				it( "should be equal to 12345", ( ) => {

					let result = browser.url( bridgeURL ).execute(

						function( ){
							//: @ignore:
							let data = { };
							data[ Symbol( "hello" ) ] = 12345;
							return ntrprt( Symbol( "hello" ), data );
							//: @end-ignore
						}

					).value;

					assert.equal( result, 12345 );

				} );

			} );

		} );

		describe( "`ntrprt with first parameter of typeof string`", ( ) => {

			describe( "ntrprt( 'hello', data )", ( ) => {

				it( "should be equal to 12345", ( ) => {

					let result = browser.url( bridgeURL ).execute(

						function( ){
							//: @ignore:
							let data = { };
							data[ Symbol( "hello" ) ] = 12345;
							return ntrprt( "hello", data );
							//: @end-ignore
						}

					).value;

					assert.equal( result, 12345 );

				} );

			} );

		} );

	} );

} );

//: @end-bridge
