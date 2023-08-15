//codigo usado para linkar a tabela no banco de dados com a classe especifica

using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

public class DbContextAdocao : DbContext
{
    public DbContextAdocao(DbContextOptions<DbContextAdocao> options)
        : base(options)
    {
    }

    public DbSet<adocaoApi> Adocao { get; set; }
}