using System;
using System.ComponentModel.DataAnnotations;

namespace AdopetMeApi.Models
{
    public class ongApi
    {
        [Key] public int idONG { get; set; }
        public string? nomeEstabelecimento { get; set; }
        public string? nomeDiretor { get; set; }
        public string? codCnpj { get; set; }
        public string? cpfDiretor {get; set; }
        public string? idCidade {get; set; }
        public string? rua { get; set; }
        public int? numeroEstabelecimento { get; set; }
        public string? codCEP { get; set; }
        public string? numeroTelefone { get; set; }
        public string? senha { get; set; }
        public byte[]? imagem { get; set; }
    }
    public class ongApiUploadDto
    {
        public string? nomeEstabelecimento { get; set; }
        public string? nomeDiretor { get; set; }
        public string? codCnpj { get; set; }
        public string? cpfDiretor {get; set; }
        public string? idCidade {get; set; }
        public string? rua { get; set; }
        public int? numeroEstabelecimento { get; set; }
        public string? codCEP { get; set; }
        public string? numeroTelefone { get; set; }
        public string? senha { get; set; }
        public IFormFile? arquivo { get; set; }
    }
    public class ongApiUpdateDto
    {
        public string? nomeEstabelecimento { get; set; }
        public string? nomeDiretor { get; set; }
        public string? cpfDiretor {get; set; }
        public string? idCidade {get; set; }
        public string? rua { get; set; }
        public int? numeroEstabelecimento { get; set; }
        public string? codCEP { get; set; }
        public string? numeroTelefone { get; set; }
        public string? senha { get; set; }
        public IFormFile? arquivo { get; set; }
    }
}