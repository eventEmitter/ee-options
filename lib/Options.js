

	var   Class 		= require( "ee-class" )
		, type 			= require( "ee-types" )
		, log 			= require( "ee-log" );


	module.exports = function( thisObj, options ){
		return function( name, desiredType, deflt ){
			if( type[ desiredType ]( options[ name ] ) ) thisObj[ name ] = options[ name ];
			else if ( deflt )thisObj[ name ] = deflt;
		}
	}