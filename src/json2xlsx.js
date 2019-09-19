var fs = require('fs');
var json2xls = require('json2xls');


var array1 = ['comunidades', 'provincias', 'municipios'];

array1.forEach(function(element) {

    var json = require(`./data/${element}.json`);
    var xls = json2xls(json);
    fs.writeFileSync(`./src/${element}.xlsx`, xls, 'ascii');

});