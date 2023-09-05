const connection = require('./connection');
const { lerIdBd } = require('./function');

const getVacinasCaninas = async() => {
    const [query] = await connection.execute('SELECT * FROM adopetme.VacinasCaninas');
    return query;
}

const getVacinasCaninasId = async (id) => {
    const quer = 'SELECT * FROM adopetme.VacinasCaninas WHERE idVacina = ?';
    [query] = await lerIdBd(id,quer);
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

module.exports = {
    getVacinasCaninas,
    getVacinasCaninasId
}