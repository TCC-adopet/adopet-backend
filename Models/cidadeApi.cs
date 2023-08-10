using System;
using System.ComponentModel.DataAnnotations;

namespace AdopetMeApi.Models
{
    public class cidadeApi{
    [Key]public string? idCidade { get; set; }
    public string? nmCidade { get; set; }
    public string? idUF { get; set; }
    }
}