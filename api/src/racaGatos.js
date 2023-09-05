const connection = require('./connection');
const { lerIdBd } = require('./function');

const getRacaGatos = async() => {
    const [query] = await connection.execute('SELECT * FROM adopetme.RacaGatos');
    return query;
}

const getRacaGatosId = async (id) => {
    const quer = 'SELECT * FROM adopetme.RacaGatos WHERE idRaca = ?';
    [query] = await lerIdBd(id,quer);
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

module.exports = {
    getRacaGatos,
    getRacaGatosId
}