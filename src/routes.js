const express = require('express');
const usuarioController = require('./controllers/usuarioController');
const authController = require('./controllers/authController');

const routes = express.Router();

routes.get('/',(req,res)=>res.json({message:"Hello World!"}));

routes.post('/',usuarioController.store);

routes.post('/auth', authController.store);


module.exports = routes;
