const connection = require('./connection');

const getRacaCachorro = async() => {
    const [query] = await connection.execute('SELECT * FROM adopetme.RacaCachorro');
    return query;
}

const getRacaCachorroId = async (id) => {
    const [query] = await connection.execute('SELECT * FROM adopetme.RacaCachorro WHERE idRaca = ?', [id]);
    if (query.length === 0) {
        return null; // Retorna null se não encontrar nenhum elemento com o ID especificado
    }
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

module.exports = {
    getRacaCachorro,
    getRacaCachorroId
}