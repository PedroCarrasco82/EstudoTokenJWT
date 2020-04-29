const Usuario = require('../models/usuarioModel');

module.exports = {
    async store(req,res){
        const {name,email,password,birthday_date} = req.body;
        const usuario = await Usuario.create({name,email,password,birthday_date});
        res.json(usuario);
    }
}
