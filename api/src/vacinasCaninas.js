const connection = require('./connection');

const getVacinasCaninas = async() => {
    const [query] = await connection.execute('SELECT * FROM adopetme.VacinasCaninas');
    return query;
}

const getVacinasCaninasId = async (id) => {
    const [query] = await connection.execute('SELECT * FROM adopetme.VacinasCaninas WHERE idVacina = ?', [id]);
    if (query.length === 0) {
        return null; // Retorna null se não encontrar nenhum elemento com o ID especificado
    }
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

module.exports = {
    getVacinasCaninas,
    getVacinasCaninasId
}