const express = require('express');
const usuarioController = require('./controllers/usuarioController');
const authController = require('./controllers/authController');
const authMiddleware = require('./Middlewares/Auth');

const routes = express.Router();

routes.get('/usuario',authMiddleware,usuarioController.show);

routes.post('/auth/register',usuarioController.store);

routes.post('/auth', authController.store);


module.exports = routes;
