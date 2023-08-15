//codigo usado para linkar a tabela no banco de dados com a classe especifica

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