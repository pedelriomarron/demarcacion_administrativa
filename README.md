# COMO USAR LA API


DOMINIO: https://spanishdemarcation.appspot.com/

municipio/SLUG/xxxxx

municipio/CODAUTO/xx

comunidad/SLUG/xxxxx

provincia/SLUG/xxxxx

Ejemplo:

https://spanishdemarcation.appspot.com/municipio/SLUG/cordoba



# DEMARCACIÓN ADMINISTRATIVA ESPAÑOLA

Archivos en formato JSON con la demarcación administrativa de España a fecha del 2019.

| Nº COMUNIDADES | Nº PROVINCIAS | Nº MUNICIPIOS |
| ------------- | ------------- | ------------- |
| 19 | 52  | 8.131 |


## COSAS A SABER

Los archivos se gestionan en:
comunidades , provincias y municipios.

Veremos un ejemplo práctico.

Comunidades:

| COD  | NOMBRE |
| ------------- | ------------- |
| 1  | Andalucía  |


Provincias:

| CODAUTO (código de comunidades)  | CPRO (código de provincia) | NOMBRE |
| ------------- | ------------- | ------------- |
| 1  | 14  | Córdoba |


Municipios:

| CODAUTO  | CPRO | CMUN (código de municipio en provincia, NO ES EL ID) | NOMBRE | ID |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 1  | 14  | 038 | Lucena | 14038 |



### AGRADECIMIENTOS

Datos extraidos y parseados del Instituto Nacional de Estadistica. 
https://www.ine.es

A las siguientes librerias, necesarias para editar los archivos en excel.
(Para la conversion a JSON guarda primero los xlsx en excel para que obtenga el formato completo)

npm install json2xls

npm install @aquajax/json2xls

npm install xlsx-to-json

[@marcelo-ribeiro/javascript-remove-accents.js](https://gist.github.com/marcelo-ribeiro/abd651b889e4a20e0bab558a05d38d77 )



## Autores

* **Pedro del Río** - *Trabajo inicial* - [pedelriomarron](https://github.com/pedelriomarron)
