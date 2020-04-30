const authConfig = require('../config/auth.json');
const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).json({message: 'Nenhum token fornecido'});

    const splitedToken = authHeader.split(' ');

    if(splitedToken.length !== 2)
        res.status(401).json({messasge: 'Erro no token'});

    const [scheme, token] = splitedToken;
    console.log(scheme);

    if(scheme !== 'Bearer')
        return res.status(401).json({message: 'Token com formato inválido'});

    jwt.verify(token,authConfig.secret, (err,decoded)=>{
        if(err) return res.status(401).json({message: 'Token inválido'});

        req.userId = decoded.id;
        return next();
    })

}
