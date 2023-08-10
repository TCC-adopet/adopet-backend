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