require('total.js');

RESTBuilder.GET('http://www.w3schools.com/xml/cd_catalog.xml').stream(function(err, response) {
	response.on('data', U.streamer('<CD>', '</CD>', function(value, index) {
		var xml = value.parseXML(true);
		xml.index = index;
		console.log(xml);
	}));
});