const connection = require('./connection');

const getVacinasFelinas = async() => {
    const [query] = await connection.execute('SELECT * FROM adopetme.VacinasFelinas');
    return query;
}

const getVacinasFelinasId = async (id) => {
    const [query] = await connection.execute('SELECT * FROM adopetme.VacinasFelinas WHERE idVacina = ?', [id]);
    if (query.length === 0) {
        return null; // Retorna null se não encontrar nenhum elemento com o ID especificado
    }
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

module.exports = {
    getVacinasFelinas,
    getVacinasFelinasId
}