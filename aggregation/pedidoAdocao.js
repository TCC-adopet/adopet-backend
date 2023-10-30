var Model = require("../models/model");
var PedidoAdocao = Model.PedidoAdocao;
var mongoose = require("mongoose");

async function PedidosAdocaoONG(id) {
  var idDaONG = new mongoose.Types.ObjectId(id);
    return PedidoAdocao.aggregate([
      {
        $match: { idONG: idDaONG }
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
        $lookup: {
          from: 'pessoas',
          localField: 'idPessoa',
          foreignField: '_id',
          as: 'pessoaInfo'
        }
        //junta as informações do documento da Pessoa no documento do pedido
      },
      {
        $project: {
          _id: 1,
          ongNome: { $arrayElemAt: ['$ongInfo.nomeEstabelecimento', 0] },
          dataPedido: 1,
          pessoaNome: { $arrayElemAt: ['$pessoaInfo.nome', 0] }
        }
      }
    ]).exec();

  }
  async function PedidosAdocaoPessoa(id) {
    var idDaPessoa = new mongoose.Types.ObjectId(id);
      return PedidoAdocao.aggregate([
        {
          $match: { idPessoa: idDaPessoa }
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
          $lookup: {
            from: 'pessoas',
            localField: 'idPessoa',
            foreignField: '_id',
            as: 'pessoaInfo'
          }
          //junta as informações do documento da Pessoa no documento do pedido
        },
        {
          $project: {
            _id: 1,
            ongNome: { $arrayElemAt: ['$ongInfo.nomeEstabelecimento', 0] },
            dataPedido: 1,
            pessoaNome: { $arrayElemAt: ['$pessoaInfo.nome', 0] }
          }
        }
      ]).exec();
  
    }
  

module.exports= {
    PedidosAdocaoONG,
    PedidosAdocaoPessoa
}