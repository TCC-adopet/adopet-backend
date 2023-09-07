var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  nome: {required: true, type: String},
  sobreNome: {required: true, type: String},
  age: {required: true, type: Number},
  codCpf: {required: true, type: Number},
  idCidade: {required: true, type: Number},
  bairro: {required: true, type: String},
  rua: {required: true, type: String},
  numeroCasa: {required: true, type: Number},
  codCEP: {required: true, type: Number},
  sexo: {required: true, type: String},
  apelido: {required: true, type: String},
  numeroTelefone: {required: true, type: Number},
  senha: {required: true, type: String},
  dataNascimento: {required: true, type: Date}
});

var Users = mongoose.model("Users", UserSchema);

module.exports = {
  Users 
}