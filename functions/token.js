var mongoose = require('mongoose');
var jsonwebtoken = require('jsonwebtoken');
var cookieParser = require('cookie-parser');

var model = require('../models/model');
var pessoa = model.pessoa;
var ong = model.ong;

async function logar(res,body){
    var og = false;
    var email = body.email;
    var senha = body.senha;

    if(!email||!senha){
        return {error: 'Dados insuficientes'}
    }
    Find = await pessoa.find({email,senha}).then(response => {
        return response;
    }).catch(error => {
        return {error: error}
    });

    if(Find == '' || Find.error || Find == null){
        Find = await ong.find({email,senha}).then(response => {
            og = true;
            return response;
        }).catch(error => {
            return {error: error}
        });

        if(Find == '' || Find.error){
            return {error: 'E-mail ou senha incorretos.'}
        }
    }
    Token = await jsonwebtoken.sign({
        id: Find[0]._id,
        nome: Find[0].nome,
        email: Find[0].email
    }, 'SenhaParaProteger', {expiresIn: 604800});

    if(og=true){
        Token.nome = Find[0].nomeEstabelecimento;
    }

    res.cookie('Token', Token);
    res.sendStatus(200);
}

async function logado(req,res,next){
    var token = req.headers['x-acess-token'];
    jsonwebtoken.verify(token,'SenhaParaProteger',(error,decoded) => {
        if(error) return res.status(401).end();

        req.userId = decode.id;
        next();
    })
}

async function deslogar(res){
    res.clearCookie('Token');
    res.send( "Usuario deslogado" );
}

module.exports = {
    logar,
    logado,
    deslogar
}