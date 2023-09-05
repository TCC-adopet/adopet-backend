const connection = require('./connection');
const {salvarBd, deleteBd, lerIdBd } = require('./function');

const getPedidoAdocao = async () => {
    const [query] = await connection.execute('SELECT * FROM adopetme.PedidoAdocao');
    return query;
}

const getPedidoAdocaoId = async (id) => {
    const quer = 'SELECT * FROM adopetme.PedidoAdocao WHERE idPedido = ?';
    [query] = await lerIdBd(id,quer);
    return query[0]; 
}

const setPedidoAdocao = async (Data) => {
    const query = 'insert into adopetme.PedidoAdocao';
    const id = await salvarBd(Data,query);
    return id;
}

const deletePedidoAdocao = async (Id) => {
    const query = 'DELETE FROM adopetme.Adocao';
    idCollumName = 'idAdocao';
    const result = await deleteBd(query,Id,idCollumName);
    return result;
}
module.exports = {
    getPedidoAdocao,
    getPedidoAdocaoId,
    setPedidoAdocao,
    deletePedidoAdocao
};