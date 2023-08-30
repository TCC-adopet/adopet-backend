const connection = require('./connection');

const getCidades = async() => {
    const [query] = await connection.execute('SELECT * FROM adopetme.cidades');
    return query;
}

const getCidadesId = async (id) => {
    const [query] = await connection.execute('SELECT * FROM adopetme.Cidades WHERE idCidade = ?', [id]);
    if (query.length === 0) {
        return null; // Retorna null se não encontrar nenhum elemento com o ID especificado
    }
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

module.exports = {
    getCidades,
    getCidadesId
}