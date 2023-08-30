const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const ong = require("./src/ong");
const pessoa = require("./src/pessoa");
const UF = require("./src/UF");
const cidades = require("./src/cidades");
const RacaGatos = require("./src/racaGatos");
const RacaCachorro = require("./src/racaCachorros");
const VacinasFelinas = require("./src/vacinasFelinas");
const VacinasCaninas = require("./src/vacinasCaninas");
const animal = require("./src/animal");
const adocao = require("./src/adocao");

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

//endpoints para UF

app.get('/getUF', async (req,res) => {
    const query = await UF.getUF();
    return res.status(201).json(query);
});

app.get('/getUFid/:id', async (req, res) => {
    const idUF = req.params.id;

    try {
        const query = await UF.getUFid(idUF);
        if (query) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'UF não encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//endpoints para cidades

app.get('/getCidades', async (req,res) => {
    const query = await cidades.getCidades();
    return res.status(201).json(query);
});

app.get('/getCidadesId/:id', async (req, res) => {
    const idCidade = req.params.id;

    try {
        const query = await cidades.getCidadesId(idCidade);
        if (query) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'Cidade não encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//endpoints para RacaGatos

app.get('/getRacaGatos', async (req,res) => {
    const query = await RacaGatos.getRacaGatos();
    return res.status(201).json(query);
});

app.get('/getRacaGatosId/:id', async (req, res) => {
    const idRaca = req.params.id;

    try {
        const query = await RacaGatos.getRacaGatosId(idRaca);
        if (query) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'Raça não encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//endpoints para racaCachorros

app.get('/getRacaCachorro', async (req,res) => {
    const query = await RacaCachorro.getRacaCachorro();
    return res.status(201).json(query);
});

app.get('/getRacaCachorroId/:id', async (req, res) => {
    const idRaca = req.params.id;

    try {
        const query = await RacaCachorro.getRacaCachorroId(idRaca);
        if (query) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'Raça não encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//endpoints para vacinasFelinas

app.get('/getVacinasFelinas', async (req,res) => {
    const query = await VacinasFelinas.getVacinasFelinas();
    return res.status(201).json(query);
});

app.get('/getVacinasFelinasId/:id', async (req, res) => {
    const idVacina = req.params.id;

    try {
        const query = await VacinasFelinas.getVacinasFelinasId(idVacina);
        if (query) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'Vacina não encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//endpoints para vacinasCaninas

app.get('/getVacinasCaninas', async (req,res) => {
    const query = await VacinasCaninas.getVacinasCaninas();
    return res.status(201).json(query);
});

app.get('/getVacinasCaninasId/:id', async (req, res) => {
    const idVacina = req.params.id;

    try {
        const query = await VacinasCaninas.getVacinasCaninasId(idVacina);
        if (query) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'Vacina não encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//endpoints para animais

app.get('/getAnimal', async (req,res) => {
    const query = await animal.getAnimal();
    return res.status(201).json(query);
});

app.get('/getAnimalId/:id', async (req, res) => {
    const idAnimal = req.params.id;

    try {
        const query = await animal.getAnimalId(idAnimal);
        if (query) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'animal não encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/setAnimal', async (req, res) => {
    try {
        const insertId = await animal.setAnimal(req.body);
        res.json({ insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/putAnimal/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const query = await animal.putAnimal(id,req.body);
        res.json({query});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/deleteAnimal/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await animal.deleteAnimal(id);
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//endpoints para adoção

app.get('/getAdocao', async (req,res) => {
    const query = await adocao.getAdocao();
    return res.status(201).json(query);
});

app.get('/getAdocaoId/:id', async (req, res) => {
    const idAdocao = req.params.id;

    try {
        const query = await adocao.getAdocaoId(idAdocao);
        if (query) {
            res.json(query);
        } else {
            res.status(404).json({ message: 'Adoção não encontrada.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/setAdocao', async (req, res) => {
    try {
        const insertId = await adocao.setAdocao(req.body);
        res.json({ insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/putAdocao/:id', async (req,res) => {
    const id = req.params.id;
    try {
        const query = await adocao.putAdocao(id,req.body);
        res.json({query});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/deleteAdocao/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await adocao.deleteAdocao(id);
        res.json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});