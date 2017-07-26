
const assert = require( "assert" );
const ntrprt = require( "./ntrprt.js" );

let data = { };
data[ Symbol( "hello" ) ] = 12345;

assert.equal( ntrprt( Symbol( "hello" ), data ), 12345, "should be equal to 12345" );

assert.equal( ntrprt( "hello", data ), 12345, "should be equal to 12345" );

console.log( "ok" );
