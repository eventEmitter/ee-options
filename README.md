# ee-options

simple options parser for ee-class

## installation

	npm install ee-options

## usage

	
	var Options 		= require( "./" );


	var MyClass = new Class( {

		init: function( options ){
			var options = new Options( this, options );
			options( "max", "number", 10 );
			options( "min", "number", 1 );

			log.info( this.min, this.max );
		}
	} );



	new MyClass( {} ); 						// 1, 10
	new MyClass( { min: 3 } );				// 3, 10 
	new MyClass( { max: 6 } ); 				// 1, 6
	new MyClass( { min: 0, max: 100 } ); 	// 0, 100