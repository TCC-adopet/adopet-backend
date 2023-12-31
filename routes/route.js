var express = require("express");
var Models = require("../models/model");
var Functions = require("../functions/function");
var token = require("../functions/token");
var PedidosAdocao = require("../aggregation/pedidoAdocao");
var animal = require("../aggregation/animal");
var adocao = require("../aggregation/adocao");
var logado = token.logado;
var PessoaModel = Models.pessoa;
var OngModel = Models.ong;
var PedidoAdocaoModel = Models.PedidoAdocao;
var AnimalModel = Models.Animal;
var AdocaoModel = Models.Adocao;
var UfModel = Models.UF;
var CidadeModel = Models.Cidade;
var RacaCachorroModel = Models.RacaCachorro;
var RacaGatoModel = Models.RacaGato;
var VacinaFelinaModel = Models.VacinaFelina;
var VacinaCaninaModel = Models.VacinaCanina;

var router = express.Router();

module.exports = router;


/**
* ROUTES PARA PESSOA
*/
//Post Method
router.post("/postPessoa", async (req, res) => {
  var dataObject = req.body;
  try {
    var dataToSave = await Functions.salvarBD(dataObject, PessoaModel);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAllPessoa", async (req, res) => {
  try{
    var dat = await Functions.getAll(PessoaModel);
    res.status(200).json(dat);
  }catch(error) {
    res.status(400).json({ message: error.message })
  }
});

//Get by ID Method
router.get("/getOnePessoa/:id", async (req, res) => {
  try{
    var id = req.params.id;
    var response = await Functions.getOne(id, PessoaModel);
    res.status(200).json(response);
  }catch(error) {
    res.status(400).json({ message: error.message});
  }
});

//Update by ID Method
router.put("/updatePessoa/:id", async (req, res) => {
  var id = req.params.id;
  var updatedData = req.body;
  console.log(updatedData);
  try{
  var data = await Functions.updateBD(id,updatedData,PessoaModel);
  console.log(data);
  res.status(200).json(data);
  }catch(error){
    res.status(500).json({ message:error.message })
  }
});

//Delete by ID Method
router.delete("/deletePessoa/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var resp = await Functions.deleteBD(id,PessoaModel);
    res.json(resp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
* ROUTES PARA ONGS
*/

router.post("/postOng", async (req, res) => {
  var dataObject = req.body;
  try {
    var dataToSave = await Functions.salvarBD(dataObject, OngModel);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllOng", async (req, res) => {
  try{
    var dat = await Functions.getAll(OngModel);
    res.status(200).json(dat);
  }catch(error) {
    res.status(400).json({ message: error.message })
  }
});

router.get("/getOneOng/:id", async (req, res) => {
  try{
    var id = req.params.id;
    var response = await Functions.getOne(id, OngModel);
    res.status(200).json(response);
  }catch(error) {
    res.status(400).json({ message: error.message});
  }
});

router.put("/updateOng/:id", async (req, res) => {
  var id = req.params.id;
  var updatedData = req.body;
  try{
  var data = await Functions.updateBD(id,updatedData,OngModel);
  res.status(200).json(data);
  }catch(error){
    res.status(500).json({ message:error.message })
  }
});

router.delete("/deleteOng/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var resp = await Functions.deleteBD(id,OngModel);
    res.json(resp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
* ROUTES PARA PEDIDO DE ADOÇÃO
*/

router.post("/postPedidoAdocao", async (req, res) => {
  var dataObject = req.body;
  try {
    var dataToSave = await Functions.salvarBD(dataObject, PedidoAdocaoModel);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Retirei a rota /getAllPedidoAdocao, pois não irá ser utilizada, ja que não tem motivos para a ONG ou o Cliente conseguir ter acesso ou averiguar todos os pedidos de adoção feito no aplicativo
router.get("/getPedidoAdocaoONG/:id", async (req, res) => {
  var id = req.params.id;
  try {
    var resultado = await PedidosAdocao.PedidosAdocaoONG(id);
    res.json(resultado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getPedidoAdocaoPessoa/:id", async (req, res) => {
  var id = req.params.id;
  try {
    var resultado = await PedidosAdocao.PedidosAdocaoPessoa(id);
    res.json(resultado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/deletePedidoAdocao/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var resp = await Functions.deleteBD(id,PedidoAdocaoModel);
    res.json(resp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
* ROUTES PARA ANIMAIS
*/

router.post("/postAnimal", async (req, res) => {
  var dataObject = req.body;
  try {
    var dataToSave = await Functions.salvarBD(dataObject, AnimalModel);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllAnimal", async (req, res) => {
  try{
    var dat = await animal.GetAllAnimal();
    res.status(200).json(dat);
  }catch(error) {
    res.status(400).json({ message: error.message })
  }
});

router.get("/getOneAnimal/:id", async (req, res) => {
  try{
    var id = req.params.id;
    var response = await animal.OneAnimal(id);
    res.status(200).json(response);
  }catch(error) {
    res.status(400).json({ message: error.message});
  }
});

router.get("/getAnimalONG/:id", async (req, res) => {
  try{
    var id = req.params.id;
    var response = await animal.GetAnimalONG(id);
    res.status(200).json(response);
  }catch(error) {
    res.status(400).json({ message: error.message});
  }
});

router.put("/updateAnimal/:id", async (req, res) => {
  var id = req.params.id;
  var updatedData = req.body;
  try{
  var data = await Functions.updateBD(id,updatedData,AnimalModel);
  res.status(200).json(data);
  }catch(error){
    res.status(500).json({ message:error.message })
  }
});

router.delete("/deleteAnimal/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var resp = await Functions.deleteBD(id,AnimalModel);
    res.json(resp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
* ROUTES PARA ADOAÇÕES
*/

router.post("/postAdocao", async (req, res) => {
  var dataObject = req.body;
  try {
    var dataToSave = await Functions.salvarBD(dataObject, AdocaoModel);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllAdocaoONG/:id", async (req, res) => {
  var id = req.params.id;
  try{
    var dat = await adocao.GetAllAdocaoONG(id);
    res.status(200).json(dat);
  }catch(error) {
    res.status(400).json({ message: error.message })
  }
});

router.get("/getAllAdocaoPessoa/:id", async (req, res) => {
  var id = req.params.id;
  try{
    var dat = await adocao.GetAllAdocaoPessoa(id);
    res.status(200).json(dat);
  }catch(error) {
    res.status(400).json({ message: error.message })
  }
});

router.get("/getOneAdocao/:id", async (req, res) => {
  try{
    var id = req.params.id;
    var response = await Functions.getOne(id, AdocaoModel);
    res.status(200).json(response);
  }catch(error) {
    res.status(400).json({ message: error.message});
  }
});

router.put("/updateAdocao/:id", async (req, res) => {
  var id = req.params.id;
  var updatedData = req.body;
  try{
  var data = await Functions.updateBD(id,updatedData,AdocaoModel);
  res.status(200).json(data);
  }catch(error){
    res.status(500).json({ message:error.message })
  }
});

router.delete("/deleteAdocao/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var resp = await Functions.deleteBD(id,AdocaoModel);
    res.json(resp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * ROUTES PARA UFs
 */

router.post("/postUF", async (req, res) => {
  var dataObject = req.body;
  try {
    var dataToSave = await Functions.salvarBD(dataObject, UfModel);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllUF", async (req, res) => {
  try{
    var dat = await Functions.getAll(UfModel);
    res.status(200).json(dat);
  }catch(error) {
    res.status(400).json({ message: error.message })
  }
});

router.get("/getOneUF/:id", async (req, res) => {
  try{
    var id = req.params.id;
    var response = await Functions.getOne(id, UfModel);
    res.status(200).json(response);
  }catch(error) {
    res.status(400).json({ message: error.message});
  }
});

/**
 * ROUTES PARA CIDADES
 */

router.post("/postCidade", async (req, res) => {
  var dataObject = req.body;
  try {
    var dataToSave = await Functions.salvarBD(dataObject, CidadeModel);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllCidade", async (req, res) => {
  try{
    var dat = await Functions.getAll(CidadeModel);
    res.status(200).json(dat);
  }catch(error) {
    res.status(400).json({ message: error.message })
  }
});

router.get("/getOneCidade/:id", async (req, res) => {
  try{
    var id = req.params.id;
    var response = await Functions.getOne(id, CidadeModel);
    res.status(200).json(response);
  }catch(error) {
    res.status(400).json({ message: error.message});
  }
});

/**
 * ROUTES PARA RAÇAS DE CACHORRO
 */

router.post("/postRacaCachorro", async (req, res) => {
  var dataObject = req.body;
  try {
    var dataToSave = await Functions.salvarBD(dataObject, RacaCachorroModel);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllRacaCachorro", async (req, res) => {
  try{
    var dat = await Functions.getAll(RacaCachorroModel);
    res.status(200).json(dat);
  }catch(error) {
    res.status(400).json({ message: error.message })
  }
});

router.get("/getOneRacaCachorro/:id", async (req, res) => {
  try{
    var id = req.params.id;
    var response = await Functions.getOne(id, RacaCachorroModel);
    res.status(200).json(response);
  }catch(error) {
    res.status(400).json({ message: error.message});
  }
});

/**
 * ROUTES PARA RAÇAS DE GATO
 */

router.post("/postRacaGato", async (req, res) => {
  var dataObject = req.body;
  try {
    var dataToSave = await Functions.salvarBD(dataObject, RacaGatoModel);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllRacaGato", async (req, res) => {
  try{
    var dat = await Functions.getAll(RacaGatoModel);
    res.status(200).json(dat);
  }catch(error) {
    res.status(400).json({ message: error.message })
  }
});

router.get("/getOneRacaGato/:id", async (req, res) => {
  try{
    var id = req.params.id;
    var response = await Functions.getOne(id, RacaGatoModel);
    res.status(200).json(response);
  }catch(error) {
    res.status(400).json({ message: error.message});
  }
});

/**
 * ROUTES PARA VACINAS FELINAS
 */

router.post("/postVacinaFelina", async (req, res) => {
  var dataObject = req.body;
  try {
    var dataToSave = await Functions.salvarBD(dataObject, VacinaFelinaModel);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllVacinaFelina", async (req, res) => {
  try{
    var dat = await Functions.getAll(VacinaFelinaModel);
    res.status(200).json(dat);
  }catch(error) {
    res.status(400).json({ message: error.message })
  }
});

router.get("/getOneVacinaFelina/:id", async (req, res) => {
  try{
    var id = req.params.id;
    var response = await Functions.getOne(id, VacinaFelinaModel);
    res.status(200).json(response);
  }catch(error) {
    res.status(400).json({ message: error.message});
  }
});

/**
 * ROUTES PARA VACINAS CANINAS
 */

router.post("/postVacinaCanina", async (req, res) => {
  var dataObject = req.body;
  try {
    var dataToSave = await Functions.salvarBD(dataObject, VacinaCaninaModel);
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getAllVacinaCanina", async (req, res) => {
  try{
    var dat = await Functions.getAll(VacinaCaninaModel);
    res.status(200).json(dat);
  }catch(error) {
    res.status(400).json({ message: error.message })
  }
});

router.get("/getOneVacinaCanina/:id", async (req, res) => {
  try{
    var id = req.params.id;
    var response = await Functions.getOne(id, VacinaCaninaModel);
    res.status(200).json(response);
  }catch(error) {
    res.status(400).json({ message: error.message});
  }
});