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

/**
 * SCHEMA PARA ANIMAL
 */

var AnimalSchema = new mongoose.Schema({
  dataNascimento: {type: Date},
  idONG: {required: true, type: String},
  tipoRaca: {required: true, type: String},
  racaCachorro: {type: String},
  racaGato: {type: String},
  nomeAnimal: {required: true, type: String},
  porte: {type: String},
  sexo: {required: true, type: String},
  vacinaGato: {type: String},
  vacinaCachorro: {type: String},
  animalCastrado: {type:String},
  animalAdotado: {type: String},
  descricaoAnimal: {type: String},
  dataUltimaVacina: {type: Date}
});

var Animal = mongoose.model("animal", AnimalSchema);

/**
 * SCHEMA PARA ADOÇÃO
 */

var AdocaoSchema = new mongoose.Schema({
  idPedido: {required: true, type: String},
  petAdotado: {type: String},
  dataAdocao: {type: String},
  dataRecusa: {type: String}, //caso o pet seja devolvido
  idAnimal: {required: true, type: String}
});

var Adocao = mongoose.model("adocao", AdocaoSchema);

/**
 * SCHEMA PARA UF
 */

var UfSchema = new mongoose.Schema({
  idUF: {required: true, type: Number},
  nmUF: {required: true, type: String},
  siglaUF: {required: true, type: String}
});

var UF = mongoose.model("UF", UfSchema);

/**
 * SCHEMA PARA CIDADES
 */

var CidadeSchema = new mongoose.Schema({
  idCidade: {required: true, type: Number},
  nmCidade: {required: true, type: String},
  idUF: {required: true, type:Number}
});

var Cidade = mongoose.model("cidade", CidadeSchema);

/**
 * SCHEMA PARA RAÇAS DE CACHORRO
 */

var racaCachorroSchema = new mongoose.Schema({
  nmRaca: {required: true, type: String}
})

var RacaCachorro = mongoose.model("racaCachorro", racaCachorroSchema);

/**
 * SCHEMA PARA RAÇAS DE GATO
 */

var racaGatoSchema = new mongoose.Schema({
  nmRaca: {required: true, type: String}
});

var RacaGato = mongoose.model("racaGato", racaGatoSchema);

module.exports = {
  pessoa,
  ong,
  PedidoAdocao,
  Animal,
  Adocao,
  UF,
  Cidade,
  RacaCachorro,
  RacaGato
}