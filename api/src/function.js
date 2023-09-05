const connection = require('./connection');

async function lerIdBd(id, quer){
    const [query] = await connection.execute(quer, id);
    if (query.length === 0) {
        return null; // Retorna null se não encontrar nenhum elemento com o ID especificado
    }
    return query[0]; // Retorna o primeiro elemento encontrado (já que estamos buscando por ID)
}

async function salvarBd(dataObject, query){
    if(dataObject == null){
        throw new Error('informações não fornecido.');
    }
    const columns = [];//array para pegar o nome da propriedade, por exemplo: nome
    const values = [];//array para pegar o valor da propriedade, por exemplo: joão

    for (const column in dataObject) {
        columns.push(column);//pega o nome da propriedade e coloca no array columns
        values.push(dataObject[column]);//pega o valor da propriedade e coloca no array values
    }

    const placeholders = new Array(values.length).fill('?').join(', ');//pega o tamanho do array values, e cria um array no mesmo tamanho, e em todas as entradas do array placeholders, é colocado o valor '?', para formatar a nova query
    const formattedQuery = `${query} (${columns.join(', ')}) VALUES (${placeholders})`;// começa a criar a nova query, aonde pega a query fornecida, adiciona as informações do array columns, e da um set nos valores do placeholders

    try{
        const[result] = await connection.execute(formattedQuery,values);
        const insertId = result && result.insertId ? result.insertId : null;
        return insertId;
    } catch(error){
        throw new Error(`Erro ao inserir objeto: ${error.message}`);
    }
}

async function updateBd(dataObject,query,idCollumName,idValue){
    if(!idValue){
        throw new Error('id não fornecido.');
    }
    if (dataObject==null){
        throw new Error('informações não fornecidas.');
    }
    const columns = [];
    const values = [];
    for (const column in dataObject) {
        if(dataObject.hasOwnProperty(column) && dataObject[column] !== undefined && dataObject[column] !== null){
            columns.push(`${column} = ?`);
            values.push(dataObject[column]);
        }
    }
    const formattedQuery = `${query} ${columns.join(', ')} where ${idCollumName} = ${idValue}`
    try{
        [res] = await connection.execute(formattedQuery,values);
        if(res.affectedRows>0){
            const result = "Objeto atualizado com sucesso";
            return result;
        }
        else{
            throw new Error(`Erro, Objeto inexistente: ${error.message}`);  
        }
    }catch (error){
        throw new Error(`Erro ao atualizar o objeto: ${error.message}`);
    }
}

async function deleteBd(query,id,idCollumName){
    if(id==null){
        throw new Error('id não fornecido');
    }
    const formattedQuery = `${query} where ${idCollumName} = ?`
    try{
        await connection.execute(formattedQuery,[id]);
        const result = "Objeto deletado com sucesso";
        return result;
    }catch(error){
        throw new Error(`Erro ao deletar objeto: ${error.message}`);
    }
}

module.exports = {
    lerIdBd,
    salvarBd,
    updateBd,
    deleteBd
}