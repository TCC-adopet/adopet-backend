//codigo usado para receber as informações da tabela no banco de dados

using System;
using System.ComponentModel.DataAnnotations;

namespace AdopetMeApi.Models
{
    public class UfApi{
    [Key]public string? idUF { get; set; }
    public string? nmUF { get; set; }
    public string? siglaUF { get; set; }
    }
}