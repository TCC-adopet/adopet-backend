var multer = require('multer');

var uploadFotoPerfil = () => {
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
                
                var newName = `${clientId}-Perfil.${extensao}`;
            
                cb(null, newName);
            }
        })
    });
};

module.exports = uploadFotoPerfil;