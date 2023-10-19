async function salvarBD(objeto, tipo) {
    try {
      var data = new tipo(objeto);
      var dataToSave = await data.save();
      return dataToSave;
    } catch (error) {
      throw error;
    }
  }
  async function updateBD(id, updatedData, tipoModel) {
    try {
      var options = { new: true };
      var result = await tipoModel.findOneAndUpdate({ "_id": id.trim() }, updatedData, options);
      return result; // Retornar o resultado da atualização
    } catch (error) {
      throw error; // Lançar um erro em caso de falha
    }
  }  

    async function getAll(tipoModel){
    try {
        var data = await tipoModel.find();
        return data;
        } catch (error) {
        throw error;
        }
    }
    async function getOne(id, tipoModel){
        try {
            var data = await tipoModel.findById(id);
            return data;
          } catch (error) {
            throw error;
          }
    }
    async function deleteBD(id,tipoModel){
        try {
            await tipoModel.findByIdAndDelete(id);
            return 'Documento deletado...';
          } catch (error) {
            throw error;
          }
    }

  module.exports = {
    salvarBD,
    updateBD,
    getAll,
    getOne,
    deleteBD
  }