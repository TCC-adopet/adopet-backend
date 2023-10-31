var Model = require("../models/model");
var Animal = Model.Animal;
var mongoose = require("mongoose");

async function GetAllAnimal(){
    return Animal.aggregate([
      {
        $lookup: {
          from: 'ongs',
          localField: 'idONG',
          foreignField: '_id',
          as: 'ongInfo'
        }
      },
      {
        $unwind: "$ongInfo"
      },
      {
        $project: {
          mergedDocument: { $mergeObjects: ["$$ROOT", "$ongInfo"] }
        }
      },
      {
        $replaceRoot: { newRoot: "$mergedDocument" }
      },
      {
        $project: {
          dataNascimento: 1,
          tipoRaca: 1,
          racaCachorro: 1,
          racaGato: 1,
          nomeAnimal: 1,
          porte: 1,
          sexo: 1,
          vacinaGato: 1,
          vacinaCachorro: 1,
          animalCastrado: 1,
          animalAdotado: 1,
          descricaoAnimal: 1,
          dataUltimaVacina: 1,
          nomeEstabelecimento: 1
        }
      }
    ]).exec();
}
async function OneAnimal(id) {
  var idAnimal = new mongoose.Types.ObjectId(id);
    return Animal.aggregate([
      {
        $match: { _id: idAnimal }
        //filtra os documentos pelo ID da ONG fornecido no chamado da função
      },
      {
      $lookup: {
          from: 'ongs',
          localField: 'idONG',
          foreignField: '_id',
          as: 'ongInfo'
          }
      //junta as informações do documento da ONG no documento do Pedido de Adoção
      },
      {
        $unwind: "$ongInfo"
      },
      {
        $project: {
          mergedDocument: { $mergeObjects: ["$$ROOT", "$ongInfo"] }
        }
      },
      {
        $replaceRoot: { newRoot: "$mergedDocument" }
      },
      {
        $project: {
          dataNascimento: 1,
          tipoRaca: 1,
          racaCachorro: 1,
          racaGato: 1,
          nomeAnimal: 1,
          porte: 1,
          sexo: 1,
          vacinaGato: 1,
          vacinaCachorro: 1,
          animalCastrado: 1,
          animalAdotado: 1,
          descricaoAnimal: 1,
          dataUltimaVacina: 1,
          nomeEstabelecimento: 1
        }
      }
    ]).exec();
  }
async function GetAnimalONG(id) {
  var idOng = new mongoose.Types.ObjectId(id);
    return Animal.aggregate([
      {
      $lookup: {
          from: 'ongs',
          localField: 'idONG',
          foreignField: '_id',
          as: 'ongInfo'
          }
      //junta as informações do documento da ONG no documento do Pedido de Adoção
      },
      {
        $unwind: "$ongInfo"
      },
      {
        $project: {
          mergedDocument: { $mergeObjects: ["$$ROOT", "$ongInfo"] }
        }
      },
      {
        $replaceRoot: { newRoot: "$mergedDocument" }
      },
      {
        $match:{ idONG: idOng}
      },
      {
        $project: {
          dataNascimento: 1,
          tipoRaca: 1,
          racaCachorro: 1,
          racaGato: 1,
          nomeAnimal: 1,
          porte: 1,
          sexo: 1,
          vacinaGato: 1,
          vacinaCachorro: 1,
          animalCastrado: 1,
          animalAdotado: 1,
          descricaoAnimal: 1,
          dataUltimaVacina: 1,
          nomeEstabelecimento: 1
        }
      }
    ]).exec();
  }
module.exports= {
    GetAllAnimal,
    OneAnimal,
    GetAnimalONG
}