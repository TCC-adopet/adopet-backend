var Model = require("../models/model");
var Adocao = Model.Adocao;
var mongoose = require("mongoose");

async function GetAllAdocaoONG(id){
    var idDaONG = new mongoose.Types.ObjectId(id);
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
        $match: { idONG: idDaONG}
    },
    {
    $lookup: {
        from: "pessoas",
        localField: "idPessoa",
        foreignField: "_id",
        as: "InfoPessoa"
    }
    },
    {
        $unwind: "$InfoPessoa"
    },
    {
        $project: {
            mergedDocument: { $mergeObjects: ["$$ROOT", "$InfoPessoa"] }
        }
    },
    {
        $replaceRoot: { newRoot: "$mergedDocument" }
    },
    {
        $lookup: {
            from: "ongs",
            localField: "idONG",
            foreignField: "_id",
            as: "InfoONG"
        }
    },
    {
        $unwind: "$InfoONG"
    },
    {
        $project: {
            mergedDocument: { $mergeObjects: ["$$ROOT", "$InfoONG"] }
        }
    },
    {
        $replaceRoot: { newRoot: "$mergedDocument" }
    },
    {
        $lookup: {
            from: "animals",
            localField: "idAnimal",
            foreignField: "_id",
            as: "InfoAnimal"
        }
    },
    {
        $unwind: "$InfoAnimal"
    },
    {
        $project: {
            mergedDocument: { $mergeObjects: ["$$ROOT", "$InfoAnimal"] }
        }
    },
    {
        $replaceRoot: { newRoot: "$mergedDocument" }
    },
    {
        $project: {
            _id: 1,
            dataPedido: 1,
            nome: 1,
            nomeEstabelecimento: 1,
            nomeDiretor: 1,
            tipoRaca: 1,
            nomeAnimal: 1,
            sexo: 1
        }
    }
    ]).exec();
}
async function GetAllAdocaoPessoa(id){
    var idDaPessoa = new mongoose.Types.ObjectId(id);
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
        $match: { idPessoa: idDaPessoa}
    },
    {
    $lookup: {
        from: "pessoas",
        localField: "idPessoa",
        foreignField: "_id",
        as: "InfoPessoa"
    }
    },
    {
        $unwind: "$InfoPessoa"
    },
    {
        $project: {
            mergedDocument: { $mergeObjects: ["$$ROOT", "$InfoPessoa"] }
        }
    },
    {
        $replaceRoot: { newRoot: "$mergedDocument" }
    },
    {
        $lookup: {
            from: "ongs",
            localField: "idONG",
            foreignField: "_id",
            as: "InfoONG"
        }
    },
    {
        $unwind: "$InfoONG"
    },
    {
        $project: {
            mergedDocument: { $mergeObjects: ["$$ROOT", "$InfoONG"] }
        }
    },
    {
        $replaceRoot: { newRoot: "$mergedDocument" }
    },
    {
        $lookup: {
            from: "animals",
            localField: "idAnimal",
            foreignField: "_id",
            as: "InfoAnimal"
        }
    },
    {
        $unwind: "$InfoAnimal"
    },
    {
        $project: {
            mergedDocument: { $mergeObjects: ["$$ROOT", "$InfoAnimal"] }
        }
    },
    {
        $replaceRoot: { newRoot: "$mergedDocument" }
    },
    {
        $project: {
            _id: 1,
            dataPedido: 1,
            nome: 1,
            nomeEstabelecimento: 1,
            nomeDiretor: 1,
            tipoRaca: 1,
            nomeAnimal: 1,
            sexo: 1
        }
    }
    ]).exec();
}

module.exports= {
    GetAllAdocaoONG,
    GetAllAdocaoPessoa
}