var jwt = require('jsonwebtoken');

var model = require('../models/model');
var pessoa = model.pessoa;
var ong = model.ong;

async function logar(res,body){
    var og = false;
    var id;
    var email = body.email;
    var senha = body.senha;

    if(!email||!senha){
        return {error: 'Dados insuficientes'}
    }
    Find = await pessoa.find({email,senha}).then(response => {
        if(email === pessoa.email && senha === pessoa.senha){
            id = pessoa._id;
            email = pessoa.email;
            senha = pessoa.senha;
        }
    }).catch(error => {
        return {error: error}
    });

    if(Find == '' || Find.error || Find == null){
        Find = await ong.find({email,senha}).then(response => {
            og = true;
            if(email === ong.email && senha === ong.senha){
                id = ong._id;
                email = ong.email;
                senha = ong.senha;
            }
        }).catch(error => {
            return {error: error}
        });

        if(Find == '' || Find.error){
            return {error: 'E-mail ou senha incorretos.'}
        }
    }
    var token = jwt.sign({email, senha},process.env.SECRECT, {expiresIn: 604.800} );
    return id, og, token;
}

async function logado(req,res,next){
    var token = req.headers['x-acess-token'];
    var index = blacklist.findIndex(token);
    if(index!=-1) return res.status(401).end();
    jwt.verify(token,process.env.SECRECT, (error, decoded) => {
        if(error) return res.status(401).end();

        req.email = decoded.email;
        req.senha = decoded.senha;
        next();
    })
}
var blacklist = [];
async function deslogar(res){
    blacklist.push(req.headers['x-acess-token']);
    res = "Logout executado com sucesso";
    return res;
}

module.exports = {
    logar,
    logado,
    deslogar
}