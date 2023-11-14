var multer = require('multer');
const fs = require('fs');

var uploadFoto = () => {
    return multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'uploads/')
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

module.exports = uploadFoto;