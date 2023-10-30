var Model = require("../models/model");
var Adocao = Model.Adocao;
var mongoose = require("mongoose");

async function GetAllAdocaoONG(){
    //var idONG = new mongoose.Types.ObjectId(id);
    return Adocao.aggregate([
    {
    $lookup: {
        from: 'pedidoadocaos',
        localField: 'idPedido',
        foreignField: '_id',
        as: 'InfoPedido'
    }
    },
    {
        $unwind: "$InfoPedido"
    },
    {
    $project: {
        mergedDocument: { $mergeObjects: ["$$ROOT", "$InfoPedido"] }
    }
    },
    {
        $replaceRoot: { newRoot: "$mergedDocument" }
    },
    {
        $project: {
        InfoPedido: 0
        }
    }
    ]).exec();
}

module.exports= {
    GetAllAdocaoONG
}