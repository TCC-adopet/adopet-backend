//codigo usado para receber as informações da tabela no banco de dados

using System;
using System.ComponentModel.DataAnnotations;

namespace AdopetMeApi.Models
{
    public class vacinasCaninasApi{
    [Key]public string? idVacina { get; set; }
    public string? nmVacina { get; set; }
    public string? validadeVacina { get; set; } //é do tipo string, pois ao invés de falar a validade no modelo DateTime, ele irá usar no modelo "2 anos"
    }
}