const connection = require('./connection');
const {lerIdBd, salvarBd, updateBd, deleteBd } = require('./function')

const getOng = async () => {
    const [query] = await connection.execute('SELECT * FROM adopetme.ong');
    return query;
}

const getOngId = async (id) => {
    const quer = 'SELECT * FROM adopetme.ong WHERE idONG = ?';
    [query] = await lerIdBd(id,quer);
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

const setOng = async (Data) => {
    const query = 'insert into adopetme.Ong';
    const id = await salvarBd(Data,query);
    return id;
}

const putOng = async (id, Data) => {
    const query = 'update adopetme.ong set';
    const idCollumName = "idONG";
    const result = await updateBd(Data,query,idCollumName,id);
    return result;
}

const deleteOng = async (Id) => {
    const query = 'DELETE FROM adopetme.ong';
    idCollumName = 'idONG';
    const result = await deleteBd(query,Id,idCollumName);
    return result;
}
module.exports = {
    setOng,
    getOng,
    getOngId,
    putOng,
    deleteOng
};