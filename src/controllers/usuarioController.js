const Usuario = require('../models/Usuario');

module.exports = {
    async store(req,res){
        const {name,email,password,birthday_date} = req.body;
        const {id} = await Usuario.create({name,email,password,birthday_date});
        return res.json(`Id is ${id}`);
    }
}
