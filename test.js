var Airtable = require('airtable');

var apiKey = 'keyqCeVQILqtu5iMI';  // Airtable API Key
var baseID = 'appfwVamfnGoGJPNg';  // Airtable Base ID

var base = new Airtable({apiKey: apiKey}).base(baseID);
var table = base('Categorias');

// show the elements of the table
a = table.select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 2,
    view: "Grid view"
}).firstPage().then((a) => {console.log(a.map(a => a.fields));
console.log('end');});



