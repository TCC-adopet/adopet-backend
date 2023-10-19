var Model = require("../models/model");
var PedidoAdocao = Model.PedidoAdocao;

async function PedidosAdocaoONG(idONG) {
    return PedidoAdocao.aggregate([
      {
        $match: { idONG: idONG }
        //filtra os documentos pelo ID da ONG fornecido no chamado da função
      },
        $lookup: {
          from: 'ong',
          localField: 'idONG',
          foreignField: '_id',
          as: 'ongInfo'
        }
        //junta as informações do documento da ONG no documento do Pedido de Adoção
      },
      {
        $lookup: {
          from: 'pessoa',
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
    PedidosAdocaoONG
}