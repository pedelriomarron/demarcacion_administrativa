var fs = require('fs');

 function normalizar(){
    var array1 = [ 'municipios',"comunidades","provincias"];

    array1.forEach(function(element) {
        var arr = require(`../data/${element}.json`);
        var json = []
        for (var i = 0; i < arr.length; i++){
            var obj = arr[i];
            let slug = slugify(obj.NOMBRE)
            obj.SLUG = slug
           json.push(obj)
          }

          fs.writeFile(`./data/${element}.json`, JSON.stringify(json, null, 4), 'utf8', (err) =>{
            if(err) throw err;
          }); // wri
          console.log(json)
    });
}




  function slugify (str) {
    var map = { 
        'a' : 'á|à|ã|â|À|Á|Ã|Â',
        'e' : 'é|è|ê|É|È|Ê',
        'i' : 'í|ì|î|Í|Ì|Î',
        'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
        'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c' : 'ç|Ç',
        'n' : 'ñ|Ñ',
        '-' : '_| |,|/',
    };
    
    str = str.toLowerCase();
    
    for (var pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    return str;
};



normalizar()