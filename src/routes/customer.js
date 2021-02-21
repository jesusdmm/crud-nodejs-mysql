const express = require('express');
const router = express.Router();//metodo de express devuelve un objeto de js en el cual se pueden agregar rutas para reutilizarlas

const customerController =  require('../controllers/customerController');

//escribiremos todas las url que la app del servidor va a manejar
router.get('/', customerController.list);
router.post('/add', customerController.save);
//parametro de la ruta
router.get('/delete/:id', customerController.delete);

router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);


module.exports = router;

//ACA LISTAMOS TODAS LAS URL QUE NUESTRA APP DE FRONT PUEDE ENVIARNOS
//CADA URL TIENE UNA FUNCION QUE ESTA ESCRITA DENTRO DE customerController