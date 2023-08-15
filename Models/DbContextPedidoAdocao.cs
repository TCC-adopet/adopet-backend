//codigo usado para linkar a tabela no banco de dados com a classe especifica

using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

public class DbContextPedidoAdocao : DbContext
{
    public DbContextPedidoAdocao(DbContextOptions<DbContextPedidoAdocao> options)
        : base(options)
    {
    }

    public DbSet<pedidoAdocaoApi> PedidoAdocao { get; set; }
}