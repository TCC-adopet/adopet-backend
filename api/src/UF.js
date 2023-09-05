const connection = require('./connection');
const { lerIdBd } = require('./function');

const getUF = async() => {
    const [query] = await connection.execute('SELECT * FROM adopetme.UF');
    return query;
}

const getUFid = async (id) => {
    const quer = 'SELECT * FROM adopetme.UF WHERE idUF = ?';
    [query] = await lerIdBd(id,quer);
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

module.exports = {
    getUF,
    getUFid
}