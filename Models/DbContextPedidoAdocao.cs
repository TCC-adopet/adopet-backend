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