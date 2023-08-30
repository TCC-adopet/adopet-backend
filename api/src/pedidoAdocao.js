const connection = require('./connection');
const {salvarBd, updateBd, deleteBd } = require('./function')

const getPedidoAdocao = async () => {
    const [query] = await connection.execute('SELECT * FROM adopetme.PedidoAdocao');
    return query;
}

const getPedidoAdocaoId = async (id) => {
    const [query] = await connection.execute('SELECT * FROM adopetme.PedidoAdocao WHERE idPedido = ?', [id]);
    if (query.length === 0) {
        return null; 
    }
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