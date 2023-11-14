var multer = require('multer');
const fs = require('fs');

var uploadFoto = () => {
    return multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'uploads/fotos')
            },
            filename: function (req, file, cb) {
                var clientId = req.params.id; // Acessando o ID do cliente a partir dos parâmetros da URL
                if (!clientId) {
                    return cb(new Error('O ID do cliente não foi fornecido.'));
                }
                var extensao = 'png';
                
                var baseName = `${clientId}-foto`;
                var newName = `${baseName}.${extensao}`;

                let i = 1;
                while (fs.existsSync(`uploads/${newName}`)) {
                    newName = `${baseName}(${i}).${extensao}`;
                    i++;
                }
            
                cb(null, newName);
            }
        })
    });
};

function getUploadedFotos(req, res) {
    const uploadsDirectory = 'uploads/fotos';
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
        splited = splited[0].split('-');
        if(splited[0] == id)
        // Adicionando os nomes dos arquivos na lista
        uploadedFiles.push(file);
    });

    return uploadedFiles;
}

module.exports = {
    uploadFoto,
    getUploadedFotos
};