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






//: @server:

describe( "ntrprt", ( ) => {

	describe( "`ntrprt( Symbol( 'hello' ), { [ Symbol( 'hello' ) ]: 12345 } )`", ( ) => {
		it( "should be equal to 12345", ( ) => {
			let data = { };
			data[ Symbol( "hello" ) ] = 12345;

			assert.equal( ntrprt( Symbol( "hello" ), data ), 12345 );

		} );
	} );

	describe( "`ntrprt( 'hello', { [ Symbol( 'hello' ) ]: 12345 } )`", ( ) => {
		it( "should be equal to 12345", ( ) => {
			let data = { };
			data[ Symbol( "hello" ) ] = 12345;

			assert.equal( ntrprt( "hello", data ), 12345 );

		} );
	} );

	describe( "`ntrprt( 1, { [ Symbol( 1 ) ]: 1 } )`", ( ) => {
		it( "should be equal to 1", ( ) => {
			let data = { };
			data[ Symbol( 1 ) ] = 1;

			assert.equal( ntrprt( 1, data ), 1 );

		} );
	} );

	describe( "`ntrprt with string type as symbol parameter and function type as entity parameter`", ( ) => {
		it( "should be equal to Symbol.for( 'extensive' )", ( ) => {
			let Hello = function Hello( ){ };
			Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

			assert.equal( ntrprt( "extensive", Hello ), Symbol.for( "extensive" ) );

		} );
	} );

	describe( "`ntrprt with symbol type as symbol parameter and function type as entity parameter`", ( ) => {
		it( "should be equal to Symbol.for( 'extensive' )", ( ) => {
			let Hello = function Hello( ){ };
			Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

			assert.equal( ntrprt( Symbol.for( "extensive" ), Hello ), Symbol.for( "extensive" ) );

		} );
	} );

} );

//: @end-server




