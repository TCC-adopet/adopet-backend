const connection = require('./connection');
const { lerIdBd } = require('./function');

const getCidades = async() => {
    const [query] = await connection.execute('SELECT * FROM adopetme.cidades');
    return query;
}

const getCidadesId = async (id) => {
    const quer = 'SELECT * FROM adopetme.Cidades WHERE idCidade = ?';
    [query] = await lerIdBd(id,quer);
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

module.exports = {
    getCidades,
    getCidadesId
}