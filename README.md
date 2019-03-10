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

| CODAUTO (código de comunidades)  | CPRO (código de provincia) | Provincia |
| ------------- | ------------- | ------------- |
| 1  | 14  | Córdoba |


Municipios:

| CODAUTO  | CPRO | CMUN (código de municipio en provincia, NO ES EL ID) | NOMBRE | ID |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| 1  | 14  | 038 | Lucena | 14038 |



### AGRADECIMIENTOS

Datos extraidos y parseados del Instituto Nacional de Estadistica. 
https://www.ine.es

A las siguientes librerias, necesarias para editar los archivos

npm install json2xls

npm install @aquajax/json2xls

npm install xlsx-to-json


## Autores

* **Pedro del Río** - *Trabajo inicial* - [pedelriomarron](https://github.com/pedelriomarron)
