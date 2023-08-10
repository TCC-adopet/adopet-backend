using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

public class DbContextVacinasCaninas : DbContext
{
    public DbContextVacinasCaninas(DbContextOptions<DbContextVacinasCaninas> options)
        : base(options)
    {
    }

    public DbSet<vacinasCaninasApi> VacinasCaninas { get; set; }
}