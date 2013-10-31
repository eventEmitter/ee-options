


	var   Class 		= require( "ee-class" )
		, log 			= require( "ee-log" )
		, assert 		= require( "assert" );



	var Options 		= require( "./" );


	var MyClass = new Class( {

		init: function( options ){
			var options = new Options( this, options );
			options( "max", "number", 10 );
			options( "min", "number", 1 );

			log.info( this.min, this.max );
		}
	} );



	new MyClass( {} );
	new MyClass( { min: 3 } );
	new MyClass( { max: 6 } );
	new MyClass( { min: 0, max: 100 } );
