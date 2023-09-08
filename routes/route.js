var express = require("express");
var Models = require("../models/model");
var Functions = require("../functions/function");
var PessoaModel = Models.pessoa;
var OngModel = Models.ong;
var PedidoAdocaoModel = Models.PedidoAdocao;

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
    try{
    var data = await Functions.updateBD(id,updatedData,PessoaModel);
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

  router.get("/getAllPedidoAdocao", async (req, res) => {
    try{
      var dat = await Functions.getAll(PedidoAdocaoModel);
      res.status(200).json(dat);
    }catch(error) {
      res.status(400).json({ message: error.message })
    }
  });

  router.get("/getOnePedidoAdocao/:id", async (req, res) => {
    try{
      var id = req.params.id;
      var response = await Functions.getOne(id, PedidoAdocaoModel);
      res.status(200).json(response);
    }catch(error) {
      res.status(400).json({ message: error.message});
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