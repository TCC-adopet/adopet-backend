using System;
using System.ComponentModel.DataAnnotations;

namespace AdopetMeApi.Models
{
    public class animalApi{
    [Key]public int idAnimal { get; set; }
    public DateTime? dataNascimento { get; set; }
    public int? idONG { get; set; }
    public string? tipoRaca { get; set; }
    public string? racaCachorro { get; set; }
    public string? racaGato { get; set; }
    public string? nomeAnimal { get; set; }
    public string? porte { get; set; }
    public string? sexo { get; set; }
    public string? vacinaGato { get; set; }
    public string? vacinaCachorro { get; set; }
    public string? animalCastrado { get; set; }
    public string? animalAdotado { get; set; }
    public string? descricaoAnimal { get; set; }
    public DateTime? dataUltimaVacina { get; set; }
    public byte[]? imagem { get; set; }
    }
    public class animalUploadApi{
    public DateTime? dataNascimento { get; set; }
    public int? idONG { get; set; }
    public string? tipoRaca { get; set; }
    public string? racaCachorro { get; set; }
    public string? racaGato { get; set; }
    public string? nomeAnimal { get; set; }
    public string? porte { get; set; }
    public string? sexo { get; set; }
    public string? vacinaGato { get; set; }
    public string? vacinaCachorro { get; set; }
    public string? animalCastrado { get; set; }
    public string? animalAdotado { get; set; }
    public string? descricaoAnimal { get; set; }
    public DateTime? dataUltimaVacina { get; set; }
    public IFormFile? imagem { get; set; }
    }
    public class animalUpdateApi{
    public DateTime? dataNascimento { get; set; }
    public string? nomeAnimal { get; set; }
    public string? porte { get; set; }
    public string? sexo { get; set; }
    public string? vacinaGato { get; set; }
    public string? vacinaCachorro { get; set; }
    public string? animalCastrado { get; set; }
    public string? animalAdotado { get; set; }
    public string? descricaoAnimal { get; set; }
    public DateTime? dataUltimaVacina { get; set; }
    public IFormFile? imagem { get; set; }
    }
}