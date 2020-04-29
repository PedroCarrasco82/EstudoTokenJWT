const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

module.exports = {
    async store(req,res){
        const {email,password} = req.body;
        if(!email || !password)
            res.status(400).json({message:'É necessário preencher os campos'});

        const usuario = await Usuario.findOne({where:{email}});

        if(!usuario)
            res.status(400).json({message:'Usuário não encontrado'});

        if(!await bcrypt.compare(password,usuario.password)){
            return res.status(400).json({message: 'Senha inválida'});
        }

        return res.json(usuario);
    }
}
