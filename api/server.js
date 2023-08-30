const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const ong = require("./src/ong");
const pessoa = require("./src/pessoa");

const app = express();  // Aqui, estamos chamando a função express() para criar o aplicativo

// Configuração do CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(bodyParser.json());

const port = 3003;

app.listen(port, () => { 
    console.log("Funcionando na porta " + port);
});

//endpoints para ONG

app.get('/getOng', async (req, res) => {
    const query = await ong.getOng();
    return res.status(201).json(query);
});

app.get('/getOngId/:id', async (req, res) => {
    const idONG = req.params.id; // Obtém o ID da URL

    try {
        const query = await ong.getOngId(idONG); // Chama a função getOngId passando o ID
        if (query) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'ONG não encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/setOng', async (req, res) => {
    try {
        const insertId = await ong.setOng(req.body);
        res.json({ insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/putOng/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const query = await ong.putOng(id,req.body);
        res.json({query});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/deleteOng/:id', async (req, res) => {
    const ongId = req.params.id;

    try {
        const result = await ong.deleteOng(ongId);
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//endpoints para Pessoa

app.get('/getPessoa', async (req,res) => {
    const query = await pessoa.getPessoa();
    return res.status(201).json(query);
});

app.get('/getPessoaId/:id', async (req, res) => {
    const idPessoa = req.params.id;

    try {
        const query = await pessoa.getPessoaId(idPessoa);
        if (query) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'pessoa não encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/setPessoa', async (req, res) => {
    try {
        const insertId = await pessoa.setPessoa(req.body);
        res.json({ insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/putPessoa/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const query = await pessoa.putPessoa(id,req.body);
        res.json({query});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/deletePessoa/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await pessoa.deletePessoa(id);
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});