var multer = require('multer');
var fs = require('fs');
var path = require('path');

var uploadFotoPerfil = () => {
    return multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'uploads/perfil')
            },
            filename: function (req, file, cb) {
                var clientId = req.params.id; // Acessando o ID do cliente a partir dos parâmetros da URL
                if (!clientId) {
                    return cb(new Error('O ID do cliente não foi fornecido.'));
                }
                var extensao = 'png';
                
                var newName = `${clientId}-Perfil.${extensao}`;
            
                cb(null, newName);
            }
        })
    });
};

function getUploadedFotosPerfil(req, res) {
    const uploadsDirectory = 'uploads/perfil';
    var uploadedFiles = [];
    var splited = [];
    var id = req.params.id;

    // Verificando se a pasta 'uploads/perfil' existe
    if (!fs.existsSync(uploadsDirectory)) {
        fs.mkdirSync(uploadsDirectory);
    }

    // Lendo os arquivos da pasta 'uploads/'
    fs.readdirSync(uploadsDirectory).forEach(file => {
        
        splited = file.split('.');
        if(splited[0] == `${id}-Perfil`)
        // Adicionando os nomes dos arquivos na lista
        uploadedFiles.push(file);
    });

    return uploadedFiles;
}

module.exports ={
    getUploadedFotosPerfil,
    uploadFotoPerfil
};