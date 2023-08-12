using System;
using System.ComponentModel.DataAnnotations;

namespace AdopetMeApi.Models
{
    //formato aceito de data 2023-08-09T14:30:00
   public class pessoaApi
{
    [Key] public int idPessoa { get; set; }
    public string? nome { get; set; }
    public string? sobreNome { get; set; }
    public string? codCpf { get; set; }
    public string? idCidade { get; set; }
    public string? rua { get; set; }
    public string? numeroCasa { get; set; }
    public string? codCEP { get; set; }
    public string? sexo { get; set; }
    public string? apelido { get; set; }
    public string? numeroTelefone { get; set; }
    public string? senha { get; set; }
    public DateTime? dataNascimento { get; set; }
    public byte[]? imagem { get; set; }
}
public class PessoaApiUploadDto{
    public string? nome { get; set; }
    public string? sobreNome { get; set; }
    public string? codCpf { get; set; }
    public string? idCidade { get; set; }
    public string? rua { get; set; }
    public string? numeroCasa { get; set; }
    public string? codCEP { get; set; }
    public string? sexo { get; set; }
    public string? apelido { get; set; }
    public string? numeroTelefone { get; set; }
    public string? senha { get; set; }
    public DateTime? dataNascimento { get; set; }
    public IFormFile? arquivo { get; set; }
}
public class PessoaApiUpdateDto{
    public string? nome { get; set; }
    public string? sobreNome { get; set; }
    public string? idCidade { get; set; }
    public string? rua { get; set; }
    public string? numeroCasa { get; set; }
    public string? codCEP { get; set; }
    public string? sexo { get; set; }
    public string? apelido { get; set; }
    public string? numeroTelefone { get; set; }
    public string? senha { get; set; }
    public DateTime? dataNascimento { get; set; }
    public IFormFile? arquivo { get; set; }
}
}