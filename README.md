# crud-nodejs-mysql
Crud app using node js and mysql

npm init --yes: para crear package.json, archivo principal de todo el proyecto, lista las dependencias o modulos que utilizaremos

npm install express mysql express-myconnection
        express: framework de node
        mysql: para conectar servidor con node
        express-myconnection: hace referencia a una integracion de express con mysql, para escribir mysql mas rapido
        morgan: para ver las peticiones que llegan al servidor
        ejs: motor de plantilla para enviar html que antes son procesados en el servidor    
        
se crea la carpeta views donde se almacenaran todos los archivos del motor de plantillas

mysql -u root -p: conectamos a mysql