//codigo usado para linkar a tabela no banco de dados com a classe especifica

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