using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

public class DbContextCidades : DbContext
{
    public DbContextCidades(DbContextOptions<DbContextCidades> options)
        : base(options)
    {
    }

    public DbSet<cidadeApi> Cidades { get; set; }
}