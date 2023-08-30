//codigo usado para receber as informações da tabela no banco de dados

using System;
using System.ComponentModel.DataAnnotations;

namespace AdopetMeApi.Models
{
    public class racaCachorrosApi{
    [Key]public string? idRaca { get; set; }
    public string? nmRaca { get; set; }
    }
}