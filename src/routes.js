const express = require('express');
const usuarioController = require('./controllers/usuarioController');

const routes = express.Router();

routes.get('/',(req,res)=>res.json({message:"Hello World!"}));

routes.post('/',usuarioController.store);


module.exports = routes;
