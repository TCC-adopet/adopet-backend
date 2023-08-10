using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

public class DbContextRacaCachorros : DbContext
{
    public DbContextRacaCachorros(DbContextOptions<DbContextRacaCachorros> options)
        : base(options)
    {
    }

    public DbSet<racaCachorrosApi> RacaCachorro { get; set; }
}