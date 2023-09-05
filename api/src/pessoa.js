const connection = require('./connection');
const { lerIdBd, salvarBd, updateBd, deleteBd } = require('./function');

const getPessoa = async() => {
    const [query] = await connection.execute('SELECT * FROM adopetme.pessoa');
    return query;
}

const getPessoaId = async (id) => {
    const quer = 'SELECT * FROM adopetme.Pessoa WHERE idPessoa = ?';
    [query] = await lerIdBd(id, quer);
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

const setPessoa = async (Data) => {
    const query = 'insert into adopetme.Pessoa';
    const id = await salvarBd(Data,query);
    return id;
}

const putPessoa = async (id, Data) => {
    const query = 'update adopetme.Pessoa set';
    const idCollumName = "idPessoa";
    const result = await updateBd(Data, query, idCollumName, id);
    return result;
}
const deletePessoa = async (Id) => {
    const query = 'DELETE FROM adopetme.Pessoa';
    idCollumName = 'idPessoa';
    const result = await deleteBd(query,Id,idCollumName);
    return result;
}

module.exports = {
    getPessoa,
    getPessoaId,
    setPessoa,
    putPessoa,
    deletePessoa
};