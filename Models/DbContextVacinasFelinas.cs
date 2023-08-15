//codigo usado para linkar a tabela no banco de dados com a classe especifica

using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

public class DbContextVacinasFelinas : DbContext
{
    public DbContextVacinasFelinas(DbContextOptions<DbContextVacinasFelinas> options)
        : base(options)
    {
    }

    public DbSet<vacinasFelinasApi> VacinasFelinas { get; set; }
}