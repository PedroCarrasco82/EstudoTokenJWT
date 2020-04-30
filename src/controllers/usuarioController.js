const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

module.exports = {
    async store(req,res){
        const {name,email,password,birthday_date} = req.body;

        const usuario = await Usuario.findOne({where:{email}});
        if(usuario)
            return res.json('Esse email já está cadastrado!');

        const passwordFinal = await bcrypt.hash(password, 10);
        const {id} = await Usuario.create({name,email,password:passwordFinal,birthday_date});
        return res.json(`Id is ${id}`);
    },
    async show(req,res){
        const {id} = req.query;

        const usuario = await Usuario.findOne({where:{id}});

        return res.json(usuario)
    }
}
