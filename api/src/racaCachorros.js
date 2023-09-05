const connection = require('./connection');
const { lerIdBd } = require('./function');

const getRacaCachorro = async() => {
    const [query] = await connection.execute('SELECT * FROM adopetme.RacaCachorro');
    return query;
}

const getRacaCachorroId = async (id) => {
    const quer = 'SELECT * FROM adopetme.RacaCachorro WHERE idRaca = ?';
    [query] = await lerIdBd(id,quer);
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

module.exports = {
    getRacaCachorro,
    getRacaCachorroId
}