var mongoose = require("mongoose");

/**
 * SCHEMA PARA PESSOA
 */
var PessoaSchema = new mongoose.Schema({
  nome: {required: true, type: String},
  sobreNome: {type: String},
  codCpf: {type: Number},
  idCidade: {type: Number},
  bairro: {type: String},
  rua: {type: String},
  numeroCasa: {type: Number},
  codCEP: {type: Number},
  sexo: {type: String},
  apelido: {type: String},
  numeroTelefone: {type: Number},
  senha: {required: true, type: String},
  dataNascimento: {type: Date},
  email:   {required: true, type:String}
});

var pessoa = mongoose.model("pessoa", PessoaSchema);

/**
 * SCHEMA PARA ONG
 */

var OngSchema = new mongoose.Schema({
  nomeEstabelecimento: {required: true, type: String},
  nomeDiretor: {required: true, type: String},
  codCnpj: {required: true, type: Number},
  cpfDiretor: {required: true, type: Number},
  idCidade: {type: Number},
  rua: {type: String},
  numeroEstabelecimento: {type: Number},
  codCEP: {type: Number},
  numeroTelefone: {type: Number},
  senha: {required: true, type: String},
  email: {required: true, type: String}
});

var ong = mongoose.model("ong",OngSchema);

/**
 * SCHEMA PARA PEDIDO DE ADOÇÃO
 */

var PedidoAdocaoSchema = new mongoose.Schema({
  idPessoa: {required: true, type: String},
  dataPedido: {required: true, type: Date},
  idONG: {required: true, type: String}
});

var PedidoAdocao = mongoose.model("pedidoAdocao", PedidoAdocaoSchema);

module.exports = {
  pessoa,
  ong,
  PedidoAdocao
}