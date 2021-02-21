//Este archivo sera el encargado de ejecutar todo el servidor
const express =  require('express');
const path = require('path');//metodo path sirve para unir directorios
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app =  express();

//importing routes
const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');

//settings
//para configurar express: puerto, motor de plantilla, carpetas de las vistas, etc
app.set('port', process.env.PORT || 3000);//establecemos puerto del servidor aunque ya lo tengamos, se hace para servidores reales
//que revise si hay un puerto en el SO, y si no existe que utilice el puerto 3000

app.set('view engine', 'ejs');//express sabe que usaremos ejs como motor de plantillas

app.set('views', path.join(__dirname, 'views'))//metodo path une los siguientes directorios, __dirname: ruta del archivo que lo ejecuta
//la carpeta views se encuentra donde dicen __dirname

//middlewares //CONEXION CON MYSQL------------------
//funciones que se ejecutan antes de que vengan las peticiones de los usuarios
app.use(morgan('dev'));//ejecutar morgan con el parametro dev: para mostrar mensajes por consola
//nos muestra la peticion a detalle, nos permite saber que peticion esta llegando
//primero debemos registrar las peticiones que llegan antes de procesarlas

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));

//decimos que desde el modulo de express estamos requiriendo un metodo que nos va a permitir poder entender los datos que vengan del form
//y le damos como configuracion que sea false porque no nos enviara imagenes ni datos codificados, solo campos del form
app.use(express.urlencoded({extended: false}));//recibiremos los datos desde una propiedad del objeto req llamado body
//----------------------------------------------------

//routes
app.use('/', customerRoutes);//cada vez que un user llegue a la ruta inicial del server ejecuta customer routes

//static files
app.use(express.static(path.join(__dirname, 'public')));//

//starting the server
app.listen(app.get('port'), () => {//app escucha en 3000 cuando empiece a funcionar el servidor muestra el siguiente mensaje en consola
    console.log('Server on port 3000');
});