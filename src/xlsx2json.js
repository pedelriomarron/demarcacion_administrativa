xlsxj = require("xlsx-to-json");

var array1 = ['comunidades', 'provincias', 'municipios'];

array1.forEach(function(element) {
    xlsxj({
        input: `./src/${element}.xlsx`,
        output: `./data/${element}.json`
    }, function(err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(`${element}: OK`)
            console.log(result);
        }
    });
});