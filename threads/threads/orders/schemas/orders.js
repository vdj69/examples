NEWSCHEMA('Orders', function(schema) {

	schema.setQuery(function($) {
		// FUNC.TESTDB is defined in /definitions/db.js
		$.callback(FUNC.randomdata('orders'));
	});

});