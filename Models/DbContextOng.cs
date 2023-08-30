//codigo usado para linkar a tabela no banco de dados com a classe especifica

using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

public class DbContextOng : DbContext
{
    public DbContextOng(DbContextOptions<DbContextOng> options)
        : base(options)
    {
    }

    public DbSet<ongApi> Ong { get; set; }
}