const connection = require('./connection');

const getUF = async() => {
    const [query] = await connection.execute('SELECT * FROM adopetme.UF');
    return query;
}

const getUFid = async (id) => {
    const [query] = await connection.execute('SELECT * FROM adopetme.UF WHERE idUF = ?', [id]);
    if (query.length === 0) {
        return null; // Retorna null se não encontrar nenhum elemento com o ID especificado
    }
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

module.exports = {
    getUF,
    getUFid
}