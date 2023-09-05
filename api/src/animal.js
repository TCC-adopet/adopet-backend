const connection = require('./connection');
const { lerIdBd, salvarBd, updateBd, deleteBd } = require('./function')

const getAnimal = async () => {
    const [query] = await connection.execute('SELECT * FROM adopetme.Animal');
    return query;
}

const getAnimalId = async (id) => {
    const quer = 'SELECT * FROM adopetme.Animal WHERE idAnimal = ?';
    [query] = await lerIdBd(id,quer);
    return query[0]; 
}

const setAnimal = async (Data) => {
    const query = 'insert into adopetme.Animal';
    const id = await salvarBd(Data,query);
    return id;
}

const putAnimal = async (id, Data) => {
    const query = 'update adopetme.Animal set';
    const idCollumName = "idAnimal";
    const result = await updateBd(Data,query,idCollumName,id);
    return result;
}

const deleteAnimal = async (Id) => {
    const query = 'DELETE FROM adopetme.Animal';
    idCollumName = 'idAnimal';
    const result = await deleteBd(query,Id,idCollumName);
    return result;
}
module.exports = {
    getAnimal,
    getAnimalId,
    setAnimal,
    putAnimal,
    deleteAnimal
};