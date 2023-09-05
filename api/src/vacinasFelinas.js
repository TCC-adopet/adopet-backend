const connection = require('./connection');
const { lerIdBd } = require('./function');

const getVacinasFelinas = async() => {
    const [query] = await connection.execute('SELECT * FROM adopetme.VacinasFelinas');
    return query;
}

const getVacinasFelinasId = async (id) => {
    const quer = 'SELECT * FROM adopetme.VacinasFelinas WHERE idVacina = ?';
    [query] = await lerIdBd(id,quer);
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

module.exports = {
    getVacinasFelinas,
    getVacinasFelinasId
}