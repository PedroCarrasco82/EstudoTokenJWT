const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const UsuarioModel = require('../models/usuarioModel');

const connection = new Sequelize(dbConfig);

UsuarioModel.init(connection);

module.exports = connection;
