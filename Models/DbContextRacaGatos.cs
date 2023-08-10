using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

public class DbContextRacaGatos : DbContext
{
    public DbContextRacaGatos(DbContextOptions<DbContextRacaGatos> options)
        : base(options)
    {
    }

    public DbSet<racaGatosApi> RacaGatos { get; set; }
}