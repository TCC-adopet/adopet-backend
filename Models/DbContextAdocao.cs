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