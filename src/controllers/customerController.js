const { request } = require("express");

const controller = {};

//CONTROLADOR PARA LISTAR
controller.list = (req, res) => {//cuando reciba la ruta inicial del servidor vamos a manejarlo con una funcion
   req.getConnection((err, conn) => {
       conn.query('SELECT * FROM customer', (err, customers) => {
           if(err) {
               res.json(err);
           }
           res.render('customers', {
               data: customers
           });
       });
   });
};

//CONTROLADOR PARA INSERTAR
controller.save = (req, res) => {
    //console.log(req.body);//aca dentro recibiremos todos los datos del formulario
    //res.send('works')
    const data = req.body;//dentro estan todos los datos que vienen del form

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
            console.log(customer);
            res.redirect('/');
        });
    })
};

//CONTROLADOR PARA BUSCAR UN DATO PARA ACTUALIZARLOS
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
            // console.log(customer);
            res.render('customer_edit', {
                data: customer[0]
            })
        });
    })
};

//CONTROLADOR PARA GUARDAR
controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer =  req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

//CONTROLADOR PARA ELIMINAR
controller.delete = (req, res) => { 
    //capturar id 
    const { id } = req.params;//servidor recibe el id que debe eliminar //params es un bojeto
    // res.send('works');
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM  customer WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    })
};

//CADA UNO DE LOS METODOS ANTERIORES ES REUTILIZADO EN LAS RUTAS
//SELECCIONAN ALGO DE LA BASE DE DATOS Y RENDERIZAN ALGUNAS VISTAS

module.exports = controller;