const connection = require('./connection');
const { lerIdBd, salvarBd, updateBd, deleteBd } = require('./function')

const getAdocao = async () => {
    const [query] = await connection.execute('SELECT * FROM adopetme.Adocao');
    return query;
}

const getAdocaoId = async (id) => {
    const que = 'SELECT * FROM adopetme.Adocao WHERE idAdocao = ?';
    [query] = await lerIdBd(id,que);
    return query[0]; 
}

const setAdocao = async (Data) => {
    const query = 'insert into adopetme.Adocao';
    const id = await salvarBd(Data,query);
    return id;
}

const putAdocao = async (id, Data) => {
    const query = 'update adopetme.Adocao set';
    const idCollumName = "idAdocao";
    const result = await updateBd(Data,query,idCollumName,id);
    return result;
}

const deleteAdocao = async (Id) => {
    const query = 'DELETE FROM adopetme.Adocao';
    idCollumName = 'idAdocao';
    const result = await deleteBd(query,Id,idCollumName);
    return result;
}
module.exports = {
    getAdocao,
    getAdocaoId,
    setAdocao,
    putAdocao,
    deleteAdocao
};