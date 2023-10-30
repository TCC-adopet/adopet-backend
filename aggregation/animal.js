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
            }
      ]).exec();
  
    }
  

module.exports= {
    GetAllAnimal,
    OneAnimal
}