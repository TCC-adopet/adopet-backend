using System;
using System.ComponentModel.DataAnnotations;

namespace AdopetMeApi.Models
{
    public class pedidoAdocaoApi{
    [Key]public string? idPedido { get; set; }
    public string? idPessoa { get; set; }
    public DateTime dataPedido { get; set; }
    public string? idONG { get; set; }
    }
    public class pedidoAdocaoUploadApi{
    public string? idPessoa { get; set; }
    public DateTime dataPedido { get; set; }
    public string? idONG { get; set; }
    }
}