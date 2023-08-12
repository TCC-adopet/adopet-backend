using System;
using System.ComponentModel.DataAnnotations;

namespace AdopetMeApi.Models
{
    public class adocaoApi{
    [Key]public int idAdocao { get; set; }
    public string? idPedido { get; set; }
    public string? petAdotado { get; set; }
    public DateTime? dataAdocao { get; set; }
    public DateTime? dataRecusa { get; set; }
    public string? idAnimal { get; set; }
    }
    public class adocaoUploadApi{
    public string? idPedido { get; set; }
    public string? petAdotado { get; set; }
    public DateTime? dataAdocao { get; set; }
    public DateTime? dataRecusa { get; set; }
    public string? idAnimal { get; set; }
    }
    public class adocaoUpdateApi{
    public string? petAdotado { get; set; }
    public DateTime? dataAdocao { get; set; }
    public DateTime? dataRecusa { get; set; }
    }
}